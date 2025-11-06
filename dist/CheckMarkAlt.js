function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgCheckMarkAlt = function SvgCheckMarkAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M24 38.75 28.37 45l4.815-12.5 2.408-6.25L38 20"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "M23.863 25.692c8.13-4.58 17.329-2.855 20.756 3.229s.135 14.844-7.996 19.424-17.33 2.855-20.757-3.229-.135-14.844 7.997-19.424Z"
  }));
};
export default SvgCheckMarkAlt;