import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useAppDispatch } from '../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../../action/Product';



const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  name?: string;
  auther?: string;
  published?: string;
  description?: string
  image?: string
  price?: string
  quantity?: any
  date?: any
};
const Addproduct = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(addProduct(values))
    alert("thêm sản phẩm thành công")
    navigate("/admin/product")

  };
  return (
    <>


      <h2>Thêm sản phẩm</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="auther"
          name="auther"
          rules={[{ required: true, message: 'Please input your auther!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="published"
          name="published"
          rules={[{ required: true, message: 'Please input your published!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="description"
          name="description"
          rules={[{ required: true, message: 'Please input your description!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="image"
          name="image"
          rules={[{ required: true, message: 'Please input your image!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="price"
          name="price"
          rules={[{ required: true, message: 'Please input your price!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="quantity"
          name="quantity"
          rules={[{ required: true, message: 'Please input your quantity!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="date"
          name="date"
          rules={[{ required: true, message: 'Please input your date!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Addproduct