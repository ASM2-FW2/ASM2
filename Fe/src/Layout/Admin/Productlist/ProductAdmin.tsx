import { Button } from "antd"
import { deleteProduct, getAllProduct } from "../../../action/Product"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { useEffect } from 'react'
import { Link } from "react-router-dom"

const ProductAdmin = () => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector((state) => state.products)


  useEffect(() => {
    dispatch(getAllProduct())
  }, [])
  const productData = products?.data?.data || [];
  const deleteRemove = (id: any) => {
    console.log(id)
    if (confirm("bạn có muốn xoá không")) {
      dispatch(deleteProduct(id))
    }
  }
  return (
    <div>

      <Button type="primary" className="text-black" ><Link to={"/admin/add"}>Thêm sản phẩm</Link> </Button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">auther</th>
            <th scope="col">published</th>
            <th scope="col">description</th>
            <th scope="col">image</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">date</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {productData.map((item: any, index: any) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.auther}</td>
              <td>{item.published}</td>
              <td>{item.description}</td>
              <td>{item.image}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
              <td>
                <button type="button" className="btn btn-danger" onClick={() => deleteRemove(item._id)}>xoá</button>
                <button type="button" className="btn btn-success"><Link to={`/admin/edit/${item._id}`}>sửa</Link> </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductAdmin