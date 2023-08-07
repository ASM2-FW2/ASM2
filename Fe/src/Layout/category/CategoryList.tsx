import React from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { remove, getAllCate } from '../../action/Category'
import { Button } from 'antd'
const CategoryList = () => {
    const dispatch = useAppDispatch()
    const { categorys } = useAppSelector((state) => state.categorys)
    useEffect(() => {
        dispatch(getAllCate())
      }, [])
      const RemoveCate = (id: any) => {
        console.log(id)
        if (confirm("bạn có muốn xoá không")) {
          dispatch(remove(id))
        }
      }
  return (
    <div>
         <Button type="primary" className="text-black" ><Link to={"/admin/category/add"}>Thêm danh mục</Link> </Button>
         <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope='col'>Action</th>

          </tr>
        </thead>
        <tbody>
          {categorys?.data?.map((item: any, index: any) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>
                <Button type='primary' className='me-3' danger onClick={() => RemoveCate(item._id)}>xoá</Button>
                <Button type='primary' className='text-black' ><Link to={`/admin/category/edit/${item._id}`}>sửa</Link> </Button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default CategoryList