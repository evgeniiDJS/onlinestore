import { Link } from 'react-router-dom';
import logo from '../assert/img/11.png';
import React, { useContext } from 'react';
import { ModalContext } from "../context/ModalContext";
import '../navigation.css'


export const Navigation = () => {
    const {open, close} = useContext(ModalContext);
    
    

    return (
      <>
        <div className='h-[120px] bg-slate-50 flex justify-between px-1 py-4'>
          <img className='hidden md:block h-[150px] w-[150px] border-none hover:animate-spin' src={logo} alt='logo' />
          <h1 className='text-slate-500 text-2xl pt-10 border-b-4 border-indigo-600'> MR || B E R N E R</h1>
          <div className='flex justify-between py-10'>
            <div className='text-slate-500 italic text-1xl px-10'>
              <a className='hidden md:block' href="tel:88007005588">+32 (233) 187-3412</a>
              <p className='hidden md:block px-4 italic'>phone number</p>
            </div>
            <img className='block h-[30px] w-[30px]  mx-2' src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="contacts" />
            <img className='hidden sm:block h-[30px] w-[30px] mx-2' src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png" alt="like" />
            <img className='hidden sm:block h-[30px] w-[30px] mx-2' src="https://cdn-icons-png.flaticon.com/512/7193/7193348.png" alt="price" />
          </div>
        </div>
          <nav className="hidden md:flex h-[150px] justify-between py-10 bg-slate-50 text-black">
            <div className='px-10 font-bold text-2xl py-10'>
                <Link className='px-2' to="/">Women</Link>
                <Link className='px-2' to="/men">Men</Link>
                <Link className='px-2 text-red-700' to="/sale">Sale</Link>
                <Link className='px-2' to="/stocks">Stocks</Link>
                <button 
                  className="px-2 relative bottom-3 rigth-3 bg-red-700 text-white text-lg px-1 py-2"
                  onClick={open}
                  onMouseEnter={close}
                >You can add your product</button>
            </div>
          </nav>
      </>
    )
 }  