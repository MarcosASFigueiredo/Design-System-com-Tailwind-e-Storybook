"use strict";(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[304],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./components/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Common:()=>Common,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dropdown_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),combobox=__webpack_require__("./node_modules/@headlessui/react/dist/components/combobox/combobox.js"),transition=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),ChevronDownIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/ChevronDownIcon.js"),dropdownStyles_container="relative mt-1",dropdownStyles_containerMenu="relative w-96 cursor-default overflow-hidden rounded-md bg-dark text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300",dropdownStyles_input="border-none py-2 pl-3 bg-dark pr-10 text-sm leading-5 text-gray-primary focus:outline-none",dropdownStyles_button="absolute inset-y-0 right-0 flex items-center pr-2",dropdownStyles_optionsContainer="absolute mt-1 max-h-60 w-96 overflow-auto bg-white rounded-md py-1 text-base shadow-lg",dropdownStyles_option="relative cursor-default select-none py-2 pl-10 pr-4",dropdownStyles_noResult="relative cursor-default select-none py-2 px-4 text-gray-700",_excluded=["list"],__jsx=react.createElement,Dropdown=function Dropdown(_ref){var list=_ref.list,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),_useState=(0,react.useState)(list[0]),selectedItem=_useState[0],setSelectedItem=_useState[1],_useState2=(0,react.useState)(""),query=_useState2[0],setQuery=_useState2[1],filteredItem=""===query?list:list.filter((function(item){return item.toLowerCase().includes(query.toLowerCase())}));return __jsx(combobox.h,(0,esm_extends.Z)({value:selectedItem,onChange:setSelectedItem},rest),__jsx("div",{className:dropdownStyles_container},__jsx("div",{className:dropdownStyles_containerMenu},__jsx(combobox.h.Input,{className:dropdownStyles_input,displayValue:function displayValue(item){return item},onChange:function onChange(event){return setQuery(event.target.value)}}),__jsx(combobox.h.Button,{className:dropdownStyles_button},__jsx(ChevronDownIcon.Z,{className:"h-5 w-5 text-primary","aria-hidden":"true"}))),__jsx(transition.u,{as:react.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:function afterLeave(){return setQuery("")}},__jsx(combobox.h.Options,{className:dropdownStyles_optionsContainer},0===filteredItem.length&&""!==query?__jsx("div",{className:dropdownStyles_noResult},"Nenhum selecionado."):filteredItem.map((function(item){return __jsx(combobox.h.Option,{className:function className(_ref2){var active=_ref2.active;return"".concat(dropdownStyles_option," ").concat(active?"bg-dark text-gray-primary":"text-gray-900")},key:item,value:item},(function(_ref3){var selected=_ref3.selected;return __jsx(react.Fragment,null,__jsx("span",{className:"block truncate ".concat(selected?"font-medium text-primary":"font-normal")},item))}))}))))))};Dropdown.displayName="Dropdown";const Dropdown_Dropdown=Dropdown;try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"components/Dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}var Dropdown_stories_jsx=react.createElement;const Dropdown_stories={title:"Design System/Molecules/Dropdown",component:Dropdown_Dropdown,decorators:[function(Story){return Dropdown_stories_jsx("div",{style:{paddingBottom:"15em",paddingTop:"3em"}},Dropdown_stories_jsx(Story,null))}]};var Primary={args:{list:[]}},Common={args:{list:["Durward Reynolds","Kenton Towne","Therese Wunsch","Benedict Kessler","Katelyn Rohan"]}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    list: []\n  }\n}",...Primary.parameters?.docs?.source}}},Common.parameters={...Common.parameters,docs:{...Common.parameters?.docs,source:{originalSource:"{\n  args: {\n    list: ['Durward Reynolds', 'Kenton Towne', 'Therese Wunsch', 'Benedict Kessler', 'Katelyn Rohan']\n  }\n}",...Common.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Common"]}}]);