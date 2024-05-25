"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var ButtonConfirm = function (props) {
    var onConfirm = props.onConfirm, onClose = props.onClose, body = props.body, btnContent = props.btnContent, btnClass = props.btnClass, header = props.header, zIndex = props.zIndex, okeTxt = props.okeTxt, closeTxt = props.closeTxt;
    var ref = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), show = _a[0], setShow = _a[1];
    var _b = (0, react_1.useState)(null), target = _b[0], setTarget = _b[1];
    (0, react_1.useEffect)(function () {
        //click ra ngoài thì đóng
        var handleClickOutside = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShow(false);
            }
        };
        //gán sự khiện khi click ngoài
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });
    var handleClick = function (event) {
        setShow(!show);
        setTarget(event.target);
    };
    var onConfirmClick = function () {
        setShow(!show);
        setTarget(null);
        onConfirm && onConfirm();
    };
    var onCloseClick = function () {
        setShow(!show);
        setTarget(null);
        onClose && onClose();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: btnClass, onClick: handleClick, children: btnContent }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Overlay, { show: show, target: target, placement: "bottom", container: ref, containerPadding: 20, children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Popover, { style: { zIndex: "".concat(zIndex ? "" + zIndex : "800") }, children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Popover.Header, { as: "h3", children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faWarning }), " ", header ? header : "Warring"] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Popover.Body, { children: [(0, jsx_runtime_1.jsx)("p", { children: body }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { style: {
                                        flexGrow: "1",
                                        justifyContent: "space-between"
                                    }, className: 'd-flex', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { size: 'sm', onClick: onConfirmClick, className: 'btn btn-danger', children: okeTxt ? okeTxt : "Ok" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { size: 'sm', onClick: onCloseClick, className: 'btn btn-success', children: closeTxt ? closeTxt : "Close" })] })] })] }) })] }));
};
exports.default = ButtonConfirm;
