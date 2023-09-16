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

/***/ "./node_modules/@next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\",\"700\"]}],\"variableName\":\"roboto\"}":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@next/font/google/target.css?{"path":"src/pages/_app.tsx","import":"Roboto","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"roboto"} ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"style\": {\"fontFamily\":\"'__Roboto_37865d', '__Roboto_Fallback_37865d'\",\"fontStyle\":\"normal\"},\n\t\"className\": \"__className_37865d\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG5leHQvZm9udC9nb29nbGUvdGFyZ2V0LmNzcz97XCJwYXRoXCI6XCJzcmMvcGFnZXMvX2FwcC50c3hcIixcImltcG9ydFwiOlwiUm9ib3RvXCIsXCJhcmd1bWVudHNcIjpbe1wic3Vic2V0c1wiOltcImxhdGluXCJdLFwid2VpZ2h0XCI6W1wiNDAwXCIsXCI3MDBcIl19XSxcInZhcmlhYmxlTmFtZVwiOlwicm9ib3RvXCJ9LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSxXQUFXLGtGQUFrRjtBQUM3RjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvQG5leHQvZm9udC9nb29nbGUvdGFyZ2V0LmNzcz81NTA2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN0eWxlXCI6IHtcImZvbnRGYW1pbHlcIjpcIidfX1JvYm90b18zNzg2NWQnLCAnX19Sb2JvdG9fRmFsbGJhY2tfMzc4NjVkJ1wiLFwiZm9udFN0eWxlXCI6XCJub3JtYWxcIn0sXG5cdFwiY2xhc3NOYW1lXCI6IFwiX19jbGFzc05hbWVfMzc4NjVkXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\",\"700\"]}],\"variableName\":\"roboto\"}\n");

/***/ }),

/***/ "./src/context/Context.tsx":
/*!*********************************!*\
  !*** ./src/context/Context.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CurrentOrdersContext\": () => (/* binding */ CurrentOrdersContext),\n/* harmony export */   \"MyUserLoginContextWrapper\": () => (/* binding */ MyUserLoginContextWrapper),\n/* harmony export */   \"UserLoginContext\": () => (/* binding */ UserLoginContext),\n/* harmony export */   \"useCurrentOrders\": () => (/* binding */ useCurrentOrders),\n/* harmony export */   \"useUserLogin\": () => (/* binding */ useUserLogin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserLoginContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)([]);\nconst CurrentOrdersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)([]);\nfunction useUserLogin() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserLoginContext);\n}\nfunction useCurrentOrders() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CurrentOrdersContext);\n}\nfunction MyUserLoginContextWrapper({ children  }) {\n    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentOrders, setCurrentOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function UpdateUserInfo(userInfo) {\n        setUserInfo(userInfo);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserLoginContext.Provider, {\n        value: [\n            userInfo,\n            UpdateUserInfo\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CurrentOrdersContext.Provider, {\n            value: [\n                currentOrders,\n                setCurrentOrders\n            ],\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/mateuscostasilva/projects/pedefast/frontend/admin-git/src/context/Context.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mateuscostasilva/projects/pedefast/frontend/admin-git/src/context/Context.tsx\",\n        lineNumber: 41,\n        columnNumber: 12\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0RDtBQW9CckQsTUFBTUcsaUNBQW1CRixvREFBYUEsQ0FBQyxFQUFFLEVBQVE7QUFFakQsTUFBTUcscUNBQXVCSCxvREFBYUEsQ0FBQyxFQUFFLEVBQVE7QUFFckQsU0FBU0ksZUFBb0I7SUFDakMsT0FBT0wsaURBQVVBLENBQUNHO0FBQ3JCLENBQUM7QUFFTSxTQUFTRyxtQkFBd0I7SUFDckMsT0FBT04saURBQVVBLENBQUNJO0FBQ3JCLENBQUM7QUFFTSxTQUFTRywwQkFBMEIsRUFBRUMsU0FBUSxFQUFPLEVBQUU7SUFDMUQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQTtJQUV4QyxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBZSxFQUFFO0lBRW5FLFNBQVNXLGVBQWVKLFFBQW9CLEVBQUU7UUFDM0NDLFlBQVlEO0lBQ2Y7SUFDQSxxQkFBUSw4REFBQ04saUJBQWlCVyxRQUFRO1FBQUNDLE9BQU87WUFBQ047WUFBVUk7U0FBZTtrQkFDakUsNEVBQUNULHFCQUFxQlUsUUFBUTtZQUFDQyxPQUFPO2dCQUFDSjtnQkFBZUM7YUFBaUI7c0JBQ25FSjs7Ozs7Ozs7Ozs7QUFLVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29udGV4dC9Db250ZXh0LnRzeD8zOWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcnJvd0Z1bmN0aW9uLCBGdW5jdGlvbkRlY2xhcmF0aW9uLCBGdW5jdGlvbkV4cHJlc3Npb24gfSBmcm9tIFwidHlwZXNjcmlwdFwiO1xuXG5pbnRlcmZhY2UgSVVzZXJMb2dpbiB7XG4gICB1c2VybmFtZTogc3RyaW5nO1xuICAgdXNlcl9pZDogc3RyaW5nO1xuICAgdG9rZW46IHN0cmluZztcbiAgIGZ1bGxfbmFtZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJT3JkZXJJbmZvIHtcbiAgIGN1c3RvbWVyX25hbWU6IHN0cmluZztcbiAgIGN1c3RvbWVyX2FkZHJlc3M6IHN0cmluZztcbiAgIGN1c3RvbWVyX3Bob25lOiBzdHJpbmc7XG4gICBpZDogc3RyaW5nO1xuICAgc3RhdHVzOiBzdHJpbmc7XG4gICBwcm9kdWN0OiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KFtdKSBhcyBhbnlcblxuZXhwb3J0IGNvbnN0IEN1cnJlbnRPcmRlcnNDb250ZXh0ID0gY3JlYXRlQ29udGV4dChbXSkgYXMgYW55XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VVc2VyTG9naW4oKTogYW55IHtcbiAgIHJldHVybiB1c2VDb250ZXh0KFVzZXJMb2dpbkNvbnRleHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDdXJyZW50T3JkZXJzKCk6IGFueSB7XG4gICByZXR1cm4gdXNlQ29udGV4dChDdXJyZW50T3JkZXJzQ29udGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE15VXNlckxvZ2luQ29udGV4dFdyYXBwZXIoeyBjaGlsZHJlbiB9OiBhbnkpIHtcbiAgIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlckluZm9dID0gdXNlU3RhdGU8SVVzZXJMb2dpbj4oKVxuXG4gICBjb25zdCBbY3VycmVudE9yZGVycywgc2V0Q3VycmVudE9yZGVyc10gPSB1c2VTdGF0ZTxJT3JkZXJJbmZvW10+KFtdKVxuXG4gICBmdW5jdGlvbiBVcGRhdGVVc2VySW5mbyh1c2VySW5mbzogSVVzZXJMb2dpbikge1xuICAgICAgc2V0VXNlckluZm8odXNlckluZm8pXG4gICB9XG4gICByZXR1cm4gKDxVc2VyTG9naW5Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbdXNlckluZm8sIFVwZGF0ZVVzZXJJbmZvXX0+XG4gICAgICA8Q3VycmVudE9yZGVyc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tjdXJyZW50T3JkZXJzLCBzZXRDdXJyZW50T3JkZXJzXX0+XG4gICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgIDwvQ3VycmVudE9yZGVyc0NvbnRleHQuUHJvdmlkZXI+XG4gICA8L1VzZXJMb2dpbkNvbnRleHQuUHJvdmlkZXI+KVxuXG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJVc2VyTG9naW5Db250ZXh0IiwiQ3VycmVudE9yZGVyc0NvbnRleHQiLCJ1c2VVc2VyTG9naW4iLCJ1c2VDdXJyZW50T3JkZXJzIiwiTXlVc2VyTG9naW5Db250ZXh0V3JhcHBlciIsImNoaWxkcmVuIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsImN1cnJlbnRPcmRlcnMiLCJzZXRDdXJyZW50T3JkZXJzIiwiVXBkYXRlVXNlckluZm8iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/Context.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_font_google_target_css_path_src_pages_app_tsx_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\",\"700\"]}],\"variableName\":\"roboto\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"src/pages/_app.tsx\\\",\\\"import\\\":\\\"Roboto\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\",\\\"700\\\"]}],\\\"variableName\\\":\\\"roboto\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_src_pages_app_tsx_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_src_pages_app_tsx_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Context */ \"./src/context/Context.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_Context__WEBPACK_IMPORTED_MODULE_2__.MyUserLoginContextWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Pede Fast\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mateuscostasilva/projects/pedefast/frontend/admin-git/src/pages/_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mateuscostasilva/projects/pedefast/frontend/admin-git/src/pages/_app.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_next_font_google_target_css_path_src_pages_app_tsx_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto___WEBPACK_IMPORTED_MODULE_5___default().className),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/mateuscostasilva/projects/pedefast/frontend/admin-git/src/pages/_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mateuscostasilva/projects/pedefast/frontend/admin-git/src/pages/_app.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mateuscostasilva/projects/pedefast/frontend/admin-git/src/pages/_app.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mateuscostasilva/projects/pedefast/frontend/admin-git/src/pages/_app.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPTUE7QUFQd0I7QUFHZ0M7QUFDbEM7QUFDa0M7QUFROUQsTUFBTUssY0FBYyxJQUFJRixvREFBV0E7QUFFcEIsU0FBU0csSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUNFLDhEQUFDSiw0REFBbUJBO1FBQUNLLFFBQVFKO2tCQUMzQiw0RUFBQ0osdUVBQXlCQTs7OEJBQ3hCLDhEQUFDQyxrREFBSUE7OEJBQ0gsNEVBQUNRO2tDQUFNOzs7Ozs7Ozs7Ozs4QkFFVCw4REFBQ0M7b0JBQUtDLFdBQVdaLGdMQUFnQjs4QkFDL0IsNEVBQUNPO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBSb2JvdG8gfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCB7IE15VXNlckxvZ2luQ29udGV4dFdyYXBwZXIgfSBmcm9tICcuLi9jb250ZXh0L0NvbnRleHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xuXG5jb25zdCByb2JvdG8gPSBSb2JvdG8oe1xuICBzdWJzZXRzOiBbJ2xhdGluJ10sXG4gIHdlaWdodDogWyc0MDAnLCAnNzAwJyxdXG5cbn0pXG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxNeVVzZXJMb2dpbkNvbnRleHRXcmFwcGVyPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UGVkZSBGYXN0PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3JvYm90by5jbGFzc05hbWV9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9NeVVzZXJMb2dpbkNvbnRleHRXcmFwcGVyPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cblxuXG4gICk7XG59XG4iXSwibmFtZXMiOlsicm9ib3RvIiwiTXlVc2VyTG9naW5Db250ZXh0V3JhcHBlciIsIkhlYWQiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJxdWVyeUNsaWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

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