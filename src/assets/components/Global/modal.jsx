import React, { useEffect, useRef, useState } from "react";
const Modal = (props) => {
    const { children, show = false, setShow, sty } = props
    const modalRef = useRef(null);
    // useEffect(() => {
    //     document.body.style.overflow = show ? 'hidden' : 'auto';
    // }, [show])    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShow(false)
            }
        }
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [modalRef]);
    return <>
        {show && <>
            <div className="fixed top-0 left-0 w-full h-screen bg-[#000] bg-opacity-75 flex justify-center items-center z-40 overflow-auto">
                <div className={`${sty}`} ref={modalRef}>
                    {children}
                </div>
            </div>
        </>}
    </>
}

export default Modal