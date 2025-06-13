function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgBookmarkAlt = function SvgBookmarkAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 64 64"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "M17 21a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v36l-15-6.222L17 57z"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 32.5,
    cy: 9.5,
    stroke: "#000",
    strokeWidth: 2,
    rx: 14.5,
    ry: 2.5
  }));
};
export default SvgBookmarkAlt;