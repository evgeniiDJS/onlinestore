import React from 'react';

interface ModalProps {
    children: React.ReactNode,
    title: string,
    onClose: () => void
}


export const Modal = ({ children, title, onClose } : ModalProps) => {
    return (
       <>
            <div
                onClick={onClose}
                className='w-[100%] fixed bg-black/50 top-0 rigth-0 left-0 bottom-0'
            />
            <div 
                className='w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2'
            >
                <h1 className='text-2xl text-centr mb-2'>{ title }</h1>

                { children }               
            </div>
       </>
    )
 }  