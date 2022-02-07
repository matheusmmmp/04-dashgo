"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/SidebarDrawerContext.tsx":
/*!***********************************************!*\
  !*** ./src/contexts/SidebarDrawerContext.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SidebarDrawerProvider\": () => (/* binding */ SidebarDrawerProvider),\n/* harmony export */   \"useSidebarDrawer\": () => (/* binding */ useSidebarDrawer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst SidebarDrawerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n});\nfunction SidebarDrawerProvider({ children  }) {\n    const disclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        disclosure.onClose();\n    }, [\n        router.asPath\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SidebarDrawerContext.Provider, {\n        value: disclosure,\n        __source: {\n            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\contexts\\\\SidebarDrawerContext.tsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n}\nconst useSidebarDrawer = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(SidebarDrawerContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQ0U7QUFDaEM7QUFRdkMsS0FBSyxDQUFDSyxvQkFBb0IsaUJBQUdKLG9EQUFhLENBQUMsQ0FBQztBQUFBLENBQUM7QUFFdEMsU0FBU0sscUJBQXFCLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQTZCLENBQUMsRUFBRSxDQUFDO0lBQzdFLEtBQUssQ0FBQ0MsVUFBVSxHQUFHUiwrREFBYTtJQUNoQyxLQUFLLENBQUNTLE1BQU0sR0FBR0wsc0RBQVM7SUFFeEJELGdEQUFTLEtBQU8sQ0FBQztRQUNiSyxVQUFVLENBQUNFLE9BQU87SUFDdEIsQ0FBQyxFQUFFLENBQUNEO1FBQUFBLE1BQU0sQ0FBQ0UsTUFBTTtJQUFBLENBQUM7SUFFbEIsTUFBTSxzRUFDRE4sb0JBQW9CLENBQUNPLFFBQVE7UUFBQ0MsS0FBSyxFQUFFTCxVQUFVOzs7Ozs7O2tCQUMzQ0QsUUFBUTs7QUFHckIsQ0FBQztBQUVNLEtBQUssQ0FBQ08sZ0JBQWdCLE9BQVNaLGlEQUFVLENBQUNHLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovLzA0LWRhc2hnby8uL3NyYy9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dC50c3g/YjFmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEaXNjbG9zdXJlLCBVc2VEaXNjbG9zdXJlUmV0dXJuIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgU2lkZWJhckRyYXdlclByb3ZpZGVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxudHlwZSBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEgPSBVc2VEaXNjbG9zdXJlUmV0dXJuXHJcblxyXG5jb25zdCBTaWRlYmFyRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgU2lkZWJhckRyYXdlckNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyRHJhd2VyUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBTaWRlYmFyRHJhd2VyUHJvdmlkZXJQcm9wcykge1xyXG4gICAgY29uc3QgZGlzY2xvc3VyZSA9IHVzZURpc2Nsb3N1cmUoKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc2Nsb3N1cmUub25DbG9zZSgpXHJcbiAgICB9LCBbcm91dGVyLmFzUGF0aF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2lkZWJhckRyYXdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc2Nsb3N1cmV9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TaWRlYmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNpZGViYXJEcmF3ZXIgPSAoKSA9PiB1c2VDb250ZXh0KFNpZGViYXJEcmF3ZXJDb250ZXh0KSJdLCJuYW1lcyI6WyJ1c2VEaXNjbG9zdXJlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJTaWRlYmFyRHJhd2VyQ29udGV4dCIsIlNpZGViYXJEcmF3ZXJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzY2xvc3VyZSIsInJvdXRlciIsIm9uQ2xvc2UiLCJhc1BhdGgiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU2lkZWJhckRyYXdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/SidebarDrawerContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SidebarDrawerContext */ \"./src/contexts/SidebarDrawerContext.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme,\n        __source: {\n            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__.SidebarDrawerProvider, {\n            __source: {\n                fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                },\n                __self: this\n            })\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUQ7QUFDVjtBQUNpQztTQUcvREcsS0FBSyxDQUFDLENBQUNDLENBQUFBLFNBQVMsR0FBRUMsU0FBUyxFQUFVLENBQUMsRUFBRSxDQUFDO0lBQzlDLE1BQU0sc0VBQ0RMLDREQUFjO1FBQUNDLEtBQUssRUFBRUEsZ0RBQUs7Ozs7Ozs7dUZBQ3ZCQyxpRkFBcUI7Ozs7Ozs7MkZBQ3JCRSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBS3BDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLzA0LWRhc2hnby8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXHJcbmltcG9ydCB7IFNpZGViYXJEcmF3ZXJQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0J1xyXG5cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc306IEFwcFByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRyYXdlclByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuXHJcbiAgICAgICAgICAgIDwvU2lkZWJhckRyYXdlclByb3ZpZGVyPlxyXG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwidGhlbWUiLCJTaWRlYmFyRHJhd2VyUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        gray: {\n            \"900\": \"#181B23\",\n            \"800\": \"#1F2029\",\n            \"700\": \"#353646\",\n            \"600\": \"#4B4D63\",\n            \"500\": \"#616480\",\n            \"400\": \"#797D9A\",\n            \"300\": \"#9699B0\",\n            \"200\": \"#B3B5C6\",\n            \"100\": \"#D1D2DC\",\n            \"50\": \"#EEEEF2\"\n        }\n    },\n    fonts: {\n        heading: 'Roboto',\n        body: 'Roboto'\n    },\n    styles: {\n        global: {\n            body: {\n                bg: 'gray.900',\n                color: 'gray.50'\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxLQUFLLENBQUNDLEtBQUssR0FBR0QsNkRBQVcsQ0FBQyxDQUFDO0lBQzlCRSxNQUFNLEVBQUMsQ0FBQztRQUNKQyxJQUFJLEVBQUUsQ0FBQztZQUNILENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUksS0FBRyxDQUFTO1FBQ3BCLENBQUM7SUFDTCxDQUFDO0lBQ0RDLEtBQUssRUFBRSxDQUFDO1FBQ0pDLE9BQU8sRUFBRSxDQUFRO1FBQ2pCQyxJQUFJLEVBQUUsQ0FBUTtJQUNsQixDQUFDO0lBQ0RDLE1BQU0sRUFBQyxDQUFDO1FBQ0pDLE1BQU0sRUFBRSxDQUFDO1lBQ0xGLElBQUksRUFBQyxDQUFDO2dCQUNGRyxFQUFFLEVBQUUsQ0FBVTtnQkFDZEMsS0FBSyxFQUFFLENBQVM7WUFDcEIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzA0LWRhc2hnby8uL3NyYy9zdHlsZXMvdGhlbWUudHM/NTE2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgICBjb2xvcnM6e1xyXG4gICAgICAgIGdyYXk6IHtcclxuICAgICAgICAgICAgXCI5MDBcIjogXCIjMTgxQjIzXCIsXHJcbiAgICAgICAgICAgIFwiODAwXCI6IFwiIzFGMjAyOVwiLFxyXG4gICAgICAgICAgICBcIjcwMFwiOiBcIiMzNTM2NDZcIixcclxuICAgICAgICAgICAgXCI2MDBcIjogXCIjNEI0RDYzXCIsXHJcbiAgICAgICAgICAgIFwiNTAwXCI6IFwiIzYxNjQ4MFwiLFxyXG4gICAgICAgICAgICBcIjQwMFwiOiBcIiM3OTdEOUFcIixcclxuICAgICAgICAgICAgXCIzMDBcIjogXCIjOTY5OUIwXCIsXHJcbiAgICAgICAgICAgIFwiMjAwXCI6IFwiI0IzQjVDNlwiLFxyXG4gICAgICAgICAgICBcIjEwMFwiOiBcIiNEMUQyRENcIixcclxuICAgICAgICAgICAgXCI1MFwiOiAgXCIjRUVFRUYyXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvbnRzOiB7XHJcbiAgICAgICAgaGVhZGluZzogJ1JvYm90bycsXHJcbiAgICAgICAgYm9keTogJ1JvYm90bycsXHJcbiAgICB9LFxyXG4gICAgc3R5bGVzOnsgXHJcbiAgICAgICAgZ2xvYmFsOiB7XHJcbiAgICAgICAgICAgIGJvZHk6e1xyXG4gICAgICAgICAgICAgICAgYmc6ICdncmF5LjkwMCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXkuNTAnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwidGhlbWUiLCJjb2xvcnMiLCJncmF5IiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsInN0eWxlcyIsImdsb2JhbCIsImJnIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();