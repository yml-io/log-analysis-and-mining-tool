/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/resource/upload";
exports.ids = ["pages/api/resource/upload"];
exports.modules = {

/***/ "./lib/init_middleware.js":
/*!********************************!*\
  !*** ./lib/init_middleware.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ initMiddleware; }\n/* harmony export */ });\n// Helper method to wait for a middleware to execute before continuing\n// And to throw an error when an error happens in a middleware\nfunction initMiddleware(middleware) {\n  return (req, res) => new Promise((resolve, reject) => {\n    middleware(req, res, result => {\n      if (result instanceof Error) {\n        return reject(result);\n      }\n\n      return resolve(result);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vbGliL2luaXRfbWlkZGxld2FyZS5qcz9kMTJiIl0sIm5hbWVzIjpbImluaXRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ2UsU0FBU0EsY0FBVCxDQUF3QkMsVUFBeEIsRUFBb0M7QUFDL0MsU0FBTyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FDTCxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQy9CTCxjQUFVLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFZSSxNQUFELElBQVk7QUFDL0IsVUFBSUEsTUFBTSxZQUFZQyxLQUF0QixFQUE2QjtBQUMzQixlQUFPRixNQUFNLENBQUNDLE1BQUQsQ0FBYjtBQUNEOztBQUNELGFBQU9GLE9BQU8sQ0FBQ0UsTUFBRCxDQUFkO0FBQ0QsS0FMUyxDQUFWO0FBTUQsR0FQRCxDQURGO0FBU0QiLCJmaWxlIjoiLi9saWIvaW5pdF9taWRkbGV3YXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xuLy8gQW5kIHRvIHRocm93IGFuIGVycm9yIHdoZW4gYW4gZXJyb3IgaGFwcGVucyBpbiBhIG1pZGRsZXdhcmVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpIHtcbiAgICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/init_middleware.js\n");

/***/ }),

/***/ "./lib/uploadUtil.js":
/*!***************************!*\
  !*** ./lib/uploadUtil.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUploadFileName\": function() { return /* binding */ createUploadFileName; },\n/* harmony export */   \"saveUploadedFile\": function() { return /* binding */ saveUploadedFile; }\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createUploadFileName = originalFileName => {\n  const timeSeriesValue = new Date().toISOString().replace(/[T:-]/g, '').replace(/\\.(\\d\\d).+/, '$1');\n  return `${timeSeriesValue}${originalFileName.slice(0, 5)}.tmp`;\n};\nconst saveUploadedFile = async (file, savedFileName) => {\n  const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file.path);\n  const uploadFullPath = `./upload/${savedFileName}`;\n  fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(uploadFullPath, data);\n  await fs__WEBPACK_IMPORTED_MODULE_0___default().unlinkSync(file.path);\n  return savedFileName;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vbGliL3VwbG9hZFV0aWwuanM/MTFjNSJdLCJuYW1lcyI6WyJjcmVhdGVVcGxvYWRGaWxlTmFtZSIsIm9yaWdpbmFsRmlsZU5hbWUiLCJ0aW1lU2VyaWVzVmFsdWUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJyZXBsYWNlIiwic2xpY2UiLCJzYXZlVXBsb2FkZWRGaWxlIiwiZmlsZSIsInNhdmVkRmlsZU5hbWUiLCJkYXRhIiwiZnMiLCJwYXRoIiwidXBsb2FkRnVsbFBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLG9CQUFvQixHQUFJQyxnQkFBRCxJQUFzQjtBQUN0RCxRQUFNQyxlQUFlLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEdBQXlCQyxPQUF6QixDQUFpQyxRQUFqQyxFQUEyQyxFQUEzQyxFQUErQ0EsT0FBL0MsQ0FBdUQsWUFBdkQsRUFBcUUsSUFBckUsQ0FBeEI7QUFDQSxTQUFRLEdBQUVILGVBQWdCLEdBQUVELGdCQUFnQixDQUFDSyxLQUFqQixDQUF1QixDQUF2QixFQUF5QixDQUF6QixDQUE0QixNQUF4RDtBQUNILENBSE07QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxPQUFPQyxJQUFQLEVBQWFDLGFBQWIsS0FBK0I7QUFDM0QsUUFBTUMsSUFBSSxHQUFHQyxzREFBQSxDQUFnQkgsSUFBSSxDQUFDSSxJQUFyQixDQUFiO0FBQ0EsUUFBTUMsY0FBYyxHQUFJLFlBQVdKLGFBQWMsRUFBakQ7QUFDQUUseURBQUEsQ0FBaUJFLGNBQWpCLEVBQWlDSCxJQUFqQztBQUNBLFFBQU1DLG9EQUFBLENBQWNILElBQUksQ0FBQ0ksSUFBbkIsQ0FBTjtBQUNBLFNBQU9ILGFBQVA7QUFDSCxDQU5NIiwiZmlsZSI6Ii4vbGliL3VwbG9hZFV0aWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXBsb2FkRmlsZU5hbWUgPSAob3JpZ2luYWxGaWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHRpbWVTZXJpZXNWYWx1ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9bVDotXS9nLCAnJykucmVwbGFjZSgvXFwuKFxcZFxcZCkuKy8sICckMScpO1xuICAgIHJldHVybiBgJHt0aW1lU2VyaWVzVmFsdWV9JHtvcmlnaW5hbEZpbGVOYW1lLnNsaWNlKDAsNSl9LnRtcGA7XG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZVVwbG9hZGVkRmlsZSA9IGFzeW5jIChmaWxlLCBzYXZlZEZpbGVOYW1lKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlLnBhdGgpO1xuICAgIGNvbnN0IHVwbG9hZEZ1bGxQYXRoID0gYC4vdXBsb2FkLyR7c2F2ZWRGaWxlTmFtZX1gO1xuICAgIGZzLndyaXRlRmlsZVN5bmModXBsb2FkRnVsbFBhdGgsIGRhdGEpO1xuICAgIGF3YWl0IGZzLnVubGlua1N5bmMoZmlsZS5wYXRoKTtcbiAgICByZXR1cm4gc2F2ZWRGaWxlTmFtZTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/uploadUtil.js\n");

/***/ }),

/***/ "./pages/api/resource/upload.js":
/*!**************************************!*\
  !*** ./pages/api/resource/upload.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; },\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/init_middleware */ \"./lib/init_middleware.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_uploadUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/uploadUtil */ \"./lib/uploadUtil.js\");\n\n\n\n\n\nconst config = {\n  api: {\n    bodyParser: false\n  }\n}; // Initialize the cors middleware\n\nconst cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__.default)( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options\ncors__WEBPACK_IMPORTED_MODULE_0___default()({\n  // Only allow requests with GET, POST and OPTIONS\n  methods: ['GET', 'POST', 'OPTIONS']\n}));\nasync function handler(req, res) {\n  // Run cors\n  await cors(req, res);\n  console.log(req.body);\n  const form = new (formidable__WEBPACK_IMPORTED_MODULE_2___default().IncomingForm)();\n  await form.parse(req, async function (err, fields, files) {\n    const uploadedFile = files.file;\n    const savedFileName = (0,_lib_uploadUtil__WEBPACK_IMPORTED_MODULE_4__.createUploadFileName)(uploadedFile.name);\n    await (0,_lib_uploadUtil__WEBPACK_IMPORTED_MODULE_4__.saveUploadedFile)(uploadedFile, savedFileName).then(savedFileName => res.status(201).json({\n      status: 0,\n      data: {\n        resourceName: savedFileName\n      }\n    })); // .catch(ioe => res.status(500).json({status: 1, error: {message: \"save file error\"}}));\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvYXBpL3Jlc291cmNlL3VwbG9hZC5qcz9hMjRlIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJjb3JzIiwiaW5pdE1pZGRsZXdhcmUiLCJDb3JzIiwibWV0aG9kcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImZvcm0iLCJmb3JtaWRhYmxlIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsInVwbG9hZGVkRmlsZSIsImZpbGUiLCJzYXZlZEZpbGVOYW1lIiwiY3JlYXRlVXBsb2FkRmlsZU5hbWUiLCJuYW1lIiwic2F2ZVVwbG9hZGVkRmlsZSIsInRoZW4iLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInJlc291cmNlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxNQUFNLEdBQUc7QUFDbEJDLEtBQUcsRUFBRTtBQUNIQyxjQUFVLEVBQUU7QUFEVDtBQURhLENBQWYsQyxDQU1QOztBQUNBLE1BQU1DLElBQUksR0FBR0MsNkRBQWMsRUFDekI7QUFDQUMsMkNBQUksQ0FBQztBQUNIO0FBQ0FDLFNBQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFNBQWhCO0FBRk4sQ0FBRCxDQUZxQixDQUEzQjtBQVFlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QztBQUNBLFFBQU1OLElBQUksQ0FBQ0ssR0FBRCxFQUFNQyxHQUFOLENBQVY7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0ksSUFBaEI7QUFFQSxRQUFNQyxJQUFJLEdBQUcsSUFBSUMsZ0VBQUosRUFBYjtBQUNBLFFBQU1ELElBQUksQ0FBQ0UsS0FBTCxDQUFXUCxHQUFYLEVBQWdCLGdCQUFnQlEsR0FBaEIsRUFBcUJDLE1BQXJCLEVBQTZCQyxLQUE3QixFQUFvQztBQUN4RCxVQUFNQyxZQUFZLEdBQUdELEtBQUssQ0FBQ0UsSUFBM0I7QUFDQSxVQUFNQyxhQUFhLEdBQUdDLHFFQUFvQixDQUFDSCxZQUFZLENBQUNJLElBQWQsQ0FBMUM7QUFDQSxVQUFNQyxpRUFBZ0IsQ0FBQ0wsWUFBRCxFQUFlRSxhQUFmLENBQWhCLENBQ0xJLElBREssQ0FDQUosYUFBYSxJQUFJWixHQUFHLENBQUNpQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0QsWUFBTSxFQUFFLENBQVQ7QUFBWUUsVUFBSSxFQUFFO0FBQUNDLG9CQUFZLEVBQUVSO0FBQWY7QUFBbEIsS0FBckIsQ0FEakIsQ0FBTixDQUh3RCxDQUt4RDtBQUNELEdBTkssQ0FBTjtBQU9EIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3Jlc291cmNlL3VwbG9hZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgaW5pdE1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vLi4vbGliL2luaXRfbWlkZGxld2FyZSdcbmltcG9ydCBmb3JtaWRhYmxlIGZyb20gXCJmb3JtaWRhYmxlXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQge2NyZWF0ZVVwbG9hZEZpbGVOYW1lLCBzYXZlVXBsb2FkZWRGaWxlfSBmcm9tICcuLi8uLi8uLi9saWIvdXBsb2FkVXRpbCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgYXBpOiB7XG4gICAgICBib2R5UGFyc2VyOiBmYWxzZVxuICAgIH1cbn07XG5cbi8vIEluaXRpYWxpemUgdGhlIGNvcnMgbWlkZGxld2FyZVxuY29uc3QgY29ycyA9IGluaXRNaWRkbGV3YXJlKFxuICAvLyBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9jb3JzI2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xuICBDb3JzKHtcbiAgICAvLyBPbmx5IGFsbG93IHJlcXVlc3RzIHdpdGggR0VULCBQT1NUIGFuZCBPUFRJT05TXG4gICAgbWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdPUFRJT05TJ10sXG4gIH0pXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gUnVuIGNvcnNcbiAgYXdhaXQgY29ycyhyZXEsIHJlcylcblxuICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG5cbiAgY29uc3QgZm9ybSA9IG5ldyBmb3JtaWRhYmxlLkluY29taW5nRm9ybSgpO1xuICBhd2FpdCBmb3JtLnBhcnNlKHJlcSwgYXN5bmMgZnVuY3Rpb24gKGVyciwgZmllbGRzLCBmaWxlcykge1xuICAgIGNvbnN0IHVwbG9hZGVkRmlsZSA9IGZpbGVzLmZpbGU7XG4gICAgY29uc3Qgc2F2ZWRGaWxlTmFtZSA9IGNyZWF0ZVVwbG9hZEZpbGVOYW1lKHVwbG9hZGVkRmlsZS5uYW1lKTtcbiAgICBhd2FpdCBzYXZlVXBsb2FkZWRGaWxlKHVwbG9hZGVkRmlsZSwgc2F2ZWRGaWxlTmFtZSlcbiAgICAudGhlbihzYXZlZEZpbGVOYW1lID0+IHJlcy5zdGF0dXMoMjAxKS5qc29uKHtzdGF0dXM6IDAsIGRhdGE6IHtyZXNvdXJjZU5hbWU6IHNhdmVkRmlsZU5hbWV9fSkpXG4gICAgLy8gLmNhdGNoKGlvZSA9PiByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzOiAxLCBlcnJvcjoge21lc3NhZ2U6IFwic2F2ZSBmaWxlIGVycm9yXCJ9fSkpO1xuICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/resource/upload.js\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("formidable");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/resource/upload.js"));
module.exports = __webpack_exports__;

})();