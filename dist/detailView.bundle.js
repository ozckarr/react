(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailView"],{

/***/ "./src/components/viewContainer/detailview/TextSection.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/viewContainer/detailview/TextSection.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TextSection() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { style: textStyle }, "Ska-badabadabadoo-belidabbelydabbladabbladabblabab-belibabbelibabbelibabbelabbelo-doobelidoo Everybody stutters one way or the other So check out my message to you As a matter of fact, I don't let nothing hold you back If the Scatman can do it, so can you Everybody's saying that the Scatman stutters But doesn't ever stutter when he sings But what you don't know, I'm gonna tell you right now That the stutter and the scat is the same thing to you I'm the Scatman \u2013 Where's the Scatman? I'm the Scatman Why should we be pleasing in the politician heathens Who would try to change the seasons if they could? The state of the condition insults my intuitions And it only makes me crazy and a heart like wood Everybody stutters one way or the other So check out my message to you As a matter of fact, I'm letting nothing hold you back If the Scatman can do it, brother, so can you I'm the Scatman"));
}
var textStyle = {
    color: 'white',
    marginLeft: '1em'
};


/***/ }),

/***/ "./src/components/viewContainer/detailview/detailView.tsx":
/*!****************************************************************!*\
  !*** ./src/components/viewContainer/detailview/detailView.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css */ "./src/css.tsx");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal */ "./src/components/modal.tsx");
/* harmony import */ var _imageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageSection */ "./src/components/viewContainer/detailview/imageSection.tsx");
/* harmony import */ var _headerSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./headerSection */ "./src/components/viewContainer/detailview/headerSection.tsx");
/* harmony import */ var _TextSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextSection */ "./src/components/viewContainer/detailview/TextSection.tsx");
/* harmony import */ var _smallImagesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smallImagesSection */ "./src/components/viewContainer/detailview/smallImagesSection.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
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
        function getImages() {
            return __awaiter(this, void 0, void 0, function () {
                var respone, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://source.unsplash.com/1600x900/?forest")];
                        case 1:
                            respone = _a.sent();
                            console.log(respone);
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: container },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: __assign({}, content, _css__WEBPACK_IMPORTED_MODULE_1__["fullscreenAbsolute"]) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_headerSection__WEBPACK_IMPORTED_MODULE_4__["default"], { whereAreWe: this.view }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextSection__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_smallImagesSection__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imageSection__WEBPACK_IMPORTED_MODULE_3__["default"], { imageSrc: this.imageSrc }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: __assign({}, _css__WEBPACK_IMPORTED_MODULE_1__["fullScreen"], _css__WEBPACK_IMPORTED_MODULE_1__["centeredContent"]) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: this.openModal }, "Open Modal"))),
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
    zIndex: 10
};
var container = {
    position: 'relative',
    width: '100%',
    height: '100%'
};


/***/ }),

/***/ "./src/components/viewContainer/detailview/headerSection.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/viewContainer/detailview/headerSection.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function HeaderSection(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { style: styleHeader }, "Welcome to the " + props.whereAreWe));
}
var styleHeader = {
    color: 'white',
    marginLeft: '1em'
};


/***/ }),

/***/ "./src/components/viewContainer/detailview/imageSection.tsx":
/*!******************************************************************!*\
  !*** ./src/components/viewContainer/detailview/imageSection.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css */ "./src/css.tsx");
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


function ImageSection(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: props.imageSrc, style: __assign({}, _css__WEBPACK_IMPORTED_MODULE_1__["fullscreenAbsolute"]) }));
}


/***/ }),

/***/ "./src/components/viewContainer/detailview/smallImagesSection.tsx":
/*!************************************************************************!*\
  !*** ./src/components/viewContainer/detailview/smallImagesSection.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmallImagesSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SmallImagesSection(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: SmallImagesContainer },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: SmallImagesStyle }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: SmallImagesStyle }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: SmallImagesStyle })));
}
var SmallImagesContainer = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: '1em'
};
var SmallImagesStyle = {
    width: '30%',
    height: '10em',
    backgroundColor: 'white',
};


/***/ })

}]);
//# sourceMappingURL=detailView.bundle.js.map