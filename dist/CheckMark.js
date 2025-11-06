function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgCheckMark = function SvgCheckMark(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 30.836,
    cy: 34.836,
    r: 16.5,
    stroke: "#000",
    strokeWidth: 2,
    transform: "rotate(-29.391 30.836 34.836)"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 0.8,
    d: "m30 36.25.937.75 1.031-1.5.516-.75L33 34"
  }));
};
export default SvgCheckMark;