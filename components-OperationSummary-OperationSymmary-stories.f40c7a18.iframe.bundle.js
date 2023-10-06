/*! For license information please see components-OperationSummary-OperationSymmary-stories.f40c7a18.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[681],{"./src/components/OperationSummary/OperationSymmary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OperationSummaryCommon:()=>OperationSummaryCommon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OperationSymmary_stories});__webpack_require__("./node_modules/react/index.js");var _OperationSummaryComm,_OperationSummaryComm2,_OperationSummaryComm3,common_utils=__webpack_require__("./src/utils/common.utils.ts"),EntityRow=__webpack_require__("./src/components/EntityRow/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),OperationSummary=function OperationSummary(_ref){var transactionAmount=_ref.transactionAmount,categoryName=_ref.categoryName,title=_ref.title,description=_ref.description,mockRowCellsData=[{dataItemTitle:"Price",dataItemValue:transactionAmount.toString(),isPrice:!0},{dataItemTitle:"Category name",dataItemValue:categoryName},{dataItemTitle:"Name",dataItemValue:title},{dataItemTitle:"Short description",dataItemValue:(0,common_utils.a)(description,15)}];return(0,jsx_runtime.jsx)(EntityRow.V,{rowCells:mockRowCellsData})};OperationSummary.displayName="OperationSummary";try{OperationSummary.displayName="OperationSummary",OperationSummary.__docgenInfo={description:"",displayName:"OperationSummary",props:{categoryName:{defaultValue:null,description:"",name:"categoryName",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},transactionAmount:{defaultValue:null,description:"",name:"transactionAmount",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OperationSummary/OperationSummary.tsx#OperationSummary"]={docgenInfo:OperationSummary.__docgenInfo,name:"OperationSummary",path:"src/components/OperationSummary/OperationSummary.tsx#OperationSummary"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const OperationSymmary_stories={title:"OperationSummary",component:OperationSummary,tags:["autodocs"],argTypes:{categoryName:{type:"string",description:"Category name",table:{defaultValue:{summary:"Common category"}},control:{type:"text"}},description:{type:"string",description:"Operation summary description",table:{defaultValue:{summary:"Buy two Jackets for 200$"}},control:{type:"text"}},title:{type:"string",description:"Operation summary title",table:{defaultValue:{summary:"Buy Jackets"}},control:{type:"text"}},transactionAmount:{type:"number",description:"Transaction amount",table:{defaultValue:{summary:10}},control:{type:"number",min:10,max:100,step:5}}},args:{categoryName:"Common category",description:"Buy two Jackets for 200$",title:"Buy Jackets",transactionAmount:10}};var OperationSummaryCommon={args:{title:"Buy chocolate",description:"Buy 1kg of chocolate"}};OperationSummaryCommon.parameters=_objectSpread(_objectSpread({},OperationSummaryCommon.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_OperationSummaryComm=OperationSummaryCommon.parameters)||void 0===_OperationSummaryComm?void 0:_OperationSummaryComm.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    title: 'Buy chocolate',\n    description: 'Buy 1kg of chocolate'\n  }\n}"},null===(_OperationSummaryComm2=OperationSummaryCommon.parameters)||void 0===_OperationSummaryComm2||null===(_OperationSummaryComm3=_OperationSummaryComm2.docs)||void 0===_OperationSummaryComm3?void 0:_OperationSummaryComm3.source)})});var __namedExportsOrder=["OperationSummaryCommon"]},"./src/components/EntityRow/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>EntityRow});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),EntityRow_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/EntityRow/EntityRow.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(EntityRow_module.Z,options);const EntityRow_EntityRow_module=EntityRow_module.Z&&EntityRow_module.Z.locals?EntityRow_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var EntityRow=function EntityRow(_ref){var rowCells=_ref.rowCells,className=_ref.className;return(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)(className,EntityRow_EntityRow_module.entityRow),children:rowCells.map((function(rowCell,rowCellIndex){var _clsx,dataItemTitle=rowCell.dataItemTitle,dataItemValue=rowCell.dataItemValue,itemButton=rowCell.itemButton,imageUrl=rowCell.imageUrl,isWideCell=rowCell.isWideCell,isPrice=rowCell.isPrice;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)(EntityRow_EntityRow_module.cellDataContainer,(_clsx={},_defineProperty(_clsx,EntityRow_EntityRow_module.cellDataImage,!!imageUrl),_defineProperty(_clsx,EntityRow_EntityRow_module.cellDataButton,!!itemButton),_defineProperty(_clsx,EntityRow_EntityRow_module.cellDataWide,isWideCell),_defineProperty(_clsx,EntityRow_EntityRow_module.cellDataPrice,isPrice),_clsx)),children:[imageUrl&&(0,jsx_runtime.jsx)("img",{src:imageUrl,alt:"image",className:EntityRow_EntityRow_module.cellImage}),dataItemTitle&&dataItemValue&&(0,jsx_runtime.jsxs)("div",{className:EntityRow_EntityRow_module.cellTextDataContainer,children:[(0,jsx_runtime.jsx)("span",{className:EntityRow_EntityRow_module.dataItemValue,children:dataItemValue}),(0,jsx_runtime.jsx)("span",{className:EntityRow_EntityRow_module.dataItemTitle,children:dataItemTitle})]}),itemButton&&(0,jsx_runtime.jsx)("div",{className:EntityRow_EntityRow_module.cellButtonContainer,children:itemButton})]},rowCellIndex)}))})};EntityRow.displayName="EntityRow";try{EntityRow.displayName="EntityRow",EntityRow.__docgenInfo={description:"",displayName:"EntityRow",props:{rowCells:{defaultValue:null,description:"",name:"rowCells",required:!0,type:{name:"IRowCell[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EntityRow/EntityRow.tsx#EntityRow"]={docgenInfo:EntityRow.__docgenInfo,name:"EntityRow",path:"src/components/EntityRow/EntityRow.tsx#EntityRow"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/common.utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>truncateText});var truncateText=function truncateText(text){var maxLength=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return text.length<=maxLength?text:text.substring(0,maxLength)+"..."}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/EntityRow/EntityRow.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".eNXrsDE7abztmo65PlSD{width:100%;max-width:780px;height:76px;border:.5px solid #94a3b8;display:flex;align-items:center}.eNXrsDE7abztmo65PlSD:nth-child(odd){background-color:#fbfcfe}.eNXrsDE7abztmo65PlSD:nth-child(even){background-color:#fff}.eNXrsDE7abztmo65PlSD .gwc8HFv2Xx0tjbIJhpK6{padding:5px 10px;flex-grow:3;display:flex;align-items:center;justify-content:center;text-align:center}.eNXrsDE7abztmo65PlSD .gwc8HFv2Xx0tjbIJhpK6:not(:last-child){border-right:.5px solid #94a3b8}.eNXrsDE7abztmo65PlSD .gwc8HFv2Xx0tjbIJhpK6.tN8RYcktp6hDbp4XXHa7{height:72px;width:72px;max-width:72px}.eNXrsDE7abztmo65PlSD .gwc8HFv2Xx0tjbIJhpK6.YJlBAYclgwb2uedt843n{width:60px;max-width:60px}.eNXrsDE7abztmo65PlSD .gwc8HFv2Xx0tjbIJhpK6.g8tSl99O79xYsf_InGGA{flex-grow:4}.eNXrsDE7abztmo65PlSD .gwc8HFv2Xx0tjbIJhpK6.mfzyhqPJ353xJGxMLH33{flex-grow:1}.eNXrsDE7abztmo65PlSD .gwc8HFv2Xx0tjbIJhpK6 .QoIBrUzK9cKPIiLOg3SK{width:62px;height:62px}.eNXrsDE7abztmo65PlSD .gwc8HFv2Xx0tjbIJhpK6 .yaCqe9dZtsDvcfsVHuXP{display:flex;flex-direction:column;max-width:220px}.eNXrsDE7abztmo65PlSD .gwc8HFv2Xx0tjbIJhpK6 .yaCqe9dZtsDvcfsVHuXP .iMZNahiEYa6c5E1hineK{height:24px;line-height:24px;font-size:14px;color:#1e293b}.eNXrsDE7abztmo65PlSD .gwc8HFv2Xx0tjbIJhpK6 .yaCqe9dZtsDvcfsVHuXP ._0au0kNGRBrlyI9N4JB9Q{height:20px;line-height:20px;font-size:16px;color:#475569}.eNXrsDE7abztmo65PlSD .gwc8HFv2Xx0tjbIJhpK6 .VaddS7ZvT29b7tWSjG4z{display:flex;align-items:center;justify-content:center;height:30px;width:60px}","",{version:3,sources:["webpack://./src/components/EntityRow/EntityRow.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA,CACA,eAAA,CACA,WAAA,CACA,yBAAA,CACA,YAAA,CACA,kBAAA,CAEA,qCACE,wBAAA,CAGF,sCACE,qBAAA,CAGF,4CACE,gBAAA,CACA,WAAA,CAEA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CAEA,6DACE,+BAAA,CAGF,iEACE,WAAA,CACA,UAAA,CACA,cAAA,CAGF,iEACE,UAAA,CACA,cAAA,CAGF,iEACE,WAAA,CAGF,iEACE,WAAA,CAGF,kEACE,UAAA,CACA,WAAA,CAGF,kEACE,YAAA,CACA,qBAAA,CACA,eAAA,CAEA,wFACE,WAAA,CACA,gBAAA,CACA,cAAA,CACA,aAAA,CAGF,yFACE,WAAA,CACA,gBAAA,CACA,cAAA,CACA,aAAA,CAIJ,kEACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,WAAA,CACA,UAAA",sourcesContent:[".entityRow {\n  width: 100%;\n  max-width: 780px;\n  height: 76px;\n  border: 0.5px solid #94a3b8;\n  display: flex;\n  align-items: center;\n\n  &:nth-child(odd) {\n    background-color: #fbfcfe;\n  }\n\n  &:nth-child(even) {\n    background-color: #fff;\n  }\n\n  .cellDataContainer {\n    padding: 5px 10px;\n    flex-grow: 3;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    &:not(:last-child) {\n      border-right: 0.5px solid #94a3b8;\n    }\n\n    &.cellDataImage {\n      height: 72px;\n      width: 72px;\n      max-width: 72px;\n    }\n\n    &.cellDataButton {\n      width: 60px;\n      max-width: 60px;\n    }\n\n    &.cellDataWide {\n      flex-grow: 4;\n    }\n\n    &.cellDataPrice {\n      flex-grow: 1;\n    }\n\n    .cellImage {\n      width: 62px;\n      height: 62px;\n    }\n\n    .cellTextDataContainer {\n      display: flex;\n      flex-direction: column;\n      max-width: 220px;\n\n      .dataItemTitle {\n        height: 24px;\n        line-height: 24px;\n        font-size: 14px;\n        color: #1e293b;\n      }\n\n      .dataItemValue {\n        height: 20px;\n        line-height: 20px;\n        font-size: 16px;\n        color: #475569;\n      }\n    }\n\n    .cellButtonContainer {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 30px;\n      width: 60px;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={entityRow:"eNXrsDE7abztmo65PlSD",cellDataContainer:"gwc8HFv2Xx0tjbIJhpK6",cellDataImage:"tN8RYcktp6hDbp4XXHa7",cellDataButton:"YJlBAYclgwb2uedt843n",cellDataWide:"g8tSl99O79xYsf_InGGA",cellDataPrice:"mfzyhqPJ353xJGxMLH33",cellImage:"QoIBrUzK9cKPIiLOg3SK",cellTextDataContainer:"yaCqe9dZtsDvcfsVHuXP",dataItemTitle:"iMZNahiEYa6c5E1hineK",dataItemValue:"_0au0kNGRBrlyI9N4JB9Q",cellButtonContainer:"VaddS7ZvT29b7tWSjG4z"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);