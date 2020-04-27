module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("XCOm");


/***/ }),

/***/ "XCOm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qoWs");


function linkResolver(doc) {
  // Pretty URLs for known types
  if (doc.type === 'post') {
    return `/posts/${doc.uid}`;
  } // Fallback for other types, in case new custom types get created


  return `/${doc.uid}`;
}

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const ref = req.query.token; // Check the token parameter against the Prismic SDK

  const url = await _lib_api__WEBPACK_IMPORTED_MODULE_0__[/* PrismicClient */ "a"].previewSession(ref, linkResolver, '/');

  if (!url) {
    return res.status(401).json({
      message: 'Invalid token'
    });
  } // Enable Preview Mode by setting the cookies


  res.setPreviewData({
    ref // pass the ref to pages so that they can fetch the draft ref

  }); // Redirect the user to the share endpoint from same origin. This is
  // necessary due to a Chrome bug:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=696204

  res.write(`<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`);
  res.end();
});

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

/***/ "vNl1":
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ })

/******/ });