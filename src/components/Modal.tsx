import React from 'react'
import ReactDOM from 'react-dom';
declare const UIkit: any;



interface IProps {
    modalId: string;
    classes?: string;
    children: any
}


export const Modal = (props: IProps) => {
    const { modalId, classes, children } = props;

    const cssClass = classes ? classes : ""

    const modal = (
        <div
            id={modalId}
            data-uk-modal
            data-bg-close={false}
            className={`uk-flex-top ${cssClass}`}
        >
            {children}
        </div>
    )
    return ReactDOM.createPortal(modal, document.body)
}



export const showModalId = (id: string) => {
    const element = document.querySelector(`#${id}`);
    UIkit.modal(element).show();
}

export const hideModalId = (id: string) => {
    const element = document.querySelector(`#${id}`);
    UIkit.modal(element).hide();
}