import { IProducts } from '../module';
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

export const useProducts = () => {
    const [product, setProduct] = useState<IProducts[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const addProducts = (product:IProducts) => {
        setProduct(prev => [...prev, product])
    }

    const fetchProducts = async () => {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<IProducts[]>('https://fakestoreapi.com/products?limit=10');
            setProduct(response.data);
            setLoading(false);
        } catch(e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return { product, loading, error, addProducts }

}