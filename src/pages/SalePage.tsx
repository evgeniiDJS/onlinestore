import { useProducts } from "../hooks/products";
import { Loading } from "../Components/Loading";
import { Error } from "../Components/Error";
import { Products } from "../Components/Products";


export const SalePage = () => {

  const { error, loading, product } = useProducts();


  return (
    <div className="bg-gray-100 backdrop-blur-lg">
      <img className="w-[100%] h-[600px]" src="https://tagaer.md/ru/uploads/2022-07-15-7gx1e3-1.jpg" alt="banner" />
      <h2 className="ml-20 m-10 text-2xl font-bold font-mono text-stone-900 container">Sale</h2>
      <div className="flex mx-auto justify-center flex-wrap">
          { loading && <Loading /> }
          { product && <Error error={error} /> }
          { product.map((data) => <Products product={data} key={data.id} />) }
      </div>
    </div>
  )
 }  