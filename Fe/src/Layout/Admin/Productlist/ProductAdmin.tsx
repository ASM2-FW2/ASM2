import React from 'react'
import { Button } from 'antd'
type Props = {}

const ProductAdmin = (props: Props) => {
    
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>dlad</td>
      <td>
        <Button type='primary' danger>Xoa</Button>
        <Button type='primary' danger >Sua</Button>
      </td>
    </tr>
  </tbody>
</table>
  )
}

export default ProductAdmin