function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgClockAlt = function SvgClockAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "M15 10h39v39a4 4 0 0 1-4 4H11V14a4 4 0 0 1 4-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m32 32 7.846 1.565M32 20v12"
  }));
};
export default SvgClockAlt;