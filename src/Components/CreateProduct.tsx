import axios from 'axios';
import React, { useState } from 'react';
import { IProducts } from '../module';

interface createProductProps {
    onCreate : (product: IProducts) => void
}


export const CreateProduct = ({ onCreate } : createProductProps) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const productData: IProducts =  {
        title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 42,
          count: 10
        }
    }

    const sumbitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        if(value.trim().length === 0){
            setError(true);
            return
        }

        productData.title = value;
        const response = await axios.post<IProducts>('https://fakestoreapi.com/products', productData);

        onCreate(response.data);
    }

   


    return (
        <form onSubmit={sumbitHandler}>
            <input 
                type="text"
                className='border py-2 mb-2 w-full outline-0'
                placeholder='Enter product title ....' 
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />

            {error && <p className="text-center text-red-600">Error Valid</p>}

            <button className='py-2 px-4 border bg-yellow-400 hover:text-white' type='submit'>Create</button>
        </form>
    )
 }  