function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgHamburger = function SvgHamburger(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 64 64"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m15.04 23.196 16.961-1.162 17.958-1.23M15.046 30.331l34.84 3.338"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    d: "M15 41a1 1 0 1 0 0 2h35.001a1 1 0 0 0 0-2H15"
  }));
};
export default SvgHamburger;