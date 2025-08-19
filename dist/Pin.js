function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgPin = function SvgPin(props) {
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
    strokeWidth: 1.712,
    d: "M32 9c-8.846 0-16 7.199-16 16.1C16 37.175 32 55 32 55s16-17.825 16-29.9C48 16.199 40.846 9 32 9"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.712,
    d: "M31.983 30.679a5.707 5.707 0 0 0 5.709-5.705 5.707 5.707 0 0 0-5.709-5.705 5.707 5.707 0 0 0-5.708 5.705 5.707 5.707 0 0 0 5.708 5.705"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    d: "M34 25a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    d: "M37 23.5H26"
  }));
};
export default SvgPin;