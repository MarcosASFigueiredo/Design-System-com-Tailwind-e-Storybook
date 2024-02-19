import {
  Switch as HeadlessSwitch,
  type SwitchProps as HeadlessSwitchProps,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import useStyle from './Switch.style'

export type SwitchProps = {
  defaultEnable?: boolean
  variant?: 'common' | 'contract'
  disabled?: boolean
  onChange?: (enabled: boolean) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & HeadlessSwitchProps<any>

const Switch = ({
  defaultEnable: enabledByDefault,
  disabled,
  onChange,
  variant = 'common',
  ...rest
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(enabledByDefault)
  const style = useStyle({ variant, enabled, disabled })
  const toggle = () => {
    const newState = !enabled
    setEnabled(newState)
    onChange?.(newState)
  }
  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={toggle}
      disabled={disabled}
      className={style.Container}
      {...rest}
    >
      <span className="sr-only">switch toggle</span>
      {variant === 'common' && <span className={style.Switch} />}
      {variant === 'contract' && (
        <span className={style.Switch}>
          {enabled && (
            <CheckIcon className={style.Icon} aria-disabled={disabled} />
          )}
          {enabled || (
            <XMarkIcon className={style.Icon} aria-disabled={disabled} />
          )}
        </span>
      )}
    </HeadlessSwitch>
  )
}

export default Switch
