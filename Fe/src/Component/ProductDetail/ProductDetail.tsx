import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllProduct, getOne } from '../../action/Product'
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const ProductDetail = () => {
  const { id } = useParams()
  // const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { products } = useAppSelector((state) => state.products)
  console.log(products)
  const newdata = products?.data?.data.find((item: any) => item._id == id)
  console.log(newdata)
  useEffect(()=>{
    dispatch(getAllProduct())
  },[])
  // console.log(newdata)
  return (
    <div>
      <Header />
        <h2 className="p-5 text-2xl">Chi tiết sản phẩm</h2>
      <div className="container m-10">
        <div className="row">
        <div className="col-md-3">
          <img src={newdata.image} alt={newdata.name} className="img-fluid" />
        </div>
        <div className="col-md-9">
          <h2 className='text-xl'>{newdata.name}</h2>
          <p className='text-danger'>Giá: {newdata.price}</p>
          <p>Tác giả: {newdata.auther}</p>
          <p>Số lượng: {newdata.quantity}</p>
        <button className='btn btn-danger mt-10'>Mua ngay</button>
        </div>
       <div className='mt-10'>
       <h2>Mô tả sản phẩm</h2>
        <textarea className='mt-10' name="" id="">{newdata.description}</textarea>
       </div>
      </div>
</div>
      <Footer />
    </div>
  );
};

export default ProductDetail;