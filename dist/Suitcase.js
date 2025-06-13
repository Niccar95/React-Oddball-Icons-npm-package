function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgSuitcase = function SvgSuitcase(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M46 20H18a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V24a4 4 0 0 0-4-4ZM24 20v-6h16v6M14 34h36M23.776 48.105 22.05 53.64l-5.596 5.245M45.306 59.5l-2.309-7.286L39.306 48"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m45.108 59.564 2.78-1.127M16 59l2.725 1.255"
  }));
};
export default SvgSuitcase;