(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailView"],{

/***/ "./src/components/viewContainer/detailView/detailView.tsx":
/*!****************************************************************!*\
  !*** ./src/components/viewContainer/detailView/detailView.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css */ "./src/css.tsx");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal */ "./src/components/modal.tsx");
/* harmony import */ var _headerSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headerSection */ "./src/components/viewContainer/detailView/headerSection.tsx");
/* harmony import */ var _textSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textSection */ "./src/components/viewContainer/detailView/textSection.tsx");
/* harmony import */ var _imageSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageSection */ "./src/components/viewContainer/detailView/imageSection.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var DetailView = /** @class */ (function (_super) {
    __extends(DetailView, _super);
    function DetailView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isModalOpen: false
        };
        _this.openModal = function () { return _this.setState({ isModalOpen: true }); };
        _this.closeModal = function () { return _this.setState({ isModalOpen: false }); };
        return _this;
    }
    Object.defineProperty(DetailView.prototype, "view", {
        get: function () {
            return this.props.match.url.substr(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailView.prototype, "imageSrc", {
        get: function () {
            return "../assets/" + this.view + ".jpg";
        },
        enumerable: true,
        configurable: true
    });
    DetailView.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: container },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: this.imageSrc, style: __assign({}, _css__WEBPACK_IMPORTED_MODULE_1__["fullscreenAbsolute"]) }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: __assign({}, content, _css__WEBPACK_IMPORTED_MODULE_1__["fullscreenAbsolute"]) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: flexContainer },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_headerSection__WEBPACK_IMPORTED_MODULE_3__["default"], { view: this.view, openModal: this.openModal }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_textSection__WEBPACK_IMPORTED_MODULE_4__["default"], { view: this.view }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imageSection__WEBPACK_IMPORTED_MODULE_5__["default"], { view: this.view }))),
            this.state.isModalOpen ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modal__WEBPACK_IMPORTED_MODULE_2__["default"], { persistent: true, shouldClose: this.closeModal },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null,
                    "Modal opened from ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: highlighted }, this.view),
                    " view"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: this.closeModal }, "Close modal"))) : null));
    };
    return DetailView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DetailView);
var highlighted = {
    color: 'orange'
};
var content = {
    zIndex: 10,
    background: 'rgba(0, 0, 0, 0.7)',
    overflowY: 'auto'
};
var container = {
    position: 'relative',
    width: '100%',
    height: '100%'
};
var flexContainer = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em'
};


/***/ }),

/***/ "./src/components/viewContainer/detailView/headerSection.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/viewContainer/detailView/headerSection.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function HeaderSection(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: headerSegment },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", { style: header }, props.view.toUpperCase()),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: props.openModal }, "Open Modal")));
}
var headerSegment = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};
var header = {
    color: 'orange',
    textShadow: '0px 0px 5px black'
};


/***/ }),

/***/ "./src/components/viewContainer/detailView/imageSection.tsx":
/*!******************************************************************!*\
  !*** ./src/components/viewContainer/detailView/imageSection.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spinner */ "./src/components/spinner.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ImageSection = /** @class */ (function (_super) {
    __extends(ImageSection, _super);
    function ImageSection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Not a good place for the key.. well.. what the heck.. - GET YOUR OWN! */
        _this.accessKey = "b916ed61a761bfb1b5aac28519371fe3ea49f198a5f3cd91fa4b53d469eff249";
        _this.imageDatabaseApiUrl = "https://api.unsplash.com/search/photos/";
        _this.state = {
            images: new Array(24).fill(""),
            isLoading: true
        };
        return _this;
    }
    ImageSection.prototype.handleResponse = function (response) {
        if (response.data && response.data.results) {
            var images = response.data.results.map(function (img) { return img.urls.small; });
            this.setState({ images: images, isLoading: false });
        }
    };
    ImageSection.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.imageDatabaseApiUrl, {
                                params: {
                                    client_id: this.accessKey,
                                    query: this.props.view,
                                    page: Math.round(Math.random() * 100),
                                    per_page: 24,
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        this.handleResponse(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ImageSection.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: root }, this.state.images.map(function (src, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: index, style: imageContainer }, src ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: src, style: image }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spinner__WEBPACK_IMPORTED_MODULE_2__["default"], null));
        })));
    };
    return ImageSection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ImageSection);
var root = {
    margin: '3em -1em -1em -1em',
    display: 'flex',
    flexWrap: 'wrap',
    background: 'rgba(0, 0, 0, 0.7)',
    boxShadow: '0 0px 80px 15px black'
};
var imageContainer = {
    margin: '1em',
    flexGrow: 1,
    background: 'rgba(0, 0, 0, 0.5)',
    width: '12em',
    height: '18em'
};
var image = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
};


/***/ }),

/***/ "./src/components/viewContainer/detailView/textSection.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/viewContainer/detailView/textSection.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spinner */ "./src/components/spinner.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var TextSection = /** @class */ (function (_super) {
    __extends(TextSection, _super);
    function TextSection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            paragraphs: [],
            isLoading: true
        };
        return _this;
    }
    Object.defineProperty(TextSection.prototype, "wikipediaApiUrl", {
        get: function () {
            return ('http://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text');
        },
        enumerable: true,
        configurable: true
    });
    TextSection.prototype.stripHtmlAndReferences = function (htmlText) {
        var doc = new DOMParser().parseFromString(htmlText, 'text/html');
        var text = doc.body.textContent || "";
        return this.removeReferences(text);
    };
    TextSection.prototype.removeReferences = function (text) {
        return text.replace(/ *\[[^)]*\] */g, "");
    };
    TextSection.prototype.handleResponse = function (response) {
        var htmlPageText = response.data.parse.text['*'];
        var paragraphs = this.exctractBeginingOfText(htmlPageText);
        this.setState({ paragraphs: paragraphs, isLoading: false });
    };
    TextSection.prototype.exctractBeginingOfText = function (htmlPageText) {
        var _this = this;
        // Split on <p>
        var paragraphs = htmlPageText.split('<p>');
        // Remove first content
        paragraphs.shift();
        // Trim end of last paragraph
        var lastParapgraph = paragraphs.pop() || "";
        lastParapgraph = lastParapgraph.substr(0, lastParapgraph.indexOf('</p>'));
        paragraphs.push(lastParapgraph);
        return paragraphs.map(function (p) { return _this.stripHtmlAndReferences(p); });
    };
    TextSection.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.wikipediaApiUrl, {
                                params: {
                                    page: this.props.view,
                                    origin: '*',
                                    format: 'json'
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        this.handleResponse(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TextSection.prototype.render = function () {
        var _a = this.state, isLoading = _a.isLoading, paragraphs = _a.paragraphs;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: root },
            isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spinner__WEBPACK_IMPORTED_MODULE_2__["default"], null) : null,
            paragraphs.map(function (paragraph) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { key: paragraph.substr(0, 10), style: text }, paragraph);
            })));
    };
    return TextSection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TextSection);
var root = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '15em'
};
var text = {
    display: 'block',
    lineHeight: '1.5',
    fontSize: '1.1em',
    color: 'white',
    textShadow: '1px 1px 2px black'
};


/***/ })

}]);
//# sourceMappingURL=detailView.bundle.js.map