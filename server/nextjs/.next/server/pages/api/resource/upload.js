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

/***/ "./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ initMiddleware; }\n/* harmony export */ });\n// Helper method to wait for a middleware to execute before continuing\n// And to throw an error when an error happens in a middleware\nfunction initMiddleware(middleware) {\n  return (req, res) => new Promise((resolve, reject) => {\n    middleware(req, res, result => {\n      if (result instanceof Error) {\n        return reject(result);\n      }\n\n      return resolve(result);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcz8wNDU3Il0sIm5hbWVzIjpbImluaXRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ2UsU0FBU0EsY0FBVCxDQUF3QkMsVUFBeEIsRUFBb0M7QUFDL0MsU0FBTyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FDTCxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQy9CTCxjQUFVLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFZSSxNQUFELElBQVk7QUFDL0IsVUFBSUEsTUFBTSxZQUFZQyxLQUF0QixFQUE2QjtBQUMzQixlQUFPRixNQUFNLENBQUNDLE1BQUQsQ0FBYjtBQUNEOztBQUNELGFBQU9GLE9BQU8sQ0FBQ0UsTUFBRCxDQUFkO0FBQ0QsS0FMUyxDQUFWO0FBTUQsR0FQRCxDQURGO0FBU0QiLCJmaWxlIjoiLi9saWIvaW5pdC1taWRkbGV3YXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xuLy8gQW5kIHRvIHRocm93IGFuIGVycm9yIHdoZW4gYW4gZXJyb3IgaGFwcGVucyBpbiBhIG1pZGRsZXdhcmVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpIHtcbiAgICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/init-middleware.js\n");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUploadFileName\": function() { return /* binding */ createUploadFileName; }\n/* harmony export */ });\nconst createUploadFileName = originalFileName => {\n  const timeSeriesValue = new Date().toISOString().replace(/[T:-]/g, '').replace(/\\.(\\d\\d).+/, '$1');\n  return `${timeSeriesValue}${originalFileName.slice(0, 5)}.tmp`;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vbGliL3V0aWwuanM/YTM1MSJdLCJuYW1lcyI6WyJjcmVhdGVVcGxvYWRGaWxlTmFtZSIsIm9yaWdpbmFsRmlsZU5hbWUiLCJ0aW1lU2VyaWVzVmFsdWUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJyZXBsYWNlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxvQkFBb0IsR0FBSUMsZ0JBQUQsSUFBc0I7QUFDdEQsUUFBTUMsZUFBZSxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxHQUF5QkMsT0FBekIsQ0FBaUMsUUFBakMsRUFBMkMsRUFBM0MsRUFBK0NBLE9BQS9DLENBQXVELFlBQXZELEVBQXFFLElBQXJFLENBQXhCO0FBQ0EsU0FBUSxHQUFFSCxlQUFnQixHQUFFRCxnQkFBZ0IsQ0FBQ0ssS0FBakIsQ0FBdUIsQ0FBdkIsRUFBeUIsQ0FBekIsQ0FBNEIsTUFBeEQ7QUFDSCxDQUhNIiwiZmlsZSI6Ii4vbGliL3V0aWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY3JlYXRlVXBsb2FkRmlsZU5hbWUgPSAob3JpZ2luYWxGaWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHRpbWVTZXJpZXNWYWx1ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9bVDotXS9nLCAnJykucmVwbGFjZSgvXFwuKFxcZFxcZCkuKy8sICckMScpO1xuICAgIHJldHVybiBgJHt0aW1lU2VyaWVzVmFsdWV9JHtvcmlnaW5hbEZpbGVOYW1lLnNsaWNlKDAsNSl9LnRtcGA7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/util.js\n");

/***/ }),

/***/ "./pages/api/resource/upload.js":
/*!**************************************!*\
  !*** ./pages/api/resource/upload.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; },\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/init-middleware */ \"./lib/init-middleware.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/util */ \"./lib/util.js\");\n\n\n\n\n\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n\nconst saveFile = async file => {\n  const data = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(file.path);\n  const savedFileName = (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__.createUploadFileName)(file.name);\n  const uploadFullPath = `./upload/${savedFileName}`;\n  fs__WEBPACK_IMPORTED_MODULE_3___default().writeFileSync(uploadFullPath, data);\n  await fs__WEBPACK_IMPORTED_MODULE_3___default().unlinkSync(file.path);\n  return savedFileName;\n}; // Initialize the cors middleware\n\n\nconst cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__.default)( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options\ncors__WEBPACK_IMPORTED_MODULE_0___default()({\n  // Only allow requests with GET, POST and OPTIONS\n  methods: ['GET', 'POST', 'OPTIONS']\n}));\nasync function handler(req, res) {\n  // Run cors\n  await cors(req, res);\n  console.log(req.body);\n  const form = new (formidable__WEBPACK_IMPORTED_MODULE_2___default().IncomingForm)();\n  await form.parse(req, async function (err, fields, files) {\n    await saveFile(files.file).then(savedFileName => res.status(201).json({\n      status: 0,\n      data: {\n        resourceName: savedFileName\n      }\n    })).catch(ioe => res.status(500).json({\n      status: 1,\n      error: {\n        message: \"save file error\"\n      }\n    }));\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvYXBpL3Jlc291cmNlL3VwbG9hZC5qcz9hMjRlIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJzYXZlRmlsZSIsImZpbGUiLCJkYXRhIiwiZnMiLCJwYXRoIiwic2F2ZWRGaWxlTmFtZSIsImNyZWF0ZVVwbG9hZEZpbGVOYW1lIiwibmFtZSIsInVwbG9hZEZ1bGxQYXRoIiwiY29ycyIsImluaXRNaWRkbGV3YXJlIiwiQ29ycyIsIm1ldGhvZHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJmb3JtIiwiZm9ybWlkYWJsZSIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJ0aGVuIiwic3RhdHVzIiwianNvbiIsInJlc291cmNlTmFtZSIsImNhdGNoIiwiaW9lIiwiZXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLE1BQU0sR0FBRztBQUNsQkMsS0FBRyxFQUFFO0FBQ0hDLGNBQVUsRUFBRTtBQURUO0FBRGEsQ0FBZjs7QUFNUCxNQUFNQyxRQUFRLEdBQUcsTUFBT0MsSUFBUCxJQUFnQjtBQUM3QixRQUFNQyxJQUFJLEdBQUdDLHNEQUFBLENBQWdCRixJQUFJLENBQUNHLElBQXJCLENBQWI7QUFDQSxRQUFNQyxhQUFhLEdBQUdDLCtEQUFvQixDQUFDTCxJQUFJLENBQUNNLElBQU4sQ0FBMUM7QUFDQSxRQUFNQyxjQUFjLEdBQUksWUFBV0gsYUFBYyxFQUFqRDtBQUNBRix5REFBQSxDQUFpQkssY0FBakIsRUFBaUNOLElBQWpDO0FBQ0EsUUFBTUMsb0RBQUEsQ0FBY0YsSUFBSSxDQUFDRyxJQUFuQixDQUFOO0FBQ0EsU0FBT0MsYUFBUDtBQUNILENBUEQsQyxDQVNBOzs7QUFDQSxNQUFNSSxJQUFJLEdBQUdDLDZEQUFjLEVBQ3pCO0FBQ0FDLDJDQUFJLENBQUM7QUFDSDtBQUNBQyxTQUFPLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixTQUFoQjtBQUZOLENBQUQsQ0FGcUIsQ0FBM0I7QUFRZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUM7QUFDQSxRQUFNTixJQUFJLENBQUNLLEdBQUQsRUFBTUMsR0FBTixDQUFWO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNJLElBQWhCO0FBRUEsUUFBTUMsSUFBSSxHQUFHLElBQUlDLGdFQUFKLEVBQWI7QUFDQSxRQUFNRCxJQUFJLENBQUNFLEtBQUwsQ0FBV1AsR0FBWCxFQUFnQixnQkFBZ0JRLEdBQWhCLEVBQXFCQyxNQUFyQixFQUE2QkMsS0FBN0IsRUFBb0M7QUFDeEQsVUFBTXhCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3ZCLElBQVAsQ0FBUixDQUNMd0IsSUFESyxDQUNBcEIsYUFBYSxJQUFJVSxHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDRCxZQUFNLEVBQUUsQ0FBVDtBQUFZeEIsVUFBSSxFQUFFO0FBQUMwQixvQkFBWSxFQUFFdkI7QUFBZjtBQUFsQixLQUFyQixDQURqQixFQUVMd0IsS0FGSyxDQUVDQyxHQUFHLElBQUlmLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNELFlBQU0sRUFBRSxDQUFUO0FBQVlLLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUU7QUFBVjtBQUFuQixLQUFyQixDQUZSLENBQU47QUFHRCxHQUpLLENBQU47QUFLRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9yZXNvdXJjZS91cGxvYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IGluaXRNaWRkbGV3YXJlIGZyb20gJy4uLy4uLy4uL2xpYi9pbml0LW1pZGRsZXdhcmUnXG5pbXBvcnQgZm9ybWlkYWJsZSBmcm9tIFwiZm9ybWlkYWJsZVwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHtjcmVhdGVVcGxvYWRGaWxlTmFtZX0gZnJvbSAnLi4vLi4vLi4vbGliL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaToge1xuICAgICAgYm9keVBhcnNlcjogZmFsc2VcbiAgICB9XG59O1xuXG5jb25zdCBzYXZlRmlsZSA9IGFzeW5jIChmaWxlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlLnBhdGgpO1xuICAgIGNvbnN0IHNhdmVkRmlsZU5hbWUgPSBjcmVhdGVVcGxvYWRGaWxlTmFtZShmaWxlLm5hbWUpO1xuICAgIGNvbnN0IHVwbG9hZEZ1bGxQYXRoID0gYC4vdXBsb2FkLyR7c2F2ZWRGaWxlTmFtZX1gO1xuICAgIGZzLndyaXRlRmlsZVN5bmModXBsb2FkRnVsbFBhdGgsIGRhdGEpO1xuICAgIGF3YWl0IGZzLnVubGlua1N5bmMoZmlsZS5wYXRoKTtcbiAgICByZXR1cm4gc2F2ZWRGaWxlTmFtZTtcbn07XG5cbi8vIEluaXRpYWxpemUgdGhlIGNvcnMgbWlkZGxld2FyZVxuY29uc3QgY29ycyA9IGluaXRNaWRkbGV3YXJlKFxuICAvLyBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9jb3JzI2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xuICBDb3JzKHtcbiAgICAvLyBPbmx5IGFsbG93IHJlcXVlc3RzIHdpdGggR0VULCBQT1NUIGFuZCBPUFRJT05TXG4gICAgbWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdPUFRJT05TJ10sXG4gIH0pXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gUnVuIGNvcnNcbiAgYXdhaXQgY29ycyhyZXEsIHJlcylcblxuICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG5cbiAgY29uc3QgZm9ybSA9IG5ldyBmb3JtaWRhYmxlLkluY29taW5nRm9ybSgpO1xuICBhd2FpdCBmb3JtLnBhcnNlKHJlcSwgYXN5bmMgZnVuY3Rpb24gKGVyciwgZmllbGRzLCBmaWxlcykge1xuICAgIGF3YWl0IHNhdmVGaWxlKGZpbGVzLmZpbGUpXG4gICAgLnRoZW4oc2F2ZWRGaWxlTmFtZSA9PiByZXMuc3RhdHVzKDIwMSkuanNvbih7c3RhdHVzOiAwLCBkYXRhOiB7cmVzb3VyY2VOYW1lOiBzYXZlZEZpbGVOYW1lfX0pKVxuICAgIC5jYXRjaChpb2UgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oe3N0YXR1czogMSwgZXJyb3I6IHttZXNzYWdlOiBcInNhdmUgZmlsZSBlcnJvclwifX0pKTtcbiAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/resource/upload.js\n");

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