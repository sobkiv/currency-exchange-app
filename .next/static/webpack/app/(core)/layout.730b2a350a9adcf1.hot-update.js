"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(core)/layout",{

/***/ "(app-pages-browser)/./src/components/header/header.jsx":
/*!******************************************!*\
  !*** ./src/components/header/header.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Container,Fade,useMediaQuery!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/system/useMediaQuery/useMediaQuery.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Container,Fade,useMediaQuery!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Fade/Fade.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Container,Fade,useMediaQuery!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Container,Fade,useMediaQuery!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Container,Fade,useMediaQuery!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _currency_rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-rate */ \"(app-pages-browser)/./src/components/header/currency-rate.jsx\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"(app-pages-browser)/./src/components/header/logo.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useCurrencyExchangeRates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useCurrencyExchangeRates */ \"(app-pages-browser)/./src/hooks/useCurrencyExchangeRates.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./src/constants.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Header = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.USD), 2), toggle = _useState[0], setToggle = _useState[1];\n    var isMobile = (0,_barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"(max-width: 600px)\");\n    var _useCurrencyExchangeRates = (0,_hooks_useCurrencyExchangeRates__WEBPACK_IMPORTED_MODULE_4__.useCurrencyExchangeRates)(), eur = _useCurrencyExchangeRates.eur, usd = _useCurrencyExchangeRates.usd;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (isMobile) {\n            var interval = setInterval(function() {\n                console.log(_constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.USD, _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.EUR);\n                setToggle(function(prev) {\n                    return prev === _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.USD ? _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.EUR : _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.USD;\n                });\n            }, 5000);\n            return function() {\n                return clearInterval(interval);\n            };\n        }\n    }, []);\n    var renderMobileCurrencyRates = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    \"in\": toggle === _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.USD,\n                    timeout: 600,\n                    unmountOnExit: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        sx: {\n                            position: \"absolute\",\n                            top: 0,\n                            width: \"100%\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_currency_rate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            currency: usd,\n                            currencyName: _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.USD\n                        }, void 0, false, {\n                            fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    \"in\": toggle === _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.EUR,\n                    timeout: 600,\n                    unmountOnExit: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        sx: {\n                            position: \"absolute\",\n                            top: 0,\n                            width: \"100%\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_currency_rate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            currency: eur,\n                            currencyName: _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.EUR\n                        }, void 0, false, {\n                            fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true);\n    };\n    var renderDesktopCurrencyRates = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_currency_rate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    currency: usd,\n                    currencyName: _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.USD\n                }, void 0, false, {\n                    fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_currency_rate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    currency: eur,\n                    currencyName: _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_CODES.EUR\n                }, void 0, false, {\n                    fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        component: \"header\",\n        sx: {\n            height: {\n                xs: 52,\n                sm: 72\n            },\n            zIndex: 1300,\n            position: \"sticky\",\n            display: \"flex\",\n            flexDirection: \"row\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            sx: {\n                display: \"flex\",\n                flexDirection: \"row\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        lineHeight: \"normal\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            minWidth: {\n                                xs: 1,\n                                sm: \"350px\"\n                            },\n                            alignItems: \"center\",\n                            justifyContent: \"flex-end\",\n                            position: \"relative\",\n                            minHeight: \"25px\"\n                        },\n                        children: isMobile ? renderMobileCurrencyRates() : renderDesktopCurrencyRates()\n                    }, void 0, false, {\n                        fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/pavlosobkiv/code/currency-exchange-app/src/components/header/header.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"Oo+7zvcSBBD2s/FssgfeZPDqSBQ=\", false, function() {\n    return [\n        _barrel_optimize_names_AppBar_Box_Container_Fade_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useCurrencyExchangeRates__WEBPACK_IMPORTED_MODULE_4__.useCurrencyExchangeRates\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM0RTtBQUNqQztBQUNqQjtBQUNrQjtBQUNnQztBQUMvQjtBQUU3QyxJQUFNVyxTQUFTOztJQUNiLElBQTRCSCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUNFLHNEQUFjQSxDQUFDRSxHQUFHLE9BQWhEQyxTQUFxQkwsY0FBYk0sWUFBYU47SUFDNUIsSUFBTU8sV0FBV1gsdUhBQWFBLENBQUM7SUFDL0IsSUFBcUJLLDRCQUFBQSx5RkFBd0JBLElBQXJDTyxNQUFhUCwwQkFBYk8sS0FBS0MsTUFBUVIsMEJBQVJRO0lBRWJWLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVEsVUFBVTtZQUNaLElBQU1HLFdBQVdDLFlBQVk7Z0JBQzNCQyxRQUFRQyxHQUFHLENBQUNYLHNEQUFjQSxDQUFDRSxHQUFHLEVBQUVGLHNEQUFjQSxDQUFDWSxHQUFHO2dCQUNsRFIsVUFBVSxTQUFDUzsyQkFBVUEsU0FBU2Isc0RBQWNBLENBQUNFLEdBQUcsR0FBR0Ysc0RBQWNBLENBQUNZLEdBQUcsR0FBR1osc0RBQWNBLENBQUNFLEdBQUc7O1lBQzVGLEdBQUc7WUFFSCxPQUFPO3VCQUFNWSxjQUFjTjs7UUFDN0I7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFNTyw0QkFBNEI7NkJBQ2hDOzs4QkFDRSw4REFBQ3RCLG1IQUFJQTtvQkFBQ3VCLE1BQUliLFdBQVdILHNEQUFjQSxDQUFDRSxHQUFHO29CQUFFZSxTQUFTO29CQUFLQyxhQUFhOzhCQUNsRSw0RUFBQzNCLG1IQUFHQTt3QkFBQzRCLElBQUk7NEJBQUVDLFVBQVU7NEJBQVlDLEtBQUs7NEJBQUdDLE9BQU87d0JBQU87a0NBQ3JELDRFQUFDM0Isc0RBQVlBOzRCQUFDNEIsVUFBVWhCOzRCQUFLaUIsY0FBY3hCLHNEQUFjQSxDQUFDRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUdqRSw4REFBQ1QsbUhBQUlBO29CQUFDdUIsTUFBSWIsV0FBV0gsc0RBQWNBLENBQUNZLEdBQUc7b0JBQUVLLFNBQVM7b0JBQUtDLGFBQWE7OEJBQ2xFLDRFQUFDM0IsbUhBQUdBO3dCQUFDNEIsSUFBSTs0QkFBRUMsVUFBVTs0QkFBWUMsS0FBSzs0QkFBR0MsT0FBTzt3QkFBTztrQ0FDckQsNEVBQUMzQixzREFBWUE7NEJBQUM0QixVQUFVakI7NEJBQUtrQixjQUFjeEIsc0RBQWNBLENBQUNZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNckUsSUFBTWEsNkJBQTZCOzZCQUNqQzs7OEJBQ0UsOERBQUM5QixzREFBWUE7b0JBQUM0QixVQUFVaEI7b0JBQUtpQixjQUFjeEIsc0RBQWNBLENBQUNFLEdBQUc7Ozs7Ozs4QkFDN0QsOERBQUNQLHNEQUFZQTtvQkFBQzRCLFVBQVVqQjtvQkFBS2tCLGNBQWN4QixzREFBY0EsQ0FBQ1ksR0FBRzs7Ozs7Ozs7O0lBSWpFLHFCQUNFLDhEQUFDdEIsb0hBQU1BO1FBQ0xvQyxXQUFVO1FBQ1ZQLElBQUk7WUFDRlEsUUFBUTtnQkFBRUMsSUFBSTtnQkFBSUMsSUFBSTtZQUFHO1lBQ3pCQyxRQUFRO1lBQ1JWLFVBQVU7WUFDVlcsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLFlBQVk7UUFDZDtrQkFFQSw0RUFBQ3pDLG9IQUFTQTtZQUFDMkIsSUFBSTtnQkFBRVksU0FBUztnQkFBUUMsZUFBZTtnQkFBT0MsWUFBWTtnQkFBVUMsZ0JBQWdCO1lBQWdCOzs4QkFDNUcsOERBQUN0Qyw2Q0FBSUE7Ozs7OzhCQUNMLDhEQUFDTCxtSEFBR0E7b0JBQUM0QixJQUFJO3dCQUFFWSxTQUFTO3dCQUFRRSxZQUFZO3dCQUFVRSxZQUFZO29CQUFTOzhCQUNyRSw0RUFBQzVDLG1IQUFHQTt3QkFDRjRCLElBQUk7NEJBQ0ZZLFNBQVM7NEJBQ1RDLGVBQWU7NEJBQ2ZJLFVBQVU7Z0NBQUVSLElBQUk7Z0NBQUdDLElBQUk7NEJBQVE7NEJBQy9CSSxZQUFZOzRCQUNaQyxnQkFBZ0I7NEJBQ2hCZCxVQUFVOzRCQUNWaUIsV0FBVzt3QkFDYjtrQ0FFQ2hDLFdBQVdVLDhCQUE4QlU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEQ7R0F0RU14Qjs7UUFFYVAsbUhBQWFBO1FBQ1RLLHFGQUF3QkE7OztLQUh6Q0U7QUF3RU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qc3g/MzAyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBBcHBCYXIsIEJveCwgQ29udGFpbmVyLCBGYWRlLCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgQ3VycmVuY3lSYXRlIGZyb20gJy4vY3VycmVuY3ktcmF0ZSc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUN1cnJlbmN5RXhjaGFuZ2VSYXRlcyB9IGZyb20gJ0AvaG9va3MvdXNlQ3VycmVuY3lFeGNoYW5nZVJhdGVzJztcbmltcG9ydCB7IENVUlJFTkNZX0NPREVTIH0gZnJvbSAnQC9jb25zdGFudHMnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShDVVJSRU5DWV9DT0RFUy5VU0QpO1xuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkoJyhtYXgtd2lkdGg6IDYwMHB4KScpO1xuICBjb25zdCB7IGV1ciwgdXNkIH0gPSB1c2VDdXJyZW5jeUV4Y2hhbmdlUmF0ZXMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKENVUlJFTkNZX0NPREVTLlVTRCwgQ1VSUkVOQ1lfQ09ERVMuRVVSKTtcbiAgICAgICAgc2V0VG9nZ2xlKChwcmV2KSA9PiAocHJldiA9PT0gQ1VSUkVOQ1lfQ09ERVMuVVNEID8gQ1VSUkVOQ1lfQ09ERVMuRVVSIDogQ1VSUkVOQ1lfQ09ERVMuVVNEKSk7XG4gICAgICB9LCA1MDAwKTtcblxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlck1vYmlsZUN1cnJlbmN5UmF0ZXMgPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgIDxGYWRlIGluPXt0b2dnbGUgPT09IENVUlJFTkNZX0NPREVTLlVTRH0gdGltZW91dD17NjAwfSB1bm1vdW50T25FeGl0PlxuICAgICAgICA8Qm94IHN4PXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDAsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgPEN1cnJlbmN5UmF0ZSBjdXJyZW5jeT17dXNkfSBjdXJyZW5jeU5hbWU9e0NVUlJFTkNZX0NPREVTLlVTRH0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0ZhZGU+XG4gICAgICA8RmFkZSBpbj17dG9nZ2xlID09PSBDVVJSRU5DWV9DT0RFUy5FVVJ9IHRpbWVvdXQ9ezYwMH0gdW5tb3VudE9uRXhpdD5cbiAgICAgICAgPEJveCBzeD17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgIDxDdXJyZW5jeVJhdGUgY3VycmVuY3k9e2V1cn0gY3VycmVuY3lOYW1lPXtDVVJSRU5DWV9DT0RFUy5FVVJ9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9GYWRlPlxuICAgIDwvPlxuICApO1xuXG4gIGNvbnN0IHJlbmRlckRlc2t0b3BDdXJyZW5jeVJhdGVzID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICA8Q3VycmVuY3lSYXRlIGN1cnJlbmN5PXt1c2R9IGN1cnJlbmN5TmFtZT17Q1VSUkVOQ1lfQ09ERVMuVVNEfSAvPlxuICAgICAgPEN1cnJlbmN5UmF0ZSBjdXJyZW5jeT17ZXVyfSBjdXJyZW5jeU5hbWU9e0NVUlJFTkNZX0NPREVTLkVVUn0gLz5cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBCYXJcbiAgICAgIGNvbXBvbmVudD1cImhlYWRlclwiXG4gICAgICBzeD17e1xuICAgICAgICBoZWlnaHQ6IHsgeHM6IDUyLCBzbTogNzIgfSxcbiAgICAgICAgekluZGV4OiAxMzAwLFxuICAgICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgICAgICA8TG9nbyAvPlxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGxpbmVIZWlnaHQ6ICdub3JtYWwnIH19PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiB7IHhzOiAxLCBzbTogJzM1MHB4JyB9LFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyNXB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTW9iaWxlID8gcmVuZGVyTW9iaWxlQ3VycmVuY3lSYXRlcygpIDogcmVuZGVyRGVza3RvcEN1cnJlbmN5UmF0ZXMoKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0FwcEJhcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJBcHBCYXIiLCJCb3giLCJDb250YWluZXIiLCJGYWRlIiwidXNlTWVkaWFRdWVyeSIsIkN1cnJlbmN5UmF0ZSIsIkxvZ28iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUN1cnJlbmN5RXhjaGFuZ2VSYXRlcyIsIkNVUlJFTkNZX0NPREVTIiwiSGVhZGVyIiwiVVNEIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiaXNNb2JpbGUiLCJldXIiLCJ1c2QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsIkVVUiIsInByZXYiLCJjbGVhckludGVydmFsIiwicmVuZGVyTW9iaWxlQ3VycmVuY3lSYXRlcyIsImluIiwidGltZW91dCIsInVubW91bnRPbkV4aXQiLCJzeCIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJjdXJyZW5jeSIsImN1cnJlbmN5TmFtZSIsInJlbmRlckRlc2t0b3BDdXJyZW5jeVJhdGVzIiwiY29tcG9uZW50IiwiaGVpZ2h0IiwieHMiLCJzbSIsInpJbmRleCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/header/header.jsx\n"));

/***/ })

});