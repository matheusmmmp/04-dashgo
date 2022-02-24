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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SidebarDrawerContext */ \"./src/contexts/SidebarDrawerContext.tsx\");\n/* harmony import */ var _services_mirage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mirage */ \"./src/services/mirage/index.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _services_queryClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/queryClient */ \"./src/services/queryClient.ts\");\n\n\n\n\n\n\n\n\nif (true) {\n    (0,_services_mirage__WEBPACK_IMPORTED_MODULE_4__.makeServer)();\n}\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n        client: _services_queryClient__WEBPACK_IMPORTED_MODULE_7__.queryClient,\n        __source: {\n            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 16,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme,\n                __source: {\n                    fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__.SidebarDrawerProvider, {\n                    __source: {\n                        fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                        ...pageProps,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\pages\\\\_app.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        },\n                        __self: this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_query_devtools__WEBPACK_IMPORTED_MODULE_6__.ReactQueryDevtools, {\n                __source: {\n                    fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUQ7QUFDVjtBQUNpQztBQUN6QjtBQUNFO0FBQ1E7QUFDSjtBQUVyRCxFQUFFLEVBVEYsSUFTeUMsRUFBQyxDQUFDO0lBQ3ZDRyw0REFBVTtBQUNkLENBQUM7U0FFUUksS0FBSyxDQUFDLENBQUNDLENBQUFBLFNBQVMsR0FBRUMsU0FBUyxFQUFVLENBQUMsRUFBRSxDQUFDO0lBQzlDLE1BQU0sdUVBQ0RMLDREQUFtQjtRQUFDTSxNQUFNLEVBQUVKLDhEQUFXOzs7Ozs7OztpRkFDL0JOLDREQUFjO2dCQUFDQyxLQUFLLEVBQUVBLGdEQUFLOzs7Ozs7OytGQUN2QkMsaUZBQXFCOzs7Ozs7O21HQUNyQk0sU0FBUzsyQkFBS0MsU0FBUzs7Ozs7Ozs7OztpRkFJM0JKLG9FQUFrQjs7Ozs7Ozs7OztBQUduQyxDQUFDO0FBRUQsaUVBQWVFLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wNC1kYXNoZ28vLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xyXG5pbXBvcnQgeyBTaWRlYmFyRHJhd2VyUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dCdcclxuaW1wb3J0IHsgbWFrZVNlcnZlciB9IGZyb20gJy4uL3NlcnZpY2VzL21pcmFnZSdcclxuaW1wb3J0IHsgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xyXG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tICdyZWFjdC1xdWVyeS9kZXZ0b29scydcclxuaW1wb3J0IHsgcXVlcnlDbGllbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9xdWVyeUNsaWVudCdcclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIG1ha2VTZXJ2ZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyRHJhd2VyUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhckRyYXdlclByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgLz5cclxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwidGhlbWUiLCJTaWRlYmFyRHJhd2VyUHJvdmlkZXIiLCJtYWtlU2VydmVyIiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlJlYWN0UXVlcnlEZXZ0b29scyIsInF1ZXJ5Q2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/mirage/index.ts":
/*!**************************************!*\
  !*** ./src/services/mirage/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeServer\": () => (/* binding */ makeServer)\n/* harmony export */ });\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! miragejs */ \"miragejs\");\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(miragejs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction makeServer() {\n    const server1 = (0,miragejs__WEBPACK_IMPORTED_MODULE_0__.createServer)({\n        serializers: {\n            application: miragejs__WEBPACK_IMPORTED_MODULE_0__.ActiveModelSerializer\n        },\n        models: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_0__.Model.extend({\n            })\n        },\n        factories: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_0__.Factory.extend({\n                name (i) {\n                    return `User ${i + 1}`;\n                },\n                email () {\n                    return faker__WEBPACK_IMPORTED_MODULE_1___default().internet.email().toLowerCase();\n                },\n                createdAt () {\n                    return faker__WEBPACK_IMPORTED_MODULE_1___default().date.recent(10);\n                }\n            })\n        },\n        seeds (server) {\n            server.createList('user', 200);\n        },\n        routes () {\n            this.namespace = 'api';\n            this.timing = 750;\n            this.get('/users', function(schema, request) {\n                const { page =1 , per_page =10  } = request.queryParams;\n                const total = schema.all('user').length;\n                const pageStart = (Number(page) - 1) * Number(per_page);\n                const pageEnd = pageStart + Number(per_page);\n                const users = this.serialize(schema.all('user')).users.sort((a, b)=>a.createdAt - b.createdAt\n                ).slice(pageStart, pageEnd);\n                return new miragejs__WEBPACK_IMPORTED_MODULE_0__.Response(200, {\n                    'x-total-count': String(total)\n                }, {\n                    users\n                });\n            });\n            this.get('/users/:id');\n            this.post('/users');\n            this.namespace = '';\n            this.passthrough();\n        }\n    });\n    return server1;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdGO0FBQy9EO0FBUWxCLFNBQVNNLFVBQVUsR0FBRyxDQUFDO0lBQzFCLEtBQUssQ0FBQ0MsT0FBTSxHQUFHUCxzREFBWSxDQUFDLENBQUM7UUFDekJRLFdBQVcsRUFBRSxDQUFDO1lBQ1ZDLFdBQVcsRUFBRUwsMkRBQXFCO1FBQ3RDLENBQUM7UUFDRE0sTUFBTSxFQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFFVCxrREFBWSxDQUFnQixDQUFDO1lBQUEsQ0FBQztRQUN4QyxDQUFDO1FBQ0RXLFNBQVMsRUFBQyxDQUFDO1lBQ1BGLElBQUksRUFBQ1Ysb0RBQWMsQ0FBQyxDQUFDO2dCQUNqQmEsSUFBSSxFQUFDQyxDQUFTLEVBQUMsQ0FBQztvQkFDWixNQUFNLEVBQUUsS0FBSyxFQUFFQSxDQUFDLEdBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFDREMsS0FBSyxJQUFFLENBQUM7b0JBQ0osTUFBTSxDQUFDWCwyREFBb0IsR0FBR2EsV0FBVztnQkFDN0MsQ0FBQztnQkFDREMsU0FBUyxJQUFFLENBQUM7b0JBQ1IsTUFBTSxDQUFDZCx3REFBaUIsQ0FBQyxFQUFFO2dCQUMvQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFDRGlCLEtBQUssRUFBQ2YsTUFBTSxFQUFDLENBQUM7WUFDVkEsTUFBTSxDQUFDZ0IsVUFBVSxDQUFDLENBQU0sT0FBQyxHQUFHO1FBQ2hDLENBQUM7UUFDREMsTUFBTSxJQUFFLENBQUM7WUFDTCxJQUFJLENBQUNDLFNBQVMsR0FBRyxDQUFLO1lBQ3RCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7WUFFakIsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBUSxTQUFFLFFBQVEsQ0FBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFDM0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFHLENBQUMsR0FBRUMsUUFBUSxFQUFHLEVBQUUsRUFBQyxDQUFDLEdBQUdGLE9BQU8sQ0FBQ0csV0FBVztnQkFFdkQsS0FBSyxDQUFDQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLENBQU0sT0FBRUMsTUFBTTtnQkFFdkMsS0FBSyxDQUFDQyxTQUFTLElBQUlDLE1BQU0sQ0FBQ1AsSUFBSSxJQUFJLENBQUMsSUFBSU8sTUFBTSxDQUFDTixRQUFRO2dCQUN0RCxLQUFLLENBQUNPLE9BQU8sR0FBR0YsU0FBUyxHQUFHQyxNQUFNLENBQUNOLFFBQVE7Z0JBRTNDLEtBQUssQ0FBQ1EsS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxDQUFDWixNQUFNLENBQUNNLEdBQUcsQ0FBQyxDQUFNLFFBQ3pDSyxLQUFLLENBQ0xFLElBQUksRUFBRUMsQ0FBQyxFQUFDQyxDQUFDLEdBQUtELENBQUMsQ0FBQ3ZCLFNBQVMsR0FBR3dCLENBQUMsQ0FBQ3hCLFNBQVM7a0JBQ3ZDeUIsS0FBSyxDQUFDUixTQUFTLEVBQUNFLE9BQU87Z0JBRTVCLE1BQU0sQ0FBQyxHQUFHLENBQUNuQyw4Q0FBUSxDQUNmLEdBQUcsRUFDSCxDQUFDO29CQUFDLENBQWUsZ0JBQUUwQyxNQUFNLENBQUNaLEtBQUs7Z0JBQUMsQ0FBQyxFQUNqQyxDQUFDO29CQUFDTSxLQUFLO2dCQUFDLENBQUM7WUFFakIsQ0FBQztZQUVELElBQUksQ0FBQ1osR0FBRyxDQUFDLENBQVk7WUFDckIsSUFBSSxDQUFDbUIsSUFBSSxDQUFDLENBQVE7WUFFbEIsSUFBSSxDQUFDckIsU0FBUyxHQUFHLENBQUU7WUFDbkIsSUFBSSxDQUFDc0IsV0FBVztRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQ3hDLE9BQU07QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzA0LWRhc2hnby8uL3NyYy9zZXJ2aWNlcy9taXJhZ2UvaW5kZXgudHM/NGYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZXJ2ZXIsIEZhY3RvcnksIE1vZGVsLCBSZXNwb25zZSwgQWN0aXZlTW9kZWxTZXJpYWxpemVyIH0gZnJvbSAnbWlyYWdlanMnXHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcidcclxuXHJcbnR5cGUgVXNlciA9IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVkX2F0OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlcnZlcigpIHtcclxuICAgIGNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcih7XHJcbiAgICAgICAgc2VyaWFsaXplcnM6IHtcclxuICAgICAgICAgICAgYXBwbGljYXRpb246IEFjdGl2ZU1vZGVsU2VyaWFsaXplcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGVsczoge1xyXG4gICAgICAgICAgICB1c2VyOiBNb2RlbC5leHRlbmQ8UGFydGlhbDxVc2VyPj4oe30pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWN0b3JpZXM6e1xyXG4gICAgICAgICAgICB1c2VyOkZhY3RvcnkuZXh0ZW5kKHtcclxuICAgICAgICAgICAgICAgIG5hbWUoaTogbnVtYmVyKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFVzZXIgJHtpKzF9YFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVtYWlsKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZha2VyLmludGVybmV0LmVtYWlsKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQoKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFrZXIuZGF0ZS5yZWNlbnQoMTApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlZWRzKHNlcnZlcil7XHJcbiAgICAgICAgICAgIHNlcnZlci5jcmVhdGVMaXN0KCd1c2VyJywyMDApXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3V0ZXMoKXtcclxuICAgICAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSAnYXBpJztcclxuICAgICAgICAgICAgdGhpcy50aW1pbmcgPSA3NTA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldCgnL3VzZXJzJywgZnVuY3Rpb24gKHNjaGVtYSwgcmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlID0gMSwgcGVyX3BhZ2UgPSAxMCB9ID0gcmVxdWVzdC5xdWVyeVBhcmFtc1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gc2NoZW1hLmFsbCgndXNlcicpLmxlbmd0aFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VTdGFydCA9IChOdW1iZXIocGFnZSkgLSAxKSAqIE51bWJlcihwZXJfcGFnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlRW5kID0gcGFnZVN0YXJ0ICsgTnVtYmVyKHBlcl9wYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IHRoaXMuc2VyaWFsaXplKHNjaGVtYS5hbGwoJ3VzZXInKSlcclxuICAgICAgICAgICAgICAgICAgICAudXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSxiKSA9PiBhLmNyZWF0ZWRBdCAtIGIuY3JlYXRlZEF0KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShwYWdlU3RhcnQscGFnZUVuZClcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICAgICAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgICAgICAgICB7ICd4LXRvdGFsLWNvdW50JzogU3RyaW5nKHRvdGFsKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB1c2VycyB9XHJcbiAgICAgICAgICAgICAgICApIFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0KCcvdXNlcnMvOmlkJyk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdCgnL3VzZXJzJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZSA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N0aHJvdWdoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gc2VydmVyO1xyXG59Il0sIm5hbWVzIjpbImNyZWF0ZVNlcnZlciIsIkZhY3RvcnkiLCJNb2RlbCIsIlJlc3BvbnNlIiwiQWN0aXZlTW9kZWxTZXJpYWxpemVyIiwiZmFrZXIiLCJtYWtlU2VydmVyIiwic2VydmVyIiwic2VyaWFsaXplcnMiLCJhcHBsaWNhdGlvbiIsIm1vZGVscyIsInVzZXIiLCJleHRlbmQiLCJmYWN0b3JpZXMiLCJuYW1lIiwiaSIsImVtYWlsIiwiaW50ZXJuZXQiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZWRBdCIsImRhdGUiLCJyZWNlbnQiLCJzZWVkcyIsImNyZWF0ZUxpc3QiLCJyb3V0ZXMiLCJuYW1lc3BhY2UiLCJ0aW1pbmciLCJnZXQiLCJzY2hlbWEiLCJyZXF1ZXN0IiwicGFnZSIsInBlcl9wYWdlIiwicXVlcnlQYXJhbXMiLCJ0b3RhbCIsImFsbCIsImxlbmd0aCIsInBhZ2VTdGFydCIsIk51bWJlciIsInBhZ2VFbmQiLCJ1c2VycyIsInNlcmlhbGl6ZSIsInNvcnQiLCJhIiwiYiIsInNsaWNlIiwiU3RyaW5nIiwicG9zdCIsInBhc3N0aHJvdWdoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/mirage/index.ts\n");

/***/ }),

/***/ "./src/services/queryClient.ts":
/*!*************************************!*\
  !*** ./src/services/queryClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queryClient\": () => (/* binding */ queryClient)\n/* harmony export */ });\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcXVlcnlDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRWxDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsQ0FBQ0Qsb0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wNC1kYXNoZ28vLi9zcmMvc2VydmljZXMvcXVlcnlDbGllbnQudHM/NTNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KClcclxuIl0sIm5hbWVzIjpbIlF1ZXJ5Q2xpZW50IiwicXVlcnlDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/queryClient.ts\n");

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

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/***/ ((module) => {

module.exports = require("faker");

/***/ }),

/***/ "miragejs":
/*!***************************!*\
  !*** external "miragejs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("miragejs");

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

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-query/devtools");

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