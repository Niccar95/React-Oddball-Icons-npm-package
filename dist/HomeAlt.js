function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgHomeAlt = function SvgHomeAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "M52 52V30.002h3.948L32 10l-4 8.5h-2.5l-1.5 2-1 1.5-3.026-2L7.948 30.003H12V52"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "M37 52V40H27v12"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "square",
    strokeWidth: 2,
    d: "M12 53h15m10 0h15"
  }));
};
export default SvgHomeAlt;