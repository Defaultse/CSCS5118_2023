import Axios from 'axios';
import React, { ReactElement, ReactNode } from 'react'
import { createPortal } from 'react-dom';
import "./Modal.css";

interface Props {
    open: boolean,
    onClose: ()=>void,
    children: ReactNode;
}

export default function Modal({open,onClose,children}: Props): ReactElement {
    const account = JSON.parse(localStorage.getItem('account')||'{}');
    
    function deleteAccount(){
        Axios.post("http://localhost:8000/delete/user", {
        id: account.id
    }).then((response)=>{
        alert('OK')
        window.location.replace('/sign-in')
    });}

    if(!open) return<></>;

    return createPortal(
        <>
            <div className="overlayy"></div>
            <div className="modall">
                <h1>Are you sure about it?</h1>
                <div className="buttons">
                    <button onClick={()=>deleteAccount()}>Yes</button>
                    <button onClick={onClose}>No</button>
                </div>
            </div>
        </>,
        document.getElementById("portal") as Element
    )
}
