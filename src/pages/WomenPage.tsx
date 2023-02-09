import React, { useContext } from 'react';
import { Loading } from "../Components/Loading";
import { Error } from "../Components/Error";
import { Products } from "../Components/Products";
import { useProducts } from "../hooks/products";
import { Modal } from "../Components/Modal";
import { CreateProduct } from "../Components/CreateProduct";
import { IProducts } from "../module";
import { ModalContext } from "../context/ModalContext";




export const WomenPage = () => {
    const { error, loading, product, addProducts } = useProducts();
    const { modal, close } = useContext(ModalContext);

  const createHandler = (product:IProducts) => {
    close();
    addProducts(product)
  }

 return (
  <div className="bg-gray-100 backdrop-blur-lg">
    <img src="https://dubrowka.ru/upload/iblock/ce8/Banner.jpg" alt="banner" />
    <h2 className="ml-20 m-10 text-2xl font-bold font-mono text-stone-900 container">BESTSELLERS</h2>
    <div className="flex mx-auto justify-center flex-wrap">
      { loading && <Loading /> }
      { product && <Error error={error} /> }
      { product.map((data) => <Products product={data} key={data.id} />) }

      { modal && 
        <Modal title="Create new product" onClose={ close }>
          <CreateProduct onCreate={createHandler} />
        </Modal> }

    </div>
  </div>
 )
 }  