import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { getOne } from '../../action/Product'
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { products } = useAppSelector((state) => state.products)
  useEffect(()=>{
    dispatch(getOne(id))
  },[])
  console.log(products)
  return (
    <div>
      <Header />
      <div>
        <h2 className='p-5 text-2xl'>Chi tiết sản phẩm </h2>
        {/* Hiển thị thông tin sản phẩm */}
        {/* <h2>{product.name}</h2>
        <p>{product.description}</p> */}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;