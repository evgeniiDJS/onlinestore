import React, { useState } from 'react';
import { IProducts } from '../module'

interface ProductProps {
    product: IProducts
}

export const Products = ({ product }: ProductProps) => {
    const [details, setDetails] = useState(false);

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClases = ['w-[150px] h-[40px] mt-6 rounded-xl', btnBgClassName]


    return (
        <div 
            className='border-4 border-blue-200 shadow-2xl subpixel-antialiased w-[180px] bg-neutral-300 py-4 my-4 mx-4 rounded-xl lg:flex flex-col items-center'
        >
        <img className='block h-[150px] w-[150px] border' src={product.image} alt={product.title} />
        <p className='block h-[150px] w-[150px] py-4 text-lime-800 text-lg italic'>{product.title}</p>
        <span className='font-bold text-3xl'>{product.price}$</span>
        <button 
            className={btnClases.join(' ')}
            onClick={() => setDetails(prev => !prev)}            
        >{ details ? 'Hide Details' : 'Show Details' }</button>
            {details && 
                <div>
                    <p className='py-4 text-lime-800 text-base'>{product.description}</p>
                    <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
                </div>
            }
        </div>
    )
}