import { useEffect, useRef } from "react/";
import { createPortal } from 'react-dom';

const modelRoot = document.getElementById('modal');
const container = document.createElement("div");

const Modal = ({children}) => {
    // state container that remains after render cycle is complete/destroyed
    const elRef = useRef(null);
    //init an uninitialized ref
    if(!elRef.current){
        elRef.current = document.createElement('div');
    }
    useEffect(() => {
         modalRoot.appendChild(elRef.current);
         return () => modalRoot.removeChild(elRef.current);
        }, []);
        return createPortal(<div>{children}</div>, elRef.current)
}