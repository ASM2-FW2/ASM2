import { getAllProduct } from "../../action/Product";
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { useEffect } from 'react';
const ProductPage = () => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((state) => state.products)
    useEffect(() => {
        dispatch(getAllProduct())
    }, [])
    const productData = products?.data?.data || [];
    console.log(productData)
    return (
        <div>
            <Header />
            <div>
                <h2 className='p-5 text-2xl'>Sản phẩm</h2>
                <div className='grid grid-cols-6 gap-6 mb-3'>
                    {productData?.map((item: any, index: any) => (
                        <div className='text-center m-auto ' key={index++}>
                            <a href={`/product/${item._id}`}><img src={item.image} alt="" className='w-47 h-52' /></a>
                            <h3 className='font-semibold text-2xl py-2'>{item.name}</h3>
                            <strong className="text-red-500">{item.price} <sup>đ</sup> <del className='text-gray-400'><em>300 000</em>  <sup>đ</sup></del></strong> <br />
                            <button className=' rounded-md p-1 bg-yellow-300 hover:bg-blue-600 hover:text-white'>mua ngay</button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage