(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[179],{"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,decorators:()=>decorators,default:()=>_storybook_preview,globalTypes:()=>globalTypes});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),esm=__webpack_require__("./node_modules/i18next-http-backend/esm/index.js"),i18nextBrowserLanguageDetector=__webpack_require__("./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js"),types=__webpack_require__("./src/localization/types.ts");i18next.ZP.use(esm.Z).use(i18nextBrowserLanguageDetector.Z).use(es.Db).init({fallbackLng:types.K.En,supportedLngs:["en","ru"],nonExplicitSupportedLngs:!0,debug:!1,interpolation:{escapeValue:!1},backend:{}});const settings=i18next.ZP;const _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};var decorators=[function withI18next(Story,context){var locale=context.globals.locale;return(0,react.useEffect)((function(){settings.changeLanguage(locale)}),[locale]),react.createElement(react.Suspense,{fallback:react.createElement("div",null,"loading translations...")},react.createElement(es.a3,{i18n:settings},react.createElement(Story)))}],globalTypes={locale:{name:"Locale",description:"Internationalization locale",toolbar:{icon:"globe",items:[{value:types.K.En,title:"English"},{value:types.K.Ru,title:"Русский"}],showName:!0}}},__namedExportsOrder=["decorators","globalTypes"]},"./src/localization/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>LocaleLanguage});var LocaleLanguage=function(LocaleLanguage){return LocaleLanguage.En="en",LocaleLanguage.Ru="ru",LocaleLanguage}({})},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/AddToCart/AddToCart.stories":["./src/components/AddToCart/AddToCart.stories.tsx",144,122],"./components/AddToCart/AddToCart.stories.tsx":["./src/components/AddToCart/AddToCart.stories.tsx",144,122],"./components/CartProduct/CartProduct.stories":["./src/components/CartProduct/CartProduct.stories.tsx",144,869],"./components/CartProduct/CartProduct.stories.tsx":["./src/components/CartProduct/CartProduct.stories.tsx",144,869],"./components/Header/Header.stories":["./src/components/Header/Header.stories.tsx",144,130,467,314],"./components/Header/Header.stories.tsx":["./src/components/Header/Header.stories.tsx",144,130,467,314],"./components/Layout/Layout.stories":["./src/components/Layout/Layout.stories.tsx",144,130,467,870],"./components/Layout/Layout.stories.tsx":["./src/components/Layout/Layout.stories.tsx",144,130,467,870],"./components/ModalControl/ModalControl.stories":["./src/components/ModalControl/ModalControl.stories.tsx",144,791],"./components/ModalControl/ModalControl.stories.tsx":["./src/components/ModalControl/ModalControl.stories.tsx",144,791],"./components/ModalWindow/ModalWindow.stories":["./src/components/ModalWindow/ModalWindow.stories.tsx",144,702],"./components/ModalWindow/ModalWindow.stories.tsx":["./src/components/ModalWindow/ModalWindow.stories.tsx",144,702],"./components/OperationFull/OperationFull.stories":["./src/components/OperationFull/OperationFull.stories.tsx",144,728],"./components/OperationFull/OperationFull.stories.tsx":["./src/components/OperationFull/OperationFull.stories.tsx",144,728],"./components/OperationSummary/OperationSymmary.stories":["./src/components/OperationSummary/OperationSymmary.stories.tsx",681],"./components/OperationSummary/OperationSymmary.stories.tsx":["./src/components/OperationSummary/OperationSymmary.stories.tsx",681],"./components/ProductFull/ProductFull.stories":["./src/components/ProductFull/ProductFull.stories.tsx",144,720],"./components/ProductFull/ProductFull.stories.tsx":["./src/components/ProductFull/ProductFull.stories.tsx",144,720],"./components/ProductSummary/ProductSummary.stories":["./src/components/ProductSummary/ProductSummary.stories.tsx",144,927],"./components/ProductSummary/ProductSummary.stories.tsx":["./src/components/ProductSummary/ProductSummary.stories.tsx",144,927]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[919],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);