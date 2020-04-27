module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "03Ju":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/Users/Adam Lukasik/Dev/LMM-Deploy/node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__("PzR7");

// EXTERNAL MODULE: ./components/avatar.js
var avatar = __webpack_require__("i2FJ");

// EXTERNAL MODULE: ./components/date.js
var components_date = __webpack_require__("65Hy");

// EXTERNAL MODULE: ./components/cover-image.js
var cover_image = __webpack_require__("zK7a");

// CONCATENATED MODULE: ./components/post-preview.js

var __jsx = external_react_default.a.createElement;





function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return __jsx("div", null, __jsx("div", {
    className: "mb-5"
  }, __jsx(cover_image["a" /* default */], {
    title: external_prismic_reactjs_["RichText"].asText(title),
    slug: slug,
    url: coverImage.url
  })), __jsx("h3", {
    className: "text-3xl mb-3 leading-snug"
  }, __jsx(link_default.a, {
    as: `/posts/${slug}`,
    href: "/posts/[slug]"
  }, __jsx("a", {
    className: "hover:underline"
  }, __jsx(external_prismic_reactjs_["RichText"], {
    render: title
  })))), __jsx("div", {
    className: "text-lg mb-4"
  }, __jsx(components_date["a" /* default */], {
    dateString: date
  })), __jsx("p", {
    className: "text-lg leading-relaxed mb-4"
  }, excerpt), __jsx(avatar["a" /* default */], {
    name: author.name,
    picture: author.picture
  }));
}
// CONCATENATED MODULE: ./components/more-stories.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreStories; });

var more_stories_jsx = external_react_default.a.createElement;

function MoreStories({
  posts
}) {
  return more_stories_jsx("section", null, more_stories_jsx("h2", {
    className: "mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight"
  }, "More Stories"), more_stories_jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32"
  }, posts.map(({
    node
  }) => more_stories_jsx(PostPreview, {
    key: node._meta.uid,
    title: node.title,
    coverImage: node.coverimage,
    date: node.date,
    author: node.author,
    slug: node._meta.uid,
    excerpt: node.excerpt
  }))));
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bH3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PzR7");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("i2FJ");
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("65Hy");
/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zK7a");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return __jsx("section", null, __jsx("div", {
    className: "mb-8 md:mb-16"
  }, __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(title),
    slug: slug,
    url: coverImage.url
  })), __jsx("div", {
    className: "md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28"
  }, __jsx("div", null, __jsx("h3", {
    className: "mb-4 text-4xl lg:text-6xl leading-tight"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: `/posts/${slug}`,
    href: "/posts/[slug]"
  }, __jsx("a", {
    className: "hover:underline"
  }, __jsx(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    render: title
  })))), __jsx("div", {
    className: "mb-4 md:mb-0 text-lg"
  }, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    dateString: date
  }))), __jsx("div", null, __jsx("p", {
    className: "text-lg leading-relaxed mb-4"
  }, excerpt), author && __jsx(_components_avatar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    name: author.name,
    picture: author.picture
  }))));
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "65Hy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Date; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PzR7");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Date({
  dateString
}) {
  const date = Object(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["Date"])(dateString);
  return __jsx("time", {
    dateTime: dateString
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(date, 'LLLL	d, yyyy'));
}

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "CERt":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Sample-landing-a942963f9e87d509ef6ea03dcf9fb615.png";

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__("vUxr");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__("YSmr");

// CONCATENATED MODULE: ./components/alert.js

var __jsx = external_react_default.a.createElement;



function Alert({
  preview
}) {
  return __jsx("div", {
    className: external_classnames_default()('border-b', {
      'bg-accent-7 border-accent-7 text-white': preview,
      'bg-accent-1 border-accent-2': !preview
    })
  }, __jsx(container["a" /* default */], null, __jsx("div", {
    className: "py-2 text-center text-sm"
  }, preview ? __jsx(external_react_default.a.Fragment, null, "This is page is a preview.", ' ', __jsx("a", {
    href: "/api/exit-preview",
    className: "underline hover:text-cyan duration-200 transition-colors"
  }, "Click here"), ' ', "to exit preview mode.") : __jsx(external_react_default.a.Fragment, null, "The source code for this blog is", ' ', __jsx("a", {
    href: `https://github.com/zeit/next.js/tree/canary/examples/${constants["b" /* EXAMPLE_PATH */]}`,
    className: "underline hover:text-success duration-200 transition-colors"
  }, "available on GitHub"), "."))));
}
// EXTERNAL MODULE: ./assets/img/LMM-word.png
var LMM_word = __webpack_require__("h+g+");
var LMM_word_default = /*#__PURE__*/__webpack_require__.n(LMM_word);

// EXTERNAL MODULE: ./assets/img/LMM.png
var LMM = __webpack_require__("zoyt");
var LMM_default = /*#__PURE__*/__webpack_require__.n(LMM);

// CONCATENATED MODULE: ./components/footer.js

var footer_jsx = external_react_default.a.createElement;




function Footer() {
  return footer_jsx("footer", {
    className: "bg-accent-1 border-t border-accent-2 footer-color"
  }, footer_jsx(container["a" /* default */], null, footer_jsx("div", {
    className: "pt-20 pb-8 flex flex-col items-center"
  }, footer_jsx("div", {
    className: "grid grid-cols-3"
  }, footer_jsx("div", {
    className: "col-span-1"
  }, footer_jsx("img", {
    className: "my-6",
    src: LMM_word_default.a
  }), footer_jsx("hr", null), footer_jsx("p", {
    className: "my-6 footer"
  }, "Last Mile Money is a program of ", footer_jsx("a", {
    className: "footer-link",
    href: "https://www.ideo.com/"
  }, "IDEO"), " CoLab in partnership with the ", footer_jsx("a", {
    className: "footer-link",
    href: "https://www.gatesfoundation.org/"
  }, "Bill & Melinda Gates Foundation"), ". We work closely with ", footer_jsx("a", {
    className: "footer-link",
    href: "https://www.ideo.org"
  }, "IDEO.org"), ", including its ", footer_jsx("a", {
    className: "footer-link",
    href: "https://www.womenandmoney.design/"
  }, "Women + Money"), " program.")), footer_jsx("div", {
    className: "col-span-2"
  }, footer_jsx("img", {
    className: "m-2",
    src: LMM_default.a
  }))), footer_jsx("hr", {
    className: "w-full mt-2"
  }), footer_jsx("div", {
    className: "flex flex-auto w-full"
  }, footer_jsx("p", {
    className: "legal px-2 py-2 m-2 pl-0 ml-0 flex-grow text-left"
  }, "\xA92020 IDEO"), footer_jsx("p", {
    className: "legal px-2 py-2 m-2 flex-grow text-center"
  }, footer_jsx("a", {
    href: "https://www.ideo.com/privacy"
  }, "PRIVACY & COOKIES POLICY")), footer_jsx("p", {
    className: "legal px-2 py-2 m-2 flex-grow text-center"
  }, footer_jsx("a", {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSd-VDt-8kvGYbCfKO-0jfDpzdak8u8kyCTv3Ke_XJikH5tDcQ/viewform"
  }, "Do Not Sell My Personal Information")), footer_jsx("p", {
    className: "legal px-2 py-2 m-2 pr-0 mr-0 flex-grow text-right"
  }, footer_jsx("a", {
    href: "https://www.ideo.com/privacy#privacy-rights"
  }, "CA User Rights"))))));
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/meta.js

var meta_jsx = external_react_default.a.createElement;


function Meta() {
  return meta_jsx(head_default.a, null, meta_jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-touch-icon.png"
  }), meta_jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png"
  }), meta_jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png"
  }), meta_jsx("link", {
    rel: "manifest",
    href: "/favicon/site.webmanifest"
  }), meta_jsx("link", {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#000000"
  }), meta_jsx("link", {
    rel: "shortcut icon",
    href: "/favicon/favicon.ico"
  }), meta_jsx("meta", {
    name: "msapplication-TileColor",
    content: "#000000"
  }), meta_jsx("meta", {
    name: "msapplication-config",
    content: "/favicon/browserconfig.xml"
  }), meta_jsx("meta", {
    name: "theme-color",
    content: "#000"
  }), meta_jsx("link", {
    rel: "alternate",
    type: "application/rss+xml",
    href: "/feed.xml"
  }), meta_jsx("meta", {
    name: "description",
    content: `A statically generated blog example using Next.js and ${constants["a" /* CMS_NAME */]}.`
  }), meta_jsx("meta", {
    property: "og:image",
    content: constants["c" /* HOME_OG_IMAGE_URL */]
  }));
}
// CONCATENATED MODULE: ./components/layout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });

var layout_jsx = external_react_default.a.createElement;



function Layout({
  preview,
  children
}) {
  return layout_jsx(external_react_default.a.Fragment, null, layout_jsx(Meta, null), layout_jsx("div", {
    className: ""
  }, layout_jsx("main", null, children)), layout_jsx(Footer, null));
}

/***/ }),

/***/ "Hgc+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAA0CAYAAAAt1GyFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABCBSURBVHgB7V2Ncds2FIaSNNe7tKk6QZUJ6kwQegLLE1ieIM4EUSaIMkGUCaxMYGYCOxOEnSBq2t71+hP3+6gPCkQDIClRlNXwu6NJCyQfAOIB7z08PPS+//7712Z9vP3tt99mpkH0gX///Xd4fX39c6/XG+A4UNIcv/G4wm/v7t69m84B0yB2Tfuff/4hvSPRHvBn0MyYvg3a3333XYJ3Puc1vuOhWQNoP+fMJ68/f/48/eOPP96E7mUZcc8ZyvIE/x7Y55CHK5bv77//fvHnn39m9l58i3NTDxOU461pCT0UHvm+nrFxFBPv3LkzxOkKBc58aXhm8vvvv78wDcD5kAkO5iVVw5nj9zGux2ZR2Qdq1LyeuhW+j7TRRgZgmqd474j/sxHhxIONig1toltJO9F1I7Tx7Uc45Z0nGl3P1IT7vJCGmJDlRDu6QHkG+mmug7C/kQFHZEDeD+b5YGrAPmvaApkHjeeJL+3hw4cfHjx4cBJ47gLPPTcbgpXE3kv5uCjmRenX33777U8F+iPezzSOnkgfmJpg77Ym7aMmaKN+J5Y2zif8rQLtjcvtvkvvuTZrgG2Az6KNPMX5o8qSBO59LVoffPWMurhU+keWSd/mxHNc27IX0zapi7WwS+ZhRbOyWHGhPIQakZOPI+aTH6VO5aFcB3xuE9p8bhPavoZUlfa65S68Y23mYRksM/B/lOOl2tJL3/2WOUJtRszyMfYO5flaDHtidow7Zkfgh4MYwmF8+unTp8cQ/96ZNUAZFyLkY4qe33zzzSU/atkzpI1nLjHMzzahzefw/KM6tHkPaLPcKfSXVsvdJED7qS5TnXNdg+KnO4I66BfOK6Aeh7K8ot4k0fXWYyfMg8ZLXeo1dQk0nmdmQ7Di+R7qB2yYsYaktMZoE1VpczQR41CxPd1U8a9T7ibBcuA04jUa+yuekY/ULHSYPvSxG6OCNXyQuUKjBt4xhs5y2qresgFaZx5WPCrwpRpvI8YGC76PIxka0rmv9yNt9Pbnu6IthXnaNu2mAUU+4ZkjBBr6cpSwxg0ZmlaAej/Fd89w2Uf6lOIe9RYyUtujZlNonXlQ8S9pvStrQNSHICePcX9uzYFoMqG8XCbf37t37wU+koEF67mH9nN8YLMt2hwFQHtunwvQjo52pEEFnPVkafP/TWg3DWvediyBRv9bM3FSNBxgkMzANLTETfXTAAfFZzL9pWWm1pX+DdAq88i0OUTDPg3dI0X5gvoQmIzKdKYkigRDNKZoJVOUwXPs5c7cD6jrEUSKw23RJvAcmWPo0rZiThXapIHGdGZ/R4PsU9RZl3bT4LutuRmMuqKvaRRKeY08Py0+SwaiuIpR6EfmU1MAM41IfOdoF/rbumh75KGsOw3NT/DD4INcsodGQzhAb3qIis5HCTQ8ilqP8f8jznegkoMyvuTv1PaQhK6DtPkuSxtHEqKNfwd1aXPUKaMtkS6njQb2CLTyEQodzYi0kf64YrmnLu2mgXcv9ZX79+9fyGK5PMxi8pNIQiIkOzgaPCgB4HxMowt+Hjpi3YXZA7TGPOp9E07uhdJReeeaeD1EL/bedx97L2vhYiWHemKkk07+AS1tq9z6aFtFnrRDFjD1nIfSL+rQHvGZEG3qYbT8xWizV1e5y2i/MZGGuwlcQwGQidlXDvNl4pMeE/noQwORTNVBpiAz4Xkr0vZDJvrbhNaYB0xzRAUz1Puy58VpVlWZlu5whZ74dSA9xWlOujxwnbnK7Ya0X1SkfSLlOgsxhaMDVrL8VaHNHtxn8doU1lAAsBN5FDqsLkTRWffTi4UjUhITKV0vF4l2txqtMY8sMKkvjT0T5ejQqBSCZPzYB5kxHbQpp8+apE3rUQXaua+aCZRbz0Z1wHVocxQzX8SnxuCIg2nJrdZw0Gcekd93Esn4Dq/expHS0ZOCHd1twj3TEuToOAkks4HN6vpqsYLR+FMTaKBoRHSm5GQsr9MmaVOEq0obPfY08BqOxmnTtEHzfV29J+ZlQD0M7/vRGgrKOhqOfspf7jOI/B5CTzuWLkOd8QMOplP0o/9g7pBrNIEaEnFvG1obeVjxPudTgs6WkcZd9t4rMeYN4GP9yg9DkYGeu1ugnZqFM2mMNvWpLETblPfiXmh0SQLJ+WSlaRb5qFCV2ZU/Ite/2NHRo8J8MVUnOEYS7UZm4UGe4nzc9DzYtmC9qhOfTE7rCXqEsW/Gl8ofC1u1oOv4T3XYDOt4SrcFWgzBOD/Y/zE/977pZR7bRmtiG8G1HL4RgBNl6qlu6CXsvfX7yLp4FJDIdX/oo6mera85BdMkbYplUoTP2qZtIuWWz1vQufI2YB90mjK0yjxknMAIZ109bqRpXQflbIoLvxTTMaJxjmAesmZxYhYNdO5796a0pbAPdkE7Vm7kq0ddq8N20SrzdLhdcFeSCrkHQOwZMfXSTE7mt2Z2d/UnLaF2dOESA+p3XAmLuapxzTwFUbZyddvomOcrhgwtifsb2v+zmO6hVa9JILlv3+fqMzKM0HskM2vkKXJvanaIjnk65BY0OpWaxZwTrWpBI5CW39PEPHMmQbeVrySWDiPDL2aH6JinA0Gjxgsww1AM4WUe6nCa65maL244W8O6CwXbws5Wkna4PaBlD7049ZN8fijiNZG7/OzLJOa20TFPhxxaBj3ltU9hlyd3Yr746TXueLpv6MS2DsaZR6JPGsW23CvANRzYmAWwcE141jzUVhELMEMXpKZjBtZFxzwdlpBPWi66uYYDmaBHvMa5vaCCvd44lEYztfFMLreJjnk6rIDLCdhoXcOBnDaJ6aaBFmtiFEpA/nZqaSM65umwAhgOXoFZcrciGg60NmknhgKIZbc6ik5nMOiwAuk5qf49sqtwTWRB39eKjnk63ACDD/JMx1fGf+Y1zmPTYQWd2NbhBtzFbGAkWryyJnzIYLHrx6L/tKxPbYyOeTp4waUSXL7O69AS9jXA8F3DUCKYZ8UVvGwNWOu7IhTQMc/XjY84Mvm1rQCNkqLbK1MfWeC3zNTIU5Ubwdw7XTzXMc9XDG0Etda8jZYurCxfYGwFnB4F7t16ntpGZzDo0GFN2JFnopnlFSjU65nC5BbBxU0MEZuYFgBZOcMRTI/JxxjeTaAMeaA+BR6fFtO4knPXtP8PoJHg7t279FKY43q+b7EKQsiZR3tCZp70lH8UCXIF+OgDretITQVEFlBVgqLk+EJXJTiohIbWloz0/Nj485XGYiuwA1HdnHnS81gBoXUnm8QwQNpE8RG2Bsas444V9n/WMcPfxp6xuz3Y/8EQKbcFKd6nFaGcXF2GlGJHwk7h4cOHVzhPfMo+n8N9bkDHV58+fZrE8s/vY7dzLOYvBuYdneIz3d9X1NZo8El2dKD5hDRz5tG2F7UmwDji1IyeMzYbgI6IvhnnBw8evEdlj9CzvfX1aMwnKsX44gQogkvur+Uzk+LZvhaKHYC2L87Ae+1m0NNMfPH5YAwD+YsNzCJSqS+uQxtey/3rL3uEEoOiQ2gRiru9fMYX9os7TMjEbZHZsGOsS3YKGnHHDH5frPtCnrg7RSiuXjH/vueDYN5ZVjDszLok4fqt71sSkiBOFEt9vE86z8AXf1nr5Oc2LnId0FM4FAJYM+s2lpiXtjMb/8TUhPzFvLP2pFW1ATQBltGGyC2rR0kQWWg0LTDOzAauZ7B6HgqHdWp3RmDgel/dOnnqh0ILV8AQzDkIHQyiz5s4AFjJIxY/wUnLYyfslcFAW63fgJwZz+oEN3cCsHtFAhtjGh+Oo908RBt4Q9p19pVRUPvnIV+xCK1tgfVmt0UM1qNdSRqa92G5LONcL3a/O/Z1Dvh9qr162PkM7F5ExdfRz07XiXYTrAWOdow8FDvsvQrdnNPyLQZ0VtHObcTUvWEe9VRHvjT1HBll1yoM5OzSlkYm2fJQthpdrkyANhuCWQRev6jKQGws15FNtqgr9AIRTrcBisTutojI35PAfZYxvHWmgPpEhg4gOkdEs7bTcQ2L3415Ktzzchs7P1iw/E6A+hujj7uhl5VU9oZ5qMz1wpvFUgSjossPfxlrxOxVpCDOQwHWNSoNnZFhEqMNfeuYulMZA9kt03F5ENroyo6IkfjWW4NT3hvGEWdTKxuE/UZdONspXlVxtXFGliDDcqc/oxHKt9tfk3BoJe6+qRJFB2YhZi87PGttG2NYykwNUNliwAg8NzAtgL0dG3Aougt7KTS8Qyq0NpC4LFmMFU3jwFN9XDLPhBWFD+xVjKUUL/URTtyhAucR2nPQfswRxUN7bmlTFORoh/ccR7ZaGZmFuPiWFinTAnwrSZ3lCDlkOVs6iPpWkrJNaJ+eSqMm680uvsN7B6F7kJdJFYXek59gu6ZIV7SsKT/87TWtnfimrA8ydq4HFjs8a22b+8zRMdDJj24dtGRVvN9sAhTgI97BfTdfond/42t8muE+RQVPtUPByCy22pgr6HqK63HMsqigfqOi+VnRZWK02QhO8fwLMp9Dm2XPg8lT2a5A+zkZCKOZaRtslKi7K8VZW+7AYOuE18WtFF1YI8e1f9rDC7YhzScWmXFgLzhCsU74folPqamGJEI3w+mGWZpiOBiIHUWiGHUDsxhlbywEXE6ShkLChsARhw0Cz1U1VY/MhrAFu3///jka8WHIpKoG+k50X8tUXeoi4uhCk2Ijr0rbMvAatPsSJ3NLjsS3XYAj5oGYP29czqZW0ZWkbJBq4ANTEWQcnYPmcY0+p3gv6ycXqao4hHLkiTBykB73P6L47ywDz3zbquydew71C7MYShsNZK7Gy20drewbo72u6TRGm0xr7F6ku4L0kGIIKiuyRY0AtqFWNbPb6QBelxlI7F6vvJZI1S8b4di5c24wcAT95wqGilxU9XUae8c87IVo5qQIROW7ia3HnRGnT7k2MqpY2gcN0u5Xod0W3BBUOJ/YlaSyTEYbuMTi3HBQxTJmF9qRLLcYKbtfO+K5AUq2iaXkQU8E3w176RjKnkHzBH3tDn1i1gTnDzhE0xPAN9tdRhvPH5k1IcsfrW+mCu0WkffKZAK6LvH6ukL8AnfUKpMMNCdkGWBWpdNg3aPjyqWCbYf6rYK99apWI6Zv2UyuHhexzWKL4L3anXm5A3fVxuvSxr8z6jbr0KYMr0Vnt4lxXBGprwZeaSUpGcA2bmCEMp4X64UjEk2/7LDMQmTL6uwHKz+3lM/2SnZToPhI6SB0bDpvZE3VozofX88MzMKkWecZLx2KLOzlkDYopmF47of2mlFv9Qx18EoWrguZJlPtCUpRIDcXy1GR7+d8gp2PmOHDPVqn4cZo43grBZjlsk6S7Gl/liJuLX9JmU8henOaZ329Mi1ifV9gwDoKewRspAkv6sQvYONGnn6Qsj3UdMbcLriTP5/N59Vff/11XLf+6Q2Aer00JbspsFONWXnRtlKcDs2a6KGglTxQdw00ouOyoV0mVcrnJzK3FnuWDMcVFUm63TSpX5A2Z9gVLN1Hm7oEvddnVWirLBt9G/qUxdIlcpJJSr2pi9CeO8PQs9bsTt20YECw9eDdW4fOumjw52X5Z6ehjig3VFBycOhWrbdgud184Lsmvg3GeuZ/DgzPP/HsK/w2QZEANH9QHn7dtSFgl3Drou3vsE38B1MkBF5GOIVtAAAAAElFTkSuQmCC"

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "MgzW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "PzR7":
/***/ (function(module, exports) {

module.exports = require("prismic-reactjs");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vUxr");
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("03Ju");
/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0bH3");
/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("teNT");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("CafY");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("qoWs");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("YSmr");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Index({
  preview,
  allPosts
}) {
  const heroPost = allPosts[0].node;
  const morePosts = allPosts.slice(1);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    preview: preview
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, __jsx(_components_intro__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null))));
}
async function getStaticProps({
  preview,
  previewData
}) {
  const allPosts = await Object(_lib_api__WEBPACK_IMPORTED_MODULE_6__[/* getAllPostsForHome */ "b"])(previewData);
  return {
    props: {
      preview,
      allPosts
    }
  };
}

/***/ }),

/***/ "Teak":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAzCAYAAADhGpoIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS8SURBVHgB7VnLUtswFFVMeMzwMrvuar4A2LHD7LqDfgHpqsuSZVdxvoCw7CrhC0q+IM4XEL4g5gswrxnKKz3HkYxwbMdknCmd8Z3RSJZ0rSPp6ko6Ki0tLR0JITYNwzBfXl78wWBQLZVKB8xDLBC619fXjqonXqVeLpe95+fnJnT43bu9va2KaYppmtbi4mJTfS8vLzcXFhY+M02ACLbMsxhQ32TZysrKGb9lvRr+8UNMScrjKmC0PIz2KtMzMzM1xo+Pjy6iE5T59/f3nqzaxejviCnJDEaqginfA4jt2dnZTwB1gbSNeHNubm4b8RcA+8U81PcAxkcwUfcKZX9Q5/v8/Pwa0jXU+/n09OSLKUgJ00VbXFUZsLtzNGgxDyN2BUCeD4mrx3xM+Q7yLXSkzW9RSCH5Skn/oNuBfR5wIeHTYh7stIcFcqyt7kShG0O0R5vl7xB8LNRT+NpunD4WckdkEGIIgcInHiKjJhuIq9xIcujsIB0/kvsiXjwAdu7u7k4iQAciG1C3JEE6EmRYIP0nQdsa+NbNzc23KEiA6KC+2rWCUWSCI4tgq7pIV7HLNTSgfZEulsIT7ErsmQx9upsIEJb/VuVqV1KCTjY0/Wa0nOaAOn1Zfql2siyi9PCPTrBdag3tJSlxe4yC4LfeySRduQUPZKNHYgKgBqYjmDIaLKa1naQE+zqOOnQssvCQQhtM0oVtu2jHYxpxkh2niqFsS/3oPSJXt8iiH9jZUCwxgRgIuWx73P/HVLFkPFF7BNqTaTtqg7rElWG6lS5HzE7RtcTQewQmJiYEqnybCZurxVXigQR+sk9fq+fDbtmoyzRG9JD14vTRoVAPQFtiAlF+9Ezzg/ShdYD2cCIyEfY1H8u8LX1RcUUDZEcD0kA4Qcd8nLz4Tx6mbdmZHvzolsgoXPX4lxU6fE6NdNpWih4d+a4cxTfCMy2iZlqjBPnw8PA1y1YcB9QIEPi+h56uI8OJWb28R7k4A2zFgaTArbUw0utItmKKqe9wJN8DMiqluEx1SNYPziKjcNHBbDaYpvkA3IWYUEam/qPKyNT/D1IAzVsMnrLHnX4+ghRTn7cUQPOWAmjeMpZ2/JeCrZPnWJMM4ocGql82CxvNW4rFxOsN7k2bsLPTtHo4Y/BOtqHn8W0Aum39RjA1oGiI1A2v4O6YGwJpyoqewWcjEHQNvA/U+XTEvKlMvbzHk7oJ+NaMar5kEUP6h7dfXIsOpgYUoxnyAxiZwyw6JCbAUe0yQIdXajULdvAfkbPI0axoWZZkojOLbiqSo83fRjGatkrzLk9iAzFH2E3TI+Em+QEKOdoAoCKFcwdKUPJttAXQPS4KpG2OKunHFFVLjJIY4cjmCpQjotgWckzgBM4B1hHD0SFJ7Kaok+cPy/lSyH+hoy1cm9dEnncmcljRf5FhVrR4HCOoGO+A/h4tU9guc1tMnFqNFPYlgKZitMWQLXzX67NGUZr61JOPb4rs0tZ3HfnGrxoguBEKktQkonrC/0zdO5AYJo1OeyfgN0DFW7eSKnzeQRQAldul0j1V+VpdPuM4rEoHHn1vksDYsU5ET5XVc1lMuoPHTlRNeKULDsFYHBXxSh6niS+n3oG36P4FwzOgypTJgUgAAAAASUVORK5CYII="

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "VCUF":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YSmr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EXAMPLE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CMS_NAME; });
/* unused harmony export CMS_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HOME_OG_IMAGE_URL; });
const EXAMPLE_PATH = 'cms-prismic';
const CMS_NAME = 'Prismic';
const CMS_URL = 'https://prismic.io/';
const HOME_OG_IMAGE_URL = 'https://og-image.now.sh/Next.js%20Blog%20Example%20with%20**Prismic**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fi.imgur.com%2FGVmKYul.png&widths=undefined&widths=auto&heights=undefined&heights=100';

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h+g+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "i2FJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Avatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Avatar({
  name,
  picture
}) {
  return __jsx("div", {
    className: "flex items-center"
  }, __jsx("img", {
    src: picture.url,
    className: "w-12 h-12 rounded-full mr-4",
    alt: name[0].text
  }), __jsx("div", {
    className: "text-xl font-bold"
  }, name));
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "q1tI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("viRO");
} else {}


/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("q1tI"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "qoWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export API_TOKEN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrismicClient; });
/* unused harmony export getPreviewPostBySlug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllPostsWithSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllPostsForHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPostAndMorePosts; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vNl1");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);


const REPOSITORY = "lmm-site";
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`; // export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'

const API_TOKEN = "MC5YcUpzVkJFQUFDUUFZVm9m.77-9AkB377-977-977-977-977-9ey3vv71L77-977-9aO-_vQ8877-9PO-_ve-_ve-_ve-_ve-_ve-_ve-_vSVPbFY";
const PrismicClient = prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.client(REF_API_URL, {
  accessToken: API_TOKEN
});

async function fetchAPI(query, {
  previewData,
  variables
} = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(`${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`, {
    headers: {
      'Prismic-Ref': (previewData === null || previewData === void 0 ? void 0 : previewData.ref) || prismicAPI.masterRef.ref,
      'Content-Type': 'application/json',
      Authorization: `Token ${API_TOKEN}`
    }
  });

  if (res.status !== 200) {
    console.log((await res.text()));
    throw new Error('Failed to fetch API');
  }

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(`
    query PostBySlug($slug: String!) {
      post(uid: $slug, lang: "en-us") {
        _meta {
          uid
        }
      }
    }`, {
    preview: true,
    variables: {
      slug
    }
  });
  return data === null || data === void 0 ? void 0 : data.post;
}
async function getAllPostsWithSlug() {
  var _data$allPosts;

  const data = await fetchAPI(`
    {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `);
  return data === null || data === void 0 ? void 0 : (_data$allPosts = data.allPosts) === null || _data$allPosts === void 0 ? void 0 : _data$allPosts.edges;
}
async function getAllPostsForHome(previewData) {
  const data = await fetchAPI(`
    query {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            date
            title
            content
            coverimage
            excerpt
            author {
              ...on Author {
                name
                picture
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  `, {
    previewData
  });
  return data.allPosts.edges;
}
async function getPostAndMorePosts(slug, previewData) {
  const data = await fetchAPI(`
  query PostBySlug($slug: String!) {
    post(uid: $slug, lang: "en-us") {
      title
      content
      date
      coverimage
      author {
        ...on Author {
          name
          picture
        }
      }
      _meta {
        uid
      }
    }

   morePosts: allPosts(sortBy: date_DESC, first: 3) {
      edges {
        node {
          title
          content
          date
          coverimage
          excerpt
          author {
            ...on Author {
              name
              picture
            }
          }
          _meta {
            uid
          }
        }
      }
    }
  }
  `, {
    previewData,
    variables: {
      slug
    }
  });
  data.morePosts = data.morePosts.edges.filter(({
    node
  }) => node._meta.uid !== slug).slice(0, 2);
  return data;
}

/***/ }),

/***/ "teNT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Intro; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YSmr");
/* harmony import */ var _assets_img_Sample_landing_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CERt");
/* harmony import */ var _assets_img_Sample_landing_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_Sample_landing_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_Logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Hgc+");
/* harmony import */ var _assets_img_Logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_Logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img_Gates_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VCUF");
/* harmony import */ var _assets_img_Gates_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_Gates_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_CoLab_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Teak");
/* harmony import */ var _assets_img_CoLab_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_CoLab_png__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Intro() {
  function emailClick() {
    console.log('this is:', this);
    window.location.href = 'mailto:' + 'lukasikdesign@gmail.com';
  }

  return __jsx("section", {
    className: "flex-col md:flex-row flex items-center md:justify-between"
  }, __jsx("div", null, __jsx("img", {
    src: _assets_img_Logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "mb-32 mt-10"
  }), __jsx("h1", {
    className: "text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-lead"
  }, "We are a global collaborative network focused on connecting underserved communities to the digital economy."), __jsx("button", {
    onClick: emailClick,
    class: "pill-orange-dark hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full my-20"
  }, "Get in touch"), __jsx("p", {
    className: "body mb-10"
  }, "A program by"), __jsx("div", {
    className: "flex flex-wrap mb-8"
  }, __jsx("img", {
    src: _assets_img_CoLab_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "fade"
  }), __jsx("img", {
    src: _assets_img_Gates_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "fade py-1 ml-8"
  }))), __jsx("img", {
    src: _assets_img_Sample_landing_png__WEBPACK_IMPORTED_MODULE_2___default.a
  }));
}

/***/ }),

/***/ "vNl1":
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "vUxr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Container({
  children
}) {
  return __jsx("div", {
    className: "container mx-auto px-5"
  }, children);
}

/***/ }),

/***/ "viRO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__("MgzW"),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.13.1";


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zK7a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CoverImage({
  title,
  url,
  slug
}) {
  const image = __jsx("img", {
    src: url,
    alt: `Cover Image for ${title}`,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('shadow-small', {
      'hover:shadow-medium transition-shadow duration-200': slug
    })
  });

  return __jsx("div", {
    className: "-mx-5 sm:mx-0"
  }, slug ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `/posts/${slug}`,
    href: "/posts/[slug]"
  }, __jsx("a", {
    "aria-label": title
  }, image)) : image);
}

/***/ }),

/***/ "zoyt":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/LMM-4de55bceb78534f65430db3cbc6ffc01.png";

/***/ })

/******/ });