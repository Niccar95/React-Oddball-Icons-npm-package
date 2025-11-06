function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgHeart = function SvgHeart(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "M32.064 49.052s-14-10-18-20 4-18 12-14c4 2 6 6 6 6s2-4 6-6c8-4 16 4 12 14s-18 20-18 20Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    d: "M26.064 30.552a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M38.064 30.552a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M28.064 38.052q4-2 8 0"
  }));
};
export default SvgHeart;