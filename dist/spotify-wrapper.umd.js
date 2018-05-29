(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(3);

var _album = __webpack_require__(2);

var _album2 = _interopRequireDefault(_album);

var _search = __webpack_require__(4);

var _search2 = _interopRequireDefault(_search);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SportifyWrapper = function () {
    function SportifyWrapper(options) {
        _classCallCheck(this, SportifyWrapper);

        this.apiURL = options.apiURL || _config.API_URL;
        this.token = options.token;

        this.album = _album2.default.bind(this)();
        this.search = _search2.default.bind(this)();
    }

    _createClass(SportifyWrapper, [{
        key: 'request',
        value: function request(url) {
            var headers = {
                headers: {
                    Authorization: 'Bearer ' + this.token
                }
            };

            return fetch(url, headers).then(_utils2.default);
        }
    }]);

    return SportifyWrapper;
}();

exports.default = SportifyWrapper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = album;
function album() {
    var _this = this;

    return {
        getAlbum: function getAlbum(id) {
            return _this.request(_this.apiURL + "/albums/" + id);
        },
        getAlbums: function getAlbums(ids) {
            return _this.request(_this.apiURL + "/albums/?ids=" + ids);
        },
        getTracks: function getTracks(id) {
            return _this.request(_this.apiURL + "/albums/" + id + "/tracks");
        }
    };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TOKEN_API = 'BQBr2zuqlGMd56FokASyOQsvri6anuece2YONzCZizF5VAUHzgJvTXZ0ZBMIgy1zo0yRif8UV31-E3QOOfV7uQ2XT8YdS09fivNx43S_rpEcVIn9aWu4OPM8Mo3IE5KP7XV9-Ovfb8a1FB7-QRmqawPAibiq-A';

var API_URL = exports.API_URL = 'https://api.spotify.com/v1';

var HEADERS = exports.HEADERS = {
    headers: {
        'Authorization': 'Bearer ' + TOKEN_API
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = search;
function seacher(type, query) {
    return this.request(this.apiURL + '/search?q=' + query + '&type=' + type);
}

function search() {
    return {
        artists: seacher.bind(this, 'artist'),
        albums: seacher.bind(this, 'album'),
        tracks: seacher.bind(this, 'track'),
        playlists: seacher.bind(this, 'playlist')
    };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toJSON = function toJSON(data) {
  return data.json();
};

exports.default = toJSON;

/***/ })
/******/ ]);
});
//# sourceMappingURL=spotify-wrapper.umd.js.map