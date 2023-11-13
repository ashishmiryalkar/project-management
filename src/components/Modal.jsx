import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle,useRef } from 'react';
 
const Modal = forwardRef(function Modal ({children}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });
    return createPortal(<dialog ref={dialog} className={"backdrop:bg-stone-900/90"}>
        <p className="p-2">{children}</p>
        <form method="dialog"><button className="m-2 p-2 rounded-sm flex bg-stone-700 text-stone-300 hover:bg-stone-900 hover:text-stone-100">Close</button></form>
    </dialog>, document.getElementById('modal-root'));
});

export default Modal;