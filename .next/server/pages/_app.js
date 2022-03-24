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

/***/ "./src/context/FilesContext.js":
/*!*************************************!*\
  !*** ./src/context/FilesContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilesProvider),\n/* harmony export */   \"useFiles\": () => (/* binding */ useFiles)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useArray */ \"./src/hooks/useArray.js\");\n\n\n\nconst FilesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction FilesProvider({ children  }) {\n    const { 0: files , 1: setFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { array , set , push , remove , filter , update , clear  } = (0,_hooks_useArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilesContext.Provider, {\n        value: {\n            files,\n            setFiles,\n            array,\n            set,\n            push,\n            remove,\n            filter,\n            update,\n            clear\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Samuel\\\\Documents\\\\projects\\\\nftgen\\\\src\\\\context\\\\FilesContext.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this));\n};\nfunction useFiles() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FilesContext);\n    const { files , setFiles , array , set , push , remove , filter , update , clear  } = context;\n    return {\n        files,\n        setFiles,\n        array,\n        set,\n        push,\n        remove,\n        filter,\n        update,\n        clear\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9GaWxlc0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0U7QUFDMUI7QUFFeEMsS0FBSyxDQUFDSyxZQUFZLGlCQUFHRixvREFBYTtBQUVuQixRQUFRLENBQUNHLGFBQWEsQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRCxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJUCwrQ0FBUTtJQUNsQyxLQUFLLENBQUMsQ0FBQyxDQUFDUSxLQUFLLEdBQUVDLEdBQUcsR0FBRUMsSUFBSSxHQUFFQyxNQUFNLEdBQUVDLE1BQU0sR0FBRUMsTUFBTSxHQUFFQyxLQUFLLEVBQUMsQ0FBQyxHQUFHWiwyREFBUSxDQUFDLENBQUMsQ0FBQztJQUV2RSxNQUFNLDZFQUNEQyxZQUFZLENBQUNZLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQ1YsS0FBSztZQUFFQyxRQUFRO1lBQUVDLEtBQUs7WUFBRUMsR0FBRztZQUFFQyxJQUFJO1lBQUVDLE1BQU07WUFBRUMsTUFBTTtZQUFFQyxNQUFNO1lBQUVDLEtBQUs7UUFBQyxDQUFDO2tCQUM3RlQsUUFBUTs7Ozs7O0FBR3JCLENBQUM7QUFFTSxTQUFTWSxRQUFRLEdBQUcsQ0FBQztJQUN4QixLQUFLLENBQUNDLE9BQU8sR0FBR25CLGlEQUFVLENBQUNJLFlBQVk7SUFDdkMsS0FBSyxDQUFDLENBQUMsQ0FBQ0csS0FBSyxHQUFFQyxRQUFRLEdBQUVDLEtBQUssR0FBRUMsR0FBRyxHQUFFQyxJQUFJLEdBQUVDLE1BQU0sR0FBRUMsTUFBTSxHQUFFQyxNQUFNLEdBQUVDLEtBQUssRUFBQyxDQUFDLEdBQUdJLE9BQU87SUFDcEYsTUFBTSxDQUFDLENBQUM7UUFBQ1osS0FBSztRQUFFQyxRQUFRO1FBQUVDLEtBQUs7UUFBRUMsR0FBRztRQUFFQyxJQUFJO1FBQUVDLE1BQU07UUFBRUMsTUFBTTtRQUFFQyxNQUFNO1FBQUVDLEtBQUs7SUFBQyxDQUFDO0FBQy9FLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnRnZW4vLi9zcmMvY29udGV4dC9GaWxlc0NvbnRleHQuanM/MGU3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgdXNlQXJyYXkgZnJvbSAnLi4vaG9va3MvdXNlQXJyYXknXHJcblxyXG5jb25zdCBGaWxlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVzUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IHsgYXJyYXksIHNldCwgcHVzaCwgcmVtb3ZlLCBmaWx0ZXIsIHVwZGF0ZSwgY2xlYXIgfSA9IHVzZUFycmF5KFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZpbGVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBmaWxlcywgc2V0RmlsZXMsIGFycmF5LCBzZXQsIHB1c2gsIHJlbW92ZSwgZmlsdGVyLCB1cGRhdGUsIGNsZWFyIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9GaWxlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGaWxlcygpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEZpbGVzQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGZpbGVzLCBzZXRGaWxlcywgYXJyYXksIHNldCwgcHVzaCwgcmVtb3ZlLCBmaWx0ZXIsIHVwZGF0ZSwgY2xlYXIgfSA9IGNvbnRleHQ7XHJcbiAgICByZXR1cm4geyBmaWxlcywgc2V0RmlsZXMsIGFycmF5LCBzZXQsIHB1c2gsIHJlbW92ZSwgZmlsdGVyLCB1cGRhdGUsIGNsZWFyIH1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBcnJheSIsIkZpbGVzQ29udGV4dCIsIkZpbGVzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImZpbGVzIiwic2V0RmlsZXMiLCJhcnJheSIsInNldCIsInB1c2giLCJyZW1vdmUiLCJmaWx0ZXIiLCJ1cGRhdGUiLCJjbGVhciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VGaWxlcyIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/FilesContext.js\n");

/***/ }),

/***/ "./src/hooks/useArray.js":
/*!*******************************!*\
  !*** ./src/hooks/useArray.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useArray)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useArray(defaultValue) {\n    const { 0: array , 1: setArray  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);\n    function push(element) {\n        setArray((a)=>[\n                ...a,\n                element\n            ]\n        );\n    }\n    function filter(callback) {\n        setArray((a)=>a.filter(callback)\n        );\n    }\n    function update(index, newElement) {\n        setArray((a)=>[\n                ...a.slice(0, index),\n                newElement,\n                ...a.slice(index + 1, a.length), \n            ]\n        );\n    }\n    function remove(index) {\n        setArray((a)=>[\n                ...a.slice(0, index),\n                ...a.slice(index + 1, a.length)\n            ]\n        );\n    }\n    function clear() {\n        setArray([]);\n    }\n    return {\n        array,\n        set: setArray,\n        push,\n        filter,\n        update,\n        remove,\n        clear\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlQXJyYXkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWpCLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJSiwrQ0FBUSxDQUFDRSxZQUFZO2FBRXRDRyxJQUFJLENBQUNDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCRixRQUFRLEVBQUNHLENBQUMsR0FBSSxDQUFDO21CQUFHQSxDQUFDO2dCQUFFRCxPQUFPO1lBQUEsQ0FBQzs7SUFDakMsQ0FBQzthQUVRRSxNQUFNLENBQUNDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCTCxRQUFRLEVBQUNHLENBQUMsR0FBSUEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLFFBQVE7O0lBQ25DLENBQUM7YUFFUUMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFVBQVUsRUFBRSxDQUFDO1FBQ2hDUixRQUFRLEVBQUNHLENBQUMsR0FBSSxDQUFDO21CQUNSQSxDQUFDLENBQUNNLEtBQUssQ0FBQyxDQUFDLEVBQUVGLEtBQUs7Z0JBQ25CQyxVQUFVO21CQUNQTCxDQUFDLENBQUNNLEtBQUssQ0FBQ0YsS0FBSyxHQUFHLENBQUMsRUFBRUosQ0FBQyxDQUFDTyxNQUFNO1lBQ2xDLENBQUM7O0lBQ0wsQ0FBQzthQUVRQyxNQUFNLENBQUNKLEtBQUssRUFBRSxDQUFDO1FBQ3BCUCxRQUFRLEVBQUNHLENBQUMsR0FBSSxDQUFDO21CQUFHQSxDQUFDLENBQUNNLEtBQUssQ0FBQyxDQUFDLEVBQUVGLEtBQUs7bUJBQU1KLENBQUMsQ0FBQ00sS0FBSyxDQUFDRixLQUFLLEdBQUcsQ0FBQyxFQUFFSixDQUFDLENBQUNPLE1BQU07WUFBQyxDQUFDOztJQUN6RSxDQUFDO2FBRVFFLEtBQUssR0FBRyxDQUFDO1FBQ2RaLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFBQ0QsS0FBSztRQUFFYyxHQUFHLEVBQUViLFFBQVE7UUFBRUMsSUFBSTtRQUFFRyxNQUFNO1FBQUVFLE1BQU07UUFBRUssTUFBTTtRQUFFQyxLQUFLO0lBQUMsQ0FBQztBQUN4RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmZ0Z2VuLy4vc3JjL2hvb2tzL3VzZUFycmF5LmpzP2YxNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXJyYXkoZGVmYXVsdFZhbHVlKSB7XHJcbiAgICBjb25zdCBbYXJyYXksIHNldEFycmF5XSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSlcclxuXHJcbiAgICBmdW5jdGlvbiBwdXNoKGVsZW1lbnQpIHtcclxuICAgICAgICBzZXRBcnJheShhID0+IFsuLi5hLCBlbGVtZW50XSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2spIHtcclxuICAgICAgICBzZXRBcnJheShhID0+IGEuZmlsdGVyKGNhbGxiYWNrKSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGUoaW5kZXgsIG5ld0VsZW1lbnQpIHtcclxuICAgICAgICBzZXRBcnJheShhID0+IFtcclxuICAgICAgICAgICAgLi4uYS5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICAgIG5ld0VsZW1lbnQsXHJcbiAgICAgICAgICAgIC4uLmEuc2xpY2UoaW5kZXggKyAxLCBhLmxlbmd0aCksXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoaW5kZXgpIHtcclxuICAgICAgICBzZXRBcnJheShhID0+IFsuLi5hLnNsaWNlKDAsIGluZGV4KSwgLi4uYS5zbGljZShpbmRleCArIDEsIGEubGVuZ3RoKV0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICAgICAgc2V0QXJyYXkoW10pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgYXJyYXksIHNldDogc2V0QXJyYXksIHB1c2gsIGZpbHRlciwgdXBkYXRlLCByZW1vdmUsIGNsZWFyIH1cclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUFycmF5IiwiZGVmYXVsdFZhbHVlIiwiYXJyYXkiLCJzZXRBcnJheSIsInB1c2giLCJlbGVtZW50IiwiYSIsImZpbHRlciIsImNhbGxiYWNrIiwidXBkYXRlIiwiaW5kZXgiLCJuZXdFbGVtZW50Iiwic2xpY2UiLCJsZW5ndGgiLCJyZW1vdmUiLCJjbGVhciIsInNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useArray.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_folder_tree_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-folder-tree/dist/style.css */ \"./node_modules/react-folder-tree/dist/style.css\");\n/* harmony import */ var react_folder_tree_dist_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_folder_tree_dist_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_FilesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/FilesContext */ \"./src/context/FilesContext.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_FilesContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Samuel\\\\Documents\\\\projects\\\\nftgen\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Samuel\\\\Documents\\\\projects\\\\nftgen\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1k7QUFHVTtTQUUxQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxFQUFFLENBQUM7SUFDbEQsTUFBTSw2RUFBRUgsNkRBQWE7OEZBQ2xCRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRTVCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdGdlbi8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnXHJcbmltcG9ydCAncmVhY3QtZm9sZGVyLXRyZWUvZGlzdC9zdHlsZS5jc3MnXHJcblxyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBGaWxlc1Byb3ZpZGVyIGZyb20gJy4uL2NvbnRleHQvRmlsZXNDb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiA8RmlsZXNQcm92aWRlcj5cclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICA8L0ZpbGVzUHJvdmlkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm5hbWVzIjpbIkZpbGVzUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/react-folder-tree/dist/style.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-folder-tree/dist/style.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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