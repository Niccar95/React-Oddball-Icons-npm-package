function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgLockAlt = function SvgLockAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "M42 28H22a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2ZM24 28v-8a8 8 0 0 1 16 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: 2,
    d: "M39 40c0 2.761-4.239 5-7 5s-7-2.239-7-5 4.239-5 7-5 7 2.239 7 5Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M34 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
  }));
};
export default SvgLockAlt;