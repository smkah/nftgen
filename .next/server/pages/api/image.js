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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst Jimp = __webpack_require__(/*! jimp */ \"jimp\");\nconst path = __webpack_require__(/*! path */ \"path\");\nasync function handler(req, res) {\n    let { newWidth , newHeight  } = JSON.parse(req.body);\n    let w = Number(newWidth);\n    let h = Number(newHeight);\n    const person = await Jimp.read('./assets/images/sam.jpg');\n    person.resize(w, h).write('./assets/images/sam1.jpg');\n    res.status(200).json({\n        name: 'John Doe'\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ltYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQixLQUFLLENBQUNDLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxrQkFBTTtBQUVaLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM3QyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxHQUFHLENBQUNNLElBQUk7SUFFakQsR0FBRyxDQUFDQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ04sUUFBUTtJQUN2QixHQUFHLENBQUNPLENBQUMsR0FBR0QsTUFBTSxDQUFDTCxTQUFTO0lBRXhCLEtBQUssQ0FBQ08sTUFBTSxHQUFHLEtBQUssQ0FBQ2QsSUFBSSxDQUFDZSxJQUFJLENBQUMsQ0FBeUI7SUFDeERELE1BQU0sQ0FDREUsTUFBTSxDQUFDTCxDQUFDLEVBQUVFLENBQUMsRUFDWEksS0FBSyxDQUFDLENBQTBCO0lBR3JDWixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1FBQUNDLElBQUksRUFBRSxDQUFVO0lBQUMsQ0FBQztBQUM3QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmZ0Z2VuLy4vc3JjL3BhZ2VzL2FwaS9pbWFnZS5qcz84MzVmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEppbXAgPSByZXF1aXJlKCdqaW1wJylcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgbGV0IHsgbmV3V2lkdGgsIG5ld0hlaWdodCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSlcclxuXHJcbiAgICBsZXQgdyA9IE51bWJlcihuZXdXaWR0aClcclxuICAgIGxldCBoID0gTnVtYmVyKG5ld0hlaWdodClcclxuXHJcbiAgICBjb25zdCBwZXJzb24gPSBhd2FpdCBKaW1wLnJlYWQoJy4vYXNzZXRzL2ltYWdlcy9zYW0uanBnJyk7XHJcbiAgICBwZXJzb25cclxuICAgICAgICAucmVzaXplKHcsIGgpXHJcbiAgICAgICAgLndyaXRlKCcuL2Fzc2V0cy9pbWFnZXMvc2FtMS5qcGcnKTtcclxuXHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiAnSm9obiBEb2UnIH0pXHJcbn0iXSwibmFtZXMiOlsiSmltcCIsInJlcXVpcmUiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInciLCJOdW1iZXIiLCJoIiwicGVyc29uIiwicmVhZCIsInJlc2l6ZSIsIndyaXRlIiwic3RhdHVzIiwianNvbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/image.js\n");

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