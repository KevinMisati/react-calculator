(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_DELL_Desktop_programming_files_javascript_reactjs_myprojects_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_DisplayForm_module_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_DisplayForm_module_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_DisplayForm_module_css__WEBPACK_IMPORTED_MODULE_2__),_ButtonDisplay__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),DisplayForm=function DisplayForm(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(C_Users_DELL_Desktop_programming_files_javascript_reactjs_myprojects_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),displayValue=_useState2[0],setDisplayValue=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(C_Users_DELL_Desktop_programming_files_javascript_reactjs_myprojects_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),operator=_useState4[0],setOperator=_useState4[1],handleButtonClick=function(e){setDisplayValue((function(t){return t+e}))},handleButtonClickOp=function(e){setDisplayValue((function(t){return t+e})),setOperator(e)},evaluateCalculation=function evaluateCalculation(e){e.preventDefault();var result=eval(displayValue);setDisplayValue(result)},deleteVal=function(e){e.preventDefault();var t=displayValue.split("");t.pop();setDisplayValue(t.join("")),console.log("working")},clearVal=function(e){e.preventDefault(),setDisplayValue("")};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form",{className:_DisplayForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{readOnly:!0,value:displayValue,type:"text"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ButtonDisplay__WEBPACK_IMPORTED_MODULE_3__.a,{clearVal:clearVal,deleteVal:deleteVal,handleButtonClickOp:handleButtonClickOp,evaluateCalculation:evaluateCalculation,handleButtonClick:handleButtonClick})]})};__webpack_exports__.a=DisplayForm},function(e,t,_){e.exports={form:"DisplayForm_form__UrUIh"}},function(e,t,_){"use strict";_(1);var n=_(8),c=_.n(n),l=_(0);t.a=function(e){var t=e.handleButtonClick,_=e.handleButtonClickOp,n=e.evaluateCalculation,a=e.deleteVal,r=e.clearVal;return Object(l.jsxs)("table",{className:c.a.table,children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t(1)},children:"1"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t(2)},children:"2"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t(3)},children:"3"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t(4)},children:"4"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t(5)},children:"5"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t(6)},children:"6"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t(7)},children:"7"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t(8)},children:"8"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t(9)},children:"9"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t(0)},children:"0"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),_("(")},children:"("}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),_(")")},children:")"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),_(".")},children:"."}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),_("+")},children:"+"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),_("-")},children:"-"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),_("*")},children:"*"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),_("/")},children:"/"}),Object(l.jsx)("button",{onClick:a,children:"D"}),Object(l.jsx)("button",{onClick:r,children:"C"}),Object(l.jsx)("button",{onClick:n,children:"="})]})]})}},function(e,t,_){e.exports={table:"ButtonDisplay_table__329G-"}},,,,,function(e,t,_){},function(e,t,_){},,function(e,t,_){"use strict";_.r(t);var n=_(1),c=_.n(n),l=_(4),a=_.n(l),r=(_(13),_(14),_(0)),u=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Simple calculator"})})},i=_(5);var s=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(u,{}),Object(r.jsx)("main",{children:Object(r.jsx)(i.a,{})}),Object(r.jsx)("footer",{})]})},o=function(e){e&&e instanceof Function&&_.e(3).then(_.bind(null,17)).then((function(t){var _=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,a=t.getTTFB;_(e),n(e),c(e),l(e),a(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s,{})}),document.getElementById("root")),o()}],[[16,1,2]]]);
//# sourceMappingURL=main.2da00ba2.chunk.js.map