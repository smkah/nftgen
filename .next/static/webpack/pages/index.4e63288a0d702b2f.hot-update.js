"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Samuel_Documents_projects_nftgen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Samuel_Documents_projects_nftgen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Samuel_Documents_projects_nftgen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_sam_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/sam.jpg */ \"./assets/images/sam.jpg\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction HomePage() {\n    var onHandleWidthChange = function onHandleWidthChange(e) {\n        var newWidth = e.target.value;\n        setSubject(_objectSpread({}, subject, {\n            newWidth: newWidth\n        }));\n    // setWidthImage(e.target.value)\n    };\n    var onHandleHeightChange = function onHandleHeightChange(e) {\n        var newHeight = e.target.value;\n        setSubject(_objectSpread({}, subject, {\n            newHeight: newHeight\n        }));\n    // setHeightImage(e.target.value)\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        newWidth: _assets_images_sam_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width,\n        newHeight: _assets_images_sam_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height\n    }), subject = ref[0], setSubject = ref[1];\n    // const [widthImage, setWidthImage] = useState(srcImage.width)\n    // const [heightImage, setHeightImage] = useState(srcImage.height)\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(_asyncToGenerator(C_Users_Samuel_Documents_projects_nftgen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_Samuel_Documents_projects_nftgen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch('/api/image', {\n                        method: 'POST',\n                        body: JSON.stringify(subject)\n                    }).then(function(res) {\n                        return res.json();\n                    });\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        subject\n    ]);\n    // if (error) return <div>Failed to load</div>\n    // if (!res) return <div>Loading...</div>\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Change Image\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samuel\\\\Documents\\\\projects\\\\nftgen\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            \"Width: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"number\",\n                min: \"0\",\n                max: subject.newWidth,\n                step: \"1\",\n                value: subject.newWidth,\n                onChange: onHandleWidthChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samuel\\\\Documents\\\\projects\\\\nftgen\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 20\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: \"px\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samuel\\\\Documents\\\\projects\\\\nftgen\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 146\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samuel\\\\Documents\\\\projects\\\\nftgen\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 161\n            }, this),\n            \"Height: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"number\",\n                min: \"0\",\n                max: subject.newHeight,\n                step: \"1\",\n                value: subject.newHeight,\n                onChange: onHandleHeightChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samuel\\\\Documents\\\\projects\\\\nftgen\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 21\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: \"px\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samuel\\\\Documents\\\\projects\\\\nftgen\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 150\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samuel\\\\Documents\\\\projects\\\\nftgen\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 165\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(subject, null, 2)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samuel\\\\Documents\\\\projects\\\\nftgen\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(HomePage, \"zM4rdP0A8AjxSx5KlU50yDLG+EA=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFekNJLFFBQVEsR0FBRyxDQUFDO1FBZVJDLG1CQUFtQixHQUE1QixRQUFRLENBQUNBLG1CQUFtQixDQUFDQyxDQUFDLEVBQUUsQ0FBQztRQUM3QixHQUFLLENBQUNDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7UUFDL0JDLFVBQVUsbUJBQU1DLE9BQU87WUFBRUosUUFBUSxFQUFSQSxRQUFROztJQUNqQyxFQUFnQztJQUNwQyxDQUFDO1FBQ1FLLG9CQUFvQixHQUE3QixRQUFRLENBQUNBLG9CQUFvQixDQUFDTixDQUFDLEVBQUUsQ0FBQztRQUM5QixHQUFLLENBQUNPLFNBQVMsR0FBR1AsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7UUFDaENDLFVBQVUsbUJBQU1DLE9BQU87WUFBRUUsU0FBUyxFQUFUQSxTQUFTOztJQUNsQyxFQUFpQztJQUNyQyxDQUFDOztJQXRCRCxHQUFLLENBQXlCWCxHQUU1QixHQUY0QkEsK0NBQVEsQ0FBQyxDQUFDO1FBQ3BDSyxRQUFRLEVBQUVKLG9FQUFjO1FBQUVVLFNBQVMsRUFBRVYscUVBQWU7SUFDeEQsQ0FBQyxHQUZNUSxPQUFPLEdBQWdCVCxHQUU1QixLQUZjUSxVQUFVLEdBQUlSLEdBRTVCO0lBQ0YsRUFBK0Q7SUFDL0QsRUFBa0U7SUFFbEVELGdEQUFTLHVLQUFDLFFBQVEsV0FBSSxDQUFDOzs7OzsyQkFDYmUsS0FBSyxDQUFDLENBQVksYUFBRSxDQUFDO3dCQUN2QkMsTUFBTSxFQUFFLENBQU07d0JBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNULE9BQU87b0JBQ2hDLENBQUMsRUFBRVUsSUFBSSxDQUFDQyxRQUFRLENBQVJBLEdBQUc7d0JBQUlBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDQyxJQUFJOzs7Ozs7O0lBQzNCLENBQUMsSUFBRSxDQUFDWjtRQUFBQSxPQUFPO0lBQUEsQ0FBQztJQWFaLEVBQThDO0lBQzlDLEVBQXlDO0lBRXpDLE1BQU07O3dGQUVHYSxDQUFFOzBCQUFDLENBQVk7Ozs7OztZQUFLLENBQ2Q7d0ZBQUNDLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFRO2dCQUFDQyxHQUFHLEVBQUMsQ0FBRztnQkFBQ0MsR0FBRyxFQUFFakIsT0FBTyxDQUFDSixRQUFRO2dCQUFFc0IsSUFBSSxFQUFDLENBQUc7Z0JBQUNwQixLQUFLLEVBQUVFLE9BQU8sQ0FBQ0osUUFBUTtnQkFBRXVCLFFBQVEsRUFBRXpCLG1CQUFtQjs7Ozs7O1lBQVUsQ0FBQzt3RkFBQzBCLENBQUk7MEJBQUMsQ0FBRTs7Ozs7O3dGQUFRQyxDQUFFOzs7OztZQUFHLENBQ2xKO3dGQUFDUCxDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBUTtnQkFBQ0MsR0FBRyxFQUFDLENBQUc7Z0JBQUNDLEdBQUcsRUFBRWpCLE9BQU8sQ0FBQ0UsU0FBUztnQkFBRWdCLElBQUksRUFBQyxDQUFHO2dCQUFDcEIsS0FBSyxFQUFFRSxPQUFPLENBQUNFLFNBQVM7Z0JBQUVpQixRQUFRLEVBQUVsQixvQkFBb0I7Ozs7OztZQUFVLENBQUM7d0ZBQUNtQixDQUFJOzBCQUFDLENBQUU7Ozs7Ozt3RkFBUUMsQ0FBRTs7Ozs7d0ZBQzFKQyxDQUFHOzBCQUFFZCxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzs7Ozs7OztBQUlqRCxDQUFDO0dBdENRUCxRQUFRO0tBQVJBLFFBQVE7QUF3Q2pCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzcmNJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL3NhbS5qcGcnXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuXHJcbiAgICBjb25zdCBbc3ViamVjdCwgc2V0U3ViamVjdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmV3V2lkdGg6IHNyY0ltYWdlLndpZHRoLCBuZXdIZWlnaHQ6IHNyY0ltYWdlLmhlaWdodFxyXG4gICAgfSlcclxuICAgIC8vIGNvbnN0IFt3aWR0aEltYWdlLCBzZXRXaWR0aEltYWdlXSA9IHVzZVN0YXRlKHNyY0ltYWdlLndpZHRoKVxyXG4gICAgLy8gY29uc3QgW2hlaWdodEltYWdlLCBzZXRIZWlnaHRJbWFnZV0gPSB1c2VTdGF0ZShzcmNJbWFnZS5oZWlnaHQpXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9pbWFnZScsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN1YmplY3QpXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIH0sIFtzdWJqZWN0XSlcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhhbmRsZVdpZHRoQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zdCBuZXdXaWR0aCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgc2V0U3ViamVjdCh7IC4uLnN1YmplY3QsIG5ld1dpZHRoIH0pXHJcbiAgICAgICAgLy8gc2V0V2lkdGhJbWFnZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uSGFuZGxlSGVpZ2h0Q2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHNldFN1YmplY3QoeyAuLi5zdWJqZWN0LCBuZXdIZWlnaHQgfSlcclxuICAgICAgICAvLyBzZXRIZWlnaHRJbWFnZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkPC9kaXY+XHJcbiAgICAvLyBpZiAoIXJlcykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxPkNoYW5nZSBJbWFnZTwvaDE+XHJcbiAgICAgICAgICAgIFdpZHRoOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9e3N1YmplY3QubmV3V2lkdGh9IHN0ZXA9XCIxXCIgdmFsdWU9e3N1YmplY3QubmV3V2lkdGh9IG9uQ2hhbmdlPXtvbkhhbmRsZVdpZHRoQ2hhbmdlfT48L2lucHV0PiA8c3Bhbj5weDwvc3Bhbj48YnIgLz5cclxuICAgICAgICAgICAgSGVpZ2h0OiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9e3N1YmplY3QubmV3SGVpZ2h0fSBzdGVwPVwiMVwiIHZhbHVlPXtzdWJqZWN0Lm5ld0hlaWdodH0gb25DaGFuZ2U9e29uSGFuZGxlSGVpZ2h0Q2hhbmdlfT48L2lucHV0PiA8c3Bhbj5weDwvc3Bhbj48YnIgLz5cclxuICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoc3ViamVjdCwgbnVsbCwgMil9PC9wcmU+XHJcbiAgICAgICAgICAgIHsvKiA8SW1hZ2Ugey4uLnNyY0ltYWdlfSAvPiAqL31cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNyY0ltYWdlIiwiSG9tZVBhZ2UiLCJvbkhhbmRsZVdpZHRoQ2hhbmdlIiwiZSIsIm5ld1dpZHRoIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdWJqZWN0Iiwic3ViamVjdCIsIm9uSGFuZGxlSGVpZ2h0Q2hhbmdlIiwibmV3SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJoMSIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsInN0ZXAiLCJvbkNoYW5nZSIsInNwYW4iLCJiciIsInByZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});