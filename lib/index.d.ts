import React from 'react';
type onCloseFunctionType = () => void;
interface Props {
    onConfirm?: onCloseFunctionType;
    onClose?: onCloseFunctionType;
    body?: string;
    okeTxt?: string;
    closeTxt?: string;
    header?: string;
    btnContent?: JSX.Element;
    btnClass?: string;
    zIndex?: number;
}
declare const ButtonConfirm: React.FC<Props>;
export default ButtonConfirm;
