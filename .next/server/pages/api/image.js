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
exports.id = "pages/api/image";
exports.ids = ["pages/api/image"];
exports.modules = {

/***/ "jimp":
/*!***********************!*\
  !*** external "jimp" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("jimp");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/image.js":
/*!********************************!*\
  !*** ./src/pages/api/image.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst Jimp = __webpack_require__(/*! jimp */ \"jimp\");\nconst path = __webpack_require__(/*! path */ \"path\");\nasync function handler(req, res) {\n    let { width , height , x , y , angle  } = JSON.parse(req.body);\n    console.log(angle);\n    let w = Number(x);\n    let h = Number(y);\n    let wth = Number(width);\n    let hht = Number(height);\n    const person = await Jimp.read('./assets/images/sam.jpg');\n    const hat = await Jimp.read('./assets/masks/hat.png');\n    hat.resize(wth, hht).rotate(-angle);\n    person.composite(hat, w, h).write('./assets/images/sam1.jpg');\n    res.status(200).json({\n        name: 'John Doe'\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ltYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQixLQUFLLENBQUNDLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxrQkFBTTtBQUVaLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM3QyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUVDLE1BQU0sR0FBRUMsQ0FBQyxHQUFFQyxDQUFDLEdBQUVDLEtBQUssRUFBQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUixHQUFHLENBQUNTLElBQUk7SUFFeERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxLQUFLO0lBR2pCLEdBQUcsQ0FBQ00sQ0FBQyxHQUFHQyxNQUFNLENBQUNULENBQUM7SUFDaEIsR0FBRyxDQUFDVSxDQUFDLEdBQUdELE1BQU0sQ0FBQ1IsQ0FBQztJQUNoQixHQUFHLENBQUNVLEdBQUcsR0FBR0YsTUFBTSxDQUFDWCxLQUFLO0lBQ3RCLEdBQUcsQ0FBQ2MsR0FBRyxHQUFHSCxNQUFNLENBQUNWLE1BQU07SUFFdkIsS0FBSyxDQUFDYyxNQUFNLEdBQUcsS0FBSyxDQUFDckIsSUFBSSxDQUFDc0IsSUFBSSxDQUFDLENBQXlCO0lBQ3hELEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ3ZCLElBQUksQ0FBQ3NCLElBQUksQ0FBQyxDQUF3QjtJQUVwREMsR0FBRyxDQUFDQyxNQUFNLENBQUNMLEdBQUcsRUFBRUMsR0FBRyxFQUFFSyxNQUFNLEVBQUVmLEtBQUs7SUFHbENXLE1BQU0sQ0FDREssU0FBUyxDQUFDSCxHQUFHLEVBQUVQLENBQUMsRUFBRUUsQ0FBQyxFQUNuQlMsS0FBSyxDQUFDLENBQTBCO0lBR3JDdEIsR0FBRyxDQUFDdUIsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQ0MsSUFBSSxFQUFFLENBQVU7SUFBQyxDQUFDO0FBQzdDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnRnZW4vLi9zcmMvcGFnZXMvYXBpL2ltYWdlLmpzPzgzNWYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSmltcCA9IHJlcXVpcmUoJ2ppbXAnKVxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0LCB4LCB5LCBhbmdsZSB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhhbmdsZSlcclxuXHJcblxyXG4gICAgbGV0IHcgPSBOdW1iZXIoeClcclxuICAgIGxldCBoID0gTnVtYmVyKHkpXHJcbiAgICBsZXQgd3RoID0gTnVtYmVyKHdpZHRoKVxyXG4gICAgbGV0IGhodCA9IE51bWJlcihoZWlnaHQpXHJcblxyXG4gICAgY29uc3QgcGVyc29uID0gYXdhaXQgSmltcC5yZWFkKCcuL2Fzc2V0cy9pbWFnZXMvc2FtLmpwZycpO1xyXG4gICAgY29uc3QgaGF0ID0gYXdhaXQgSmltcC5yZWFkKCcuL2Fzc2V0cy9tYXNrcy9oYXQucG5nJyk7XHJcblxyXG4gICAgaGF0LnJlc2l6ZSh3dGgsIGhodCkucm90YXRlKC1hbmdsZSlcclxuXHJcblxyXG4gICAgcGVyc29uXHJcbiAgICAgICAgLmNvbXBvc2l0ZShoYXQsIHcsIGgpXHJcbiAgICAgICAgLndyaXRlKCcuL2Fzc2V0cy9pbWFnZXMvc2FtMS5qcGcnKTtcclxuXHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiAnSm9obiBEb2UnIH0pXHJcbn0iXSwibmFtZXMiOlsiSmltcCIsInJlcXVpcmUiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJhbmdsZSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwidyIsIk51bWJlciIsImgiLCJ3dGgiLCJoaHQiLCJwZXJzb24iLCJyZWFkIiwiaGF0IiwicmVzaXplIiwicm90YXRlIiwiY29tcG9zaXRlIiwid3JpdGUiLCJzdGF0dXMiLCJqc29uIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/image.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/image.js"));
module.exports = __webpack_exports__;

})();