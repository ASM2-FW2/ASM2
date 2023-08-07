import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useAppDispatch } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { addCate } from '../../action/Category';

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  type FieldType = {
    name?: string;
  };
const AddCate = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const onFinish = (values: any) => {
      console.log('Success:', values);
      dispatch(addCate(values))
      alert("thêm danh muc thành công")
      navigate("/admin/category")
    };
  return (
    <div>
        <div>Thêm danh mục</div>
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className='text-black'>
            Thêm danh muc
          </Button>
        </Form.Item>
      </Form>
    </div>
    
  )
}

export default AddCate