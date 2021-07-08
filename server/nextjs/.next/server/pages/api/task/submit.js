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
exports.id = "pages/api/task/submit";
exports.ids = ["pages/api/task/submit"];
exports.modules = {

/***/ "./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ initMiddleware; }\n/* harmony export */ });\n// Helper method to wait for a middleware to execute before continuing\n// And to throw an error when an error happens in a middleware\nfunction initMiddleware(middleware) {\n  return (req, res) => new Promise((resolve, reject) => {\n    middleware(req, res, result => {\n      if (result instanceof Error) {\n        return reject(result);\n      }\n\n      return resolve(result);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcz8wNDU3Il0sIm5hbWVzIjpbImluaXRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ2UsU0FBU0EsY0FBVCxDQUF3QkMsVUFBeEIsRUFBb0M7QUFDL0MsU0FBTyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FDTCxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQy9CTCxjQUFVLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFZSSxNQUFELElBQVk7QUFDL0IsVUFBSUEsTUFBTSxZQUFZQyxLQUF0QixFQUE2QjtBQUMzQixlQUFPRixNQUFNLENBQUNDLE1BQUQsQ0FBYjtBQUNEOztBQUNELGFBQU9GLE9BQU8sQ0FBQ0UsTUFBRCxDQUFkO0FBQ0QsS0FMUyxDQUFWO0FBTUQsR0FQRCxDQURGO0FBU0QiLCJmaWxlIjoiLi9saWIvaW5pdC1taWRkbGV3YXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xuLy8gQW5kIHRvIHRocm93IGFuIGVycm9yIHdoZW4gYW4gZXJyb3IgaGFwcGVucyBpbiBhIG1pZGRsZXdhcmVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpIHtcbiAgICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/init-middleware.js\n");

/***/ }),

/***/ "./pages/api/task/submit.js":
/*!**********************************!*\
  !*** ./pages/api/task/submit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/init-middleware */ \"./lib/init-middleware.js\");\n/* harmony import */ var _service_TaskRunner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/TaskRunner */ \"./service/TaskRunner.js\");\n\n\n\nconst cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__.default)(cors__WEBPACK_IMPORTED_MODULE_0___default()({\n  methods: ['GET', 'POST', 'OPTIONS']\n}));\nasync function handler(req, res) {\n  await cors(req, res);\n  const {\n    nodeTree,\n    buildProfile\n  } = req.body;\n  const taskRunner = new _service_TaskRunner__WEBPACK_IMPORTED_MODULE_2__.default(nodeTree, buildProfile);\n  const analysisDiagram = await taskRunner.run();\n  res.status(200).json({\n    data: {\n      diagram: analysisDiagram\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvYXBpL3Rhc2svc3VibWl0LmpzPzEyMWMiXSwibmFtZXMiOlsiY29ycyIsImluaXRNaWRkbGV3YXJlIiwiQ29ycyIsIm1ldGhvZHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibm9kZVRyZWUiLCJidWlsZFByb2ZpbGUiLCJib2R5IiwidGFza1J1bm5lciIsIlRhc2tSdW5uZXIiLCJhbmFseXNpc0RpYWdyYW0iLCJydW4iLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImRpYWdyYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHQyw2REFBYyxDQUN6QkMsMkNBQUksQ0FBQztBQUNIQyxTQUFPLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixTQUFoQjtBQUROLENBQUQsQ0FEcUIsQ0FBM0I7QUFNZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsUUFBTU4sSUFBSSxDQUFDSyxHQUFELEVBQU1DLEdBQU4sQ0FBVjtBQUVBLFFBQU07QUFBQ0MsWUFBRDtBQUFXQztBQUFYLE1BQTJCSCxHQUFHLENBQUNJLElBQXJDO0FBRUEsUUFBTUMsVUFBVSxHQUFHLElBQUlDLHdEQUFKLENBQWVKLFFBQWYsRUFBeUJDLFlBQXpCLENBQW5CO0FBQ0EsUUFBTUksZUFBZSxHQUFHLE1BQU1GLFVBQVUsQ0FBQ0csR0FBWCxFQUE5QjtBQUNBUCxLQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxRQUFJLEVBQUU7QUFBRUMsYUFBTyxFQUFFTDtBQUFYO0FBQVAsR0FBckI7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS90YXNrL3N1Ym1pdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgaW5pdE1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vLi4vbGliL2luaXQtbWlkZGxld2FyZSdcbmltcG9ydCBUYXNrUnVubmVyIGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvVGFza1J1bm5lcic7XG5cbmNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShcbiAgQ29ycyh7XG4gICAgbWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdPUFRJT05TJ10sXG4gIH0pXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgYXdhaXQgY29ycyhyZXEsIHJlcylcblxuICBjb25zdCB7bm9kZVRyZWUsIGJ1aWxkUHJvZmlsZX0gPSByZXEuYm9keTtcblxuICBjb25zdCB0YXNrUnVubmVyID0gbmV3IFRhc2tSdW5uZXIobm9kZVRyZWUsIGJ1aWxkUHJvZmlsZSk7XG4gIGNvbnN0IGFuYWx5c2lzRGlhZ3JhbSA9IGF3YWl0IHRhc2tSdW5uZXIucnVuKCk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtkYXRhOiB7IGRpYWdyYW06IGFuYWx5c2lzRGlhZ3JhbSB9fSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/task/submit.js\n");

/***/ }),

/***/ "./service/FlowMixer.js":
/*!******************************!*\
  !*** ./service/FlowMixer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Promise = __webpack_require__(/*! es6-promise */ \"es6-promise\").Promise;\n\nclass FlowMixer {\n  constructor(_nodeTree, _buildProfile) {\n    this.nodeTree = _nodeTree;\n    this.buildProfile = _buildProfile;\n  }\n\n  async mergedMultiFlow(flowList) {\n    const flowValueList = await Promise.all(flowList); // assume text line format\n\n    const concatedFile = flowValueList.reduce((a, c) => a.concat(c), \"\");\n    return concatedFile;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlowMixer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc2VydmljZS9GbG93TWl4ZXIuanM/NzFiZiJdLCJuYW1lcyI6WyJQcm9taXNlIiwicmVxdWlyZSIsIkZsb3dNaXhlciIsImNvbnN0cnVjdG9yIiwiX25vZGVUcmVlIiwiX2J1aWxkUHJvZmlsZSIsIm5vZGVUcmVlIiwiYnVpbGRQcm9maWxlIiwibWVyZ2VkTXVsdGlGbG93IiwiZmxvd0xpc3QiLCJmbG93VmFsdWVMaXN0IiwiYWxsIiwiY29uY2F0ZWRGaWxlIiwicmVkdWNlIiwiYSIsImMiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLDZEQUFkOztBQUVBLE1BQU1DLFNBQU4sQ0FBZ0I7QUFDWkMsYUFBVyxDQUFDQyxTQUFELEVBQVlDLGFBQVosRUFBMkI7QUFDbEMsU0FBS0MsUUFBTCxHQUFnQkYsU0FBaEI7QUFDQSxTQUFLRyxZQUFMLEdBQW9CRixhQUFwQjtBQUNIOztBQUNELFFBQU1HLGVBQU4sQ0FBc0JDLFFBQXRCLEVBQWdDO0FBQzVCLFVBQU1DLGFBQWEsR0FBRyxNQUFNVixPQUFPLENBQUNXLEdBQVIsQ0FBWUYsUUFBWixDQUE1QixDQUQ0QixDQUU1Qjs7QUFDQSxVQUFNRyxZQUFZLEdBQUdGLGFBQWEsQ0FBQ0csTUFBZCxDQUFxQixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNELENBQVQsQ0FBL0IsRUFBNEMsRUFBNUMsQ0FBckI7QUFDQSxXQUFPSCxZQUFQO0FBQ0g7O0FBVlc7O0FBYWhCLCtEQUFlVixTQUFmIiwiZmlsZSI6Ii4vc2VydmljZS9GbG93TWl4ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxuY2xhc3MgRmxvd01peGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfbm9kZVRyZWUsIF9idWlsZFByb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5ub2RlVHJlZSA9IF9ub2RlVHJlZTtcbiAgICAgICAgdGhpcy5idWlsZFByb2ZpbGUgPSBfYnVpbGRQcm9maWxlO1xuICAgIH1cbiAgICBhc3luYyBtZXJnZWRNdWx0aUZsb3coZmxvd0xpc3QpIHtcbiAgICAgICAgY29uc3QgZmxvd1ZhbHVlTGlzdCA9IGF3YWl0IFByb21pc2UuYWxsKGZsb3dMaXN0KTtcbiAgICAgICAgLy8gYXNzdW1lIHRleHQgbGluZSBmb3JtYXRcbiAgICAgICAgY29uc3QgY29uY2F0ZWRGaWxlID0gZmxvd1ZhbHVlTGlzdC5yZWR1Y2UoKGEsIGMpID0+IGEuY29uY2F0KGMpLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIGNvbmNhdGVkRmlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3dNaXhlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./service/FlowMixer.js\n");

/***/ }),

/***/ "./service/PipelineWorker.js":
/*!***********************************!*\
  !*** ./service/PipelineWorker.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst {\n  once\n} = __webpack_require__(/*! events */ \"events\");\n\nconst {\n  createInterface\n} = __webpack_require__(/*! readline */ \"readline\");\n\nclass PipelineWorker {\n  constructor(_nodeTree, _buildProfile) {\n    this.nodeTree = _nodeTree;\n    this.buildProfile = _buildProfile;\n  }\n\n  async applyPluginPipeline(resource, checkedPlugin) {\n    // checkedPlugin shoud be a list of object with user option parameters\n    const ordinaryPluginList = checkedPlugin.sort(); // make compose plugin chain\n\n    const composedPlugin = v => {\n      return v.slice(0, 100);\n    };\n\n    const result = [];\n    await async function (fn) {\n      try {\n        const rl = createInterface({\n          input: resource,\n          crlfDelay: Infinity\n        });\n        rl.on('line', line => {\n          const tmp = composedPlugin(line);\n          result.push(tmp);\n        });\n        await once(rl, 'close');\n        console.log('finished');\n      } catch (err) {\n        console.error(err);\n      }\n    }(composedPlugin);\n    return result;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PipelineWorker);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc2VydmljZS9QaXBlbGluZVdvcmtlci5qcz9lNDAwIl0sIm5hbWVzIjpbIm9uY2UiLCJyZXF1aXJlIiwiY3JlYXRlSW50ZXJmYWNlIiwiUGlwZWxpbmVXb3JrZXIiLCJjb25zdHJ1Y3RvciIsIl9ub2RlVHJlZSIsIl9idWlsZFByb2ZpbGUiLCJub2RlVHJlZSIsImJ1aWxkUHJvZmlsZSIsImFwcGx5UGx1Z2luUGlwZWxpbmUiLCJyZXNvdXJjZSIsImNoZWNrZWRQbHVnaW4iLCJvcmRpbmFyeVBsdWdpbkxpc3QiLCJzb3J0IiwiY29tcG9zZWRQbHVnaW4iLCJ2Iiwic2xpY2UiLCJyZXN1bHQiLCJmbiIsInJsIiwiaW5wdXQiLCJjcmxmRGVsYXkiLCJJbmZpbml0eSIsIm9uIiwibGluZSIsInRtcCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQUVBO0FBQUYsSUFBV0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUF4Qjs7QUFDQSxNQUFNO0FBQUVDO0FBQUYsSUFBc0JELG1CQUFPLENBQUMsMEJBQUQsQ0FBbkM7O0FBRUEsTUFBTUUsY0FBTixDQUFxQjtBQUNqQkMsYUFBVyxDQUFDQyxTQUFELEVBQVlDLGFBQVosRUFBMkI7QUFDbEMsU0FBS0MsUUFBTCxHQUFnQkYsU0FBaEI7QUFDQSxTQUFLRyxZQUFMLEdBQW9CRixhQUFwQjtBQUNIOztBQUNELFFBQU1HLG1CQUFOLENBQTBCQyxRQUExQixFQUFvQ0MsYUFBcEMsRUFBbUQ7QUFDL0M7QUFFQSxVQUFNQyxrQkFBa0IsR0FBR0QsYUFBYSxDQUFDRSxJQUFkLEVBQTNCLENBSCtDLENBSS9DOztBQUNBLFVBQU1DLGNBQWMsR0FBSUMsQ0FBRCxJQUFPO0FBQUMsYUFBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVEsQ0FBUixFQUFXLEdBQVgsQ0FBUDtBQUF1QixLQUF0RDs7QUFDQSxVQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBLFVBQU8sZ0JBQWVDLEVBQWYsRUFBbUI7QUFDdEIsVUFBSTtBQUNBLGNBQU1DLEVBQUUsR0FBR2pCLGVBQWUsQ0FBQztBQUN2QmtCLGVBQUssRUFBRVYsUUFEZ0I7QUFFdkJXLG1CQUFTLEVBQUVDO0FBRlksU0FBRCxDQUExQjtBQUtBSCxVQUFFLENBQUNJLEVBQUgsQ0FBTSxNQUFOLEVBQWVDLElBQUQsSUFBVTtBQUNwQixnQkFBTUMsR0FBRyxHQUFHWCxjQUFjLENBQUNVLElBQUQsQ0FBMUI7QUFDQVAsZ0JBQU0sQ0FBQ1MsSUFBUCxDQUFZRCxHQUFaO0FBQ0gsU0FIRDtBQUtBLGNBQU16QixJQUFJLENBQUNtQixFQUFELEVBQUssT0FBTCxDQUFWO0FBRUFRLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDSCxPQWRELENBY0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1ZGLGVBQU8sQ0FBQ0csS0FBUixDQUFjRCxHQUFkO0FBQ0g7QUFDSixLQWxCSyxDQWtCSGYsY0FsQkcsQ0FBTjtBQW1CQSxXQUFPRyxNQUFQO0FBQ0g7O0FBaENnQjs7QUFtQ3JCLCtEQUFlZCxjQUFmIiwiZmlsZSI6Ii4vc2VydmljZS9QaXBlbGluZVdvcmtlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgb25jZSB9ID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jb25zdCB7IGNyZWF0ZUludGVyZmFjZSB9ID0gcmVxdWlyZSgncmVhZGxpbmUnKTtcblxuY2xhc3MgUGlwZWxpbmVXb3JrZXIge1xuICAgIGNvbnN0cnVjdG9yKF9ub2RlVHJlZSwgX2J1aWxkUHJvZmlsZSkge1xuICAgICAgICB0aGlzLm5vZGVUcmVlID0gX25vZGVUcmVlO1xuICAgICAgICB0aGlzLmJ1aWxkUHJvZmlsZSA9IF9idWlsZFByb2ZpbGU7XG4gICAgfVxuICAgIGFzeW5jIGFwcGx5UGx1Z2luUGlwZWxpbmUocmVzb3VyY2UsIGNoZWNrZWRQbHVnaW4pIHtcbiAgICAgICAgLy8gY2hlY2tlZFBsdWdpbiBzaG91ZCBiZSBhIGxpc3Qgb2Ygb2JqZWN0IHdpdGggdXNlciBvcHRpb24gcGFyYW1ldGVyc1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgb3JkaW5hcnlQbHVnaW5MaXN0ID0gY2hlY2tlZFBsdWdpbi5zb3J0KCk7XG4gICAgICAgIC8vIG1ha2UgY29tcG9zZSBwbHVnaW4gY2hhaW5cbiAgICAgICAgY29uc3QgY29tcG9zZWRQbHVnaW4gPSAodikgPT4ge3JldHVybiB2LnNsaWNlKDAsIDEwMCl9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgYXdhaXQgKGFzeW5jIGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJsID0gY3JlYXRlSW50ZXJmYWNlKHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHJlc291cmNlLFxuICAgICAgICAgICAgICAgICAgICBjcmxmRGVsYXk6IEluZmluaXR5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgcmwub24oJ2xpbmUnLCAobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBjb21wb3NlZFBsdWdpbihsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godG1wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICBhd2FpdCBvbmNlKHJsLCAnY2xvc2UnKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmluaXNoZWQnKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoY29tcG9zZWRQbHVnaW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGlwZWxpbmVXb3JrZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./service/PipelineWorker.js\n");

/***/ }),

/***/ "./service/ResourceManager.js":
/*!************************************!*\
  !*** ./service/ResourceManager.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst {\n  readFile,\n  createReadStream\n} = __webpack_require__(/*! fs */ \"fs\");\n\nvar Promise = __webpack_require__(/*! es6-promise */ \"es6-promise\").Promise;\n\nclass ResourceManager {\n  constructor(_nodeTree, _buildProfile) {\n    this.nodeTree = _nodeTree;\n    this.buildProfile = _buildProfile;\n  }\n\n  async getResource(resourceName) {\n    // use sync read\n    const fileContent = await new Promise(function (resolve, reject) {\n      readFile(`./upload/${resourceName}`, 'utf8', result => {\n        resolve(result);\n      });\n    });\n    return fileContent;\n  }\n\n  async getReadStream(resourceName) {\n    const fileName = `./upload/${resourceName}`;\n    const fileStream = createReadStream(fileName);\n    return fileStream;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResourceManager);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc2VydmljZS9SZXNvdXJjZU1hbmFnZXIuanM/YzM0YiJdLCJuYW1lcyI6WyJyZWFkRmlsZSIsImNyZWF0ZVJlYWRTdHJlYW0iLCJyZXF1aXJlIiwiUHJvbWlzZSIsIlJlc291cmNlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwiX25vZGVUcmVlIiwiX2J1aWxkUHJvZmlsZSIsIm5vZGVUcmVlIiwiYnVpbGRQcm9maWxlIiwiZ2V0UmVzb3VyY2UiLCJyZXNvdXJjZU5hbWUiLCJmaWxlQ29udGVudCIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJnZXRSZWFkU3RyZWFtIiwiZmlsZU5hbWUiLCJmaWxlU3RyZWFtIl0sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTTtBQUFFQSxVQUFGO0FBQVlDO0FBQVosSUFBaUNDLG1CQUFPLENBQUMsY0FBRCxDQUE5Qzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELDZEQUFkOztBQUVBLE1BQU1FLGVBQU4sQ0FBc0I7QUFDbEJDLGFBQVcsQ0FBQ0MsU0FBRCxFQUFZQyxhQUFaLEVBQTJCO0FBQ2xDLFNBQUtDLFFBQUwsR0FBZ0JGLFNBQWhCO0FBQ0EsU0FBS0csWUFBTCxHQUFvQkYsYUFBcEI7QUFDSDs7QUFDRCxRQUFNRyxXQUFOLENBQWtCQyxZQUFsQixFQUFnQztBQUM1QjtBQUNBLFVBQU1DLFdBQVcsR0FBRyxNQUFNLElBQUlULE9BQUosQ0FDMUIsVUFBU1UsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDdEJkLGNBQVEsQ0FBRSxZQUFXVyxZQUFhLEVBQTFCLEVBQTZCLE1BQTdCLEVBQXNDSSxNQUFELElBQVU7QUFDbkRGLGVBQU8sQ0FBQ0UsTUFBRCxDQUFQO0FBQ0gsT0FGTyxDQUFSO0FBR0gsS0FMeUIsQ0FBMUI7QUFNQSxXQUFPSCxXQUFQO0FBQ0g7O0FBQ0QsUUFBTUksYUFBTixDQUFvQkwsWUFBcEIsRUFBa0M7QUFDOUIsVUFBTU0sUUFBUSxHQUFJLFlBQVdOLFlBQWEsRUFBMUM7QUFDQSxVQUFNTyxVQUFVLEdBQUdqQixnQkFBZ0IsQ0FBQ2dCLFFBQUQsQ0FBbkM7QUFDQSxXQUFPQyxVQUFQO0FBQ0g7O0FBbkJpQjs7QUFzQnRCLCtEQUFlZCxlQUFmIiwiZmlsZSI6Ii4vc2VydmljZS9SZXNvdXJjZU1hbmFnZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHJlYWRGaWxlLCBjcmVhdGVSZWFkU3RyZWFtIH0gPSByZXF1aXJlKCdmcycpO1xudmFyIFByb21pc2UgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbmNsYXNzIFJlc291cmNlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoX25vZGVUcmVlLCBfYnVpbGRQcm9maWxlKSB7XG4gICAgICAgIHRoaXMubm9kZVRyZWUgPSBfbm9kZVRyZWU7XG4gICAgICAgIHRoaXMuYnVpbGRQcm9maWxlID0gX2J1aWxkUHJvZmlsZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0UmVzb3VyY2UocmVzb3VyY2VOYW1lKSB7XG4gICAgICAgIC8vIHVzZSBzeW5jIHJlYWRcbiAgICAgICAgY29uc3QgZmlsZUNvbnRlbnQgPSBhd2FpdCBuZXcgUHJvbWlzZShcbiAgICAgICAgZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZWFkRmlsZShgLi91cGxvYWQvJHtyZXNvdXJjZU5hbWV9YCwgJ3V0ZjgnLCAocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmlsZUNvbnRlbnQ7XG4gICAgfVxuICAgIGFzeW5jIGdldFJlYWRTdHJlYW0ocmVzb3VyY2VOYW1lKSB7XG4gICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYC4vdXBsb2FkLyR7cmVzb3VyY2VOYW1lfWA7XG4gICAgICAgIGNvbnN0IGZpbGVTdHJlYW0gPSBjcmVhdGVSZWFkU3RyZWFtKGZpbGVOYW1lKTtcbiAgICAgICAgcmV0dXJuIGZpbGVTdHJlYW07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZU1hbmFnZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./service/ResourceManager.js\n");

/***/ }),

/***/ "./service/TaskRunner.js":
/*!*******************************!*\
  !*** ./service/TaskRunner.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FlowMixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlowMixer */ \"./service/FlowMixer.js\");\n/* harmony import */ var _PipelineWorker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PipelineWorker */ \"./service/PipelineWorker.js\");\n/* harmony import */ var _ResourceManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourceManager */ \"./service/ResourceManager.js\");\n\n\n\n\nclass TaskRunner {\n  constructor(_nodeTree, _buildProfile) {\n    this.nodeTree = _nodeTree;\n    this.buildProfile = _buildProfile;\n    this.flowMixer = new _FlowMixer__WEBPACK_IMPORTED_MODULE_0__.default(_nodeTree, _buildProfile);\n    this.pipelineWorker = new _PipelineWorker__WEBPACK_IMPORTED_MODULE_1__.default(_nodeTree, _buildProfile);\n    this.resourceManager = new _ResourceManager__WEBPACK_IMPORTED_MODULE_2__.default(_nodeTree, _buildProfile);\n  }\n\n  async createResourceFlow(nodeInfo) {\n    const {\n      id,\n      labelText,\n      resourceName,\n      nodeType,\n      nodeDetailType,\n      checkedPlugin,\n      children\n    } = nodeInfo; // check if this is a mix node\n\n    if (children && children.length > 0) {\n      // concat every node info\n      const compareGroup = [];\n\n      for (let subNode of children) {\n        compareGroup.push(await this.createResourceFlow(subNode));\n      } // const mergedResourceFlow = await this.flowMixer.mergedMultiFlow(compareGroup);\n\n\n      return {\n        id,\n        labelText,\n        compareGroup\n      };\n    }\n\n    let result = {};\n\n    if (resourceName) {\n      // read resource\n      const resource = await this.resourceManager.getReadStream(resourceName); // apply plugin according to user selected\n\n      const applyedPluginResource = await this.pipelineWorker.applyPluginPipeline(resource, checkedPlugin);\n      result = {\n        fragments: applyedPluginResource,\n        id,\n        labelText\n      };\n    } else {\n      result = {\n        id,\n        labelText\n      };\n    }\n\n    return result;\n  }\n\n  async run() {\n    const result = await this.createResourceFlow(this.nodeTree);\n    console.log(typeof result);\n    return result;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskRunner);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc2VydmljZS9UYXNrUnVubmVyLmpzPzg3YjAiXSwibmFtZXMiOlsiVGFza1J1bm5lciIsImNvbnN0cnVjdG9yIiwiX25vZGVUcmVlIiwiX2J1aWxkUHJvZmlsZSIsIm5vZGVUcmVlIiwiYnVpbGRQcm9maWxlIiwiZmxvd01peGVyIiwiRmxvd01peGVyIiwicGlwZWxpbmVXb3JrZXIiLCJQaXBlbGluZVdvcmtlciIsInJlc291cmNlTWFuYWdlciIsIlJlc291cmNlTWFuYWdlciIsImNyZWF0ZVJlc291cmNlRmxvdyIsIm5vZGVJbmZvIiwiaWQiLCJsYWJlbFRleHQiLCJyZXNvdXJjZU5hbWUiLCJub2RlVHlwZSIsIm5vZGVEZXRhaWxUeXBlIiwiY2hlY2tlZFBsdWdpbiIsImNoaWxkcmVuIiwibGVuZ3RoIiwiY29tcGFyZUdyb3VwIiwic3ViTm9kZSIsInB1c2giLCJyZXN1bHQiLCJyZXNvdXJjZSIsImdldFJlYWRTdHJlYW0iLCJhcHBseWVkUGx1Z2luUmVzb3VyY2UiLCJhcHBseVBsdWdpblBpcGVsaW5lIiwiZnJhZ21lbnRzIiwicnVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFOLENBQWlCO0FBQ2JDLGFBQVcsQ0FBQ0MsU0FBRCxFQUFZQyxhQUFaLEVBQTJCO0FBQ2xDLFNBQUtDLFFBQUwsR0FBZ0JGLFNBQWhCO0FBQ0EsU0FBS0csWUFBTCxHQUFvQkYsYUFBcEI7QUFDQSxTQUFLRyxTQUFMLEdBQWlCLElBQUlDLCtDQUFKLENBQWNMLFNBQWQsRUFBeUJDLGFBQXpCLENBQWpCO0FBQ0EsU0FBS0ssY0FBTCxHQUFzQixJQUFJQyxvREFBSixDQUFtQlAsU0FBbkIsRUFBOEJDLGFBQTlCLENBQXRCO0FBQ0EsU0FBS08sZUFBTCxHQUF1QixJQUFJQyxxREFBSixDQUFvQlQsU0FBcEIsRUFBK0JDLGFBQS9CLENBQXZCO0FBQ0g7O0FBRUQsUUFBTVMsa0JBQU4sQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQy9CLFVBQU07QUFBQ0MsUUFBRDtBQUFLQyxlQUFMO0FBQWdCQyxrQkFBaEI7QUFBOEJDLGNBQTlCO0FBQXdDQyxvQkFBeEM7QUFBd0RDLG1CQUF4RDtBQUF1RUM7QUFBdkUsUUFBbUZQLFFBQXpGLENBRCtCLENBRS9COztBQUNBLFFBQUlPLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCLENBQWxDLEVBQXFDO0FBQ2pDO0FBQ0EsWUFBTUMsWUFBWSxHQUFHLEVBQXJCOztBQUNBLFdBQUssSUFBSUMsT0FBVCxJQUFvQkgsUUFBcEIsRUFBOEI7QUFDMUJFLG9CQUFZLENBQUNFLElBQWIsQ0FBa0IsTUFBTSxLQUFLWixrQkFBTCxDQUF3QlcsT0FBeEIsQ0FBeEI7QUFDSCxPQUxnQyxDQU1qQzs7O0FBQ0EsYUFBTztBQUFDVCxVQUFEO0FBQUtDLGlCQUFMO0FBQWdCTztBQUFoQixPQUFQO0FBQ0g7O0FBQ0QsUUFBSUcsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsUUFBSVQsWUFBSixFQUFrQjtBQUNkO0FBQ0EsWUFBTVUsUUFBUSxHQUFHLE1BQU0sS0FBS2hCLGVBQUwsQ0FBcUJpQixhQUFyQixDQUFtQ1gsWUFBbkMsQ0FBdkIsQ0FGYyxDQUlkOztBQUNBLFlBQU1ZLHFCQUFxQixHQUFHLE1BQU0sS0FBS3BCLGNBQUwsQ0FBb0JxQixtQkFBcEIsQ0FBd0NILFFBQXhDLEVBQWtEUCxhQUFsRCxDQUFwQztBQUNBTSxZQUFNLEdBQUk7QUFBQ0ssaUJBQVMsRUFBRUYscUJBQVo7QUFBbUNkLFVBQW5DO0FBQXVDQztBQUF2QyxPQUFWO0FBQ0gsS0FQRCxNQU9PO0FBQ0hVLFlBQU0sR0FBSTtBQUFDWCxVQUFEO0FBQUtDO0FBQUwsT0FBVjtBQUNIOztBQUNELFdBQU9VLE1BQVA7QUFDSDs7QUFFRCxRQUFNTSxHQUFOLEdBQVk7QUFDUixVQUFNTixNQUFNLEdBQUcsTUFBTSxLQUFLYixrQkFBTCxDQUF3QixLQUFLUixRQUE3QixDQUFyQjtBQUNBNEIsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBT1IsTUFBbkI7QUFDQSxXQUFPQSxNQUFQO0FBQ0g7O0FBdkNZOztBQTBDakIsK0RBQWV6QixVQUFmIiwiZmlsZSI6Ii4vc2VydmljZS9UYXNrUnVubmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZsb3dNaXhlciBmcm9tICcuL0Zsb3dNaXhlcic7XG5pbXBvcnQgUGlwZWxpbmVXb3JrZXIgZnJvbSAnLi9QaXBlbGluZVdvcmtlcic7XG5pbXBvcnQgUmVzb3VyY2VNYW5hZ2VyIGZyb20gJy4vUmVzb3VyY2VNYW5hZ2VyJztcblxuY2xhc3MgVGFza1J1bm5lciB7XG4gICAgY29uc3RydWN0b3IoX25vZGVUcmVlLCBfYnVpbGRQcm9maWxlKSB7XG4gICAgICAgIHRoaXMubm9kZVRyZWUgPSBfbm9kZVRyZWU7XG4gICAgICAgIHRoaXMuYnVpbGRQcm9maWxlID0gX2J1aWxkUHJvZmlsZTtcbiAgICAgICAgdGhpcy5mbG93TWl4ZXIgPSBuZXcgRmxvd01peGVyKF9ub2RlVHJlZSwgX2J1aWxkUHJvZmlsZSk7XG4gICAgICAgIHRoaXMucGlwZWxpbmVXb3JrZXIgPSBuZXcgUGlwZWxpbmVXb3JrZXIoX25vZGVUcmVlLCBfYnVpbGRQcm9maWxlKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZU1hbmFnZXIgPSBuZXcgUmVzb3VyY2VNYW5hZ2VyKF9ub2RlVHJlZSwgX2J1aWxkUHJvZmlsZSk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGNyZWF0ZVJlc291cmNlRmxvdyhub2RlSW5mbykge1xuICAgICAgICBjb25zdCB7aWQsIGxhYmVsVGV4dCwgcmVzb3VyY2VOYW1lLCBub2RlVHlwZSwgbm9kZURldGFpbFR5cGUsIGNoZWNrZWRQbHVnaW4sIGNoaWxkcmVufSA9IG5vZGVJbmZvO1xuICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGlzIGEgbWl4IG5vZGVcbiAgICAgICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbmNhdCBldmVyeSBub2RlIGluZm9cbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmVHcm91cCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgc3ViTm9kZSBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNvbXBhcmVHcm91cC5wdXNoKGF3YWl0IHRoaXMuY3JlYXRlUmVzb3VyY2VGbG93KHN1Yk5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnN0IG1lcmdlZFJlc291cmNlRmxvdyA9IGF3YWl0IHRoaXMuZmxvd01peGVyLm1lcmdlZE11bHRpRmxvdyhjb21wYXJlR3JvdXApO1xuICAgICAgICAgICAgcmV0dXJuIHtpZCwgbGFiZWxUZXh0LCBjb21wYXJlR3JvdXB9O1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKHJlc291cmNlTmFtZSkge1xuICAgICAgICAgICAgLy8gcmVhZCByZXNvdXJjZVxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBhd2FpdCB0aGlzLnJlc291cmNlTWFuYWdlci5nZXRSZWFkU3RyZWFtKHJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGFwcGx5IHBsdWdpbiBhY2NvcmRpbmcgdG8gdXNlciBzZWxlY3RlZFxuICAgICAgICAgICAgY29uc3QgYXBwbHllZFBsdWdpblJlc291cmNlID0gYXdhaXQgdGhpcy5waXBlbGluZVdvcmtlci5hcHBseVBsdWdpblBpcGVsaW5lKHJlc291cmNlLCBjaGVja2VkUGx1Z2luKTtcbiAgICAgICAgICAgIHJlc3VsdCA9ICh7ZnJhZ21lbnRzOiBhcHBseWVkUGx1Z2luUmVzb3VyY2UsIGlkLCBsYWJlbFRleHR9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICh7aWQsIGxhYmVsVGV4dH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNyZWF0ZVJlc291cmNlRmxvdyh0aGlzLm5vZGVUcmVlKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrUnVubmVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./service/TaskRunner.js\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("es6-promise");;

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "readline":
/*!***************************!*\
  !*** external "readline" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("readline");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/task/submit.js"));
module.exports = __webpack_exports__;

})();