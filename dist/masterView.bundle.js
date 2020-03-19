(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masterView"],{

/***/ "./src/components/viewContainer/imageLink.tsx":
/*!****************************************************!*\
  !*** ./src/components/viewContainer/imageLink.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css */ "./src/css.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
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



/** React function component */
function ImageLink(props) {
    var url = "" + props.view;
    var imageSrc = "../assets/" + props.view + ".jpg";
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: url, style: __assign({}, linkAppearance, _css__WEBPACK_IMPORTED_MODULE_1__["centeredContent"]) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: imageSrc, style: _css__WEBPACK_IMPORTED_MODULE_1__["fullscreenAbsolute"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { style: __assign({}, centeredAbsolute, appearance) }, props.view)));
}
var linkAppearance = {
    height: '100%',
    cursor: 'pointer'
};
var centeredAbsolute = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
};
var appearance = {
    color: '#1E1E1E',
    textShadow: '0 0 3px white'
};


/***/ }),

/***/ "./src/components/viewContainer/masterView.tsx":
/*!*****************************************************!*\
  !*** ./src/components/viewContainer/masterView.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MasterView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _viewSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewSection */ "./src/components/viewContainer/viewSection.tsx");
/* harmony import */ var _imageLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageLink */ "./src/components/viewContainer/imageLink.tsx");



/** React function component */
function MasterView(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: container }, props.detailViews.map(function (view) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_viewSection__WEBPACK_IMPORTED_MODULE_1__["default"], { key: view },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imageLink__WEBPACK_IMPORTED_MODULE_2__["default"], { view: view }))); })));
}
var container = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em'
};


/***/ }),

/***/ "./src/components/viewContainer/viewSection.tsx":
/*!******************************************************!*\
  !*** ./src/components/viewContainer/viewSection.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css */ "./src/css.tsx");
/* harmony import */ var _errorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errorBoundary */ "./src/components/errorBoundary.tsx");
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



/** React class component */
var ViewSection = /** @class */ (function (_super) {
    __extends(ViewSection, _super);
    function ViewSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewSection.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: __assign({}, gridItem, _css__WEBPACK_IMPORTED_MODULE_1__["centeredContent"]) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: _css__WEBPACK_IMPORTED_MODULE_1__["fullscreenAbsolute"] },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_errorBoundary__WEBPACK_IMPORTED_MODULE_2__["default"], null, this.props.children))));
    };
    return ViewSection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ViewSection);
var gridItem = {
    position: 'relative',
    margin: '0.5em',
    background: '#808080',
    height: '100%',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 0 2px white, 2px 2px 15px black'
};


/***/ })

}]);
//# sourceMappingURL=masterView.bundle.js.map