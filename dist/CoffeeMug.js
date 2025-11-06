function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgCoffeeMug = function SvgCoffeeMug(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "M13 16h30l-2.143 32H15.143zM43 20.007c5.68.34 7.355 1.973 7.013 6.977s-2.398 7.331-8.08 6.991"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "m35.8 16.096 1.073 2.066v1.5l-2.137 1.5-1.602 3.5 1.602 4-5.876 1-1.068 2"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M24.063 12.83c2.362-5.206-4.2-2.981-2.344-8.725M31.022 12.842c2.363-5.206-4.2-2.981-2.343-8.725"
  }));
};
export default SvgCoffeeMug;