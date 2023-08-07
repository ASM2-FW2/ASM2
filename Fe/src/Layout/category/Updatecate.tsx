import { Button, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCate } from '../../action/Category';
import { useEffect } from 'react'

const Updatecate = () => {
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      type FieldType = {
        name?: string;
      };
      const { id } = useParams()
      const navigate = useNavigate()
      const dispatch = useAppDispatch()
      const { categorys } = useAppSelector((state) => state.categorys)
      const [form] = Form.useForm()
      console.log(categorys)
      const newdata = categorys?.data.find((item: any) => item._id == id)

      useEffect(() => {
        if (newdata) {
          form.setFieldsValue({
            id: newdata._id,
            name: newdata.name,
            auther: newdata.auther,
            published: newdata.published,
            description: newdata.description,
            image: newdata.image,
            quantity: newdata.quantity,
            date: newdata.date,
            price: newdata.price
          });
        }
      }, [newdata, form]);
    
      const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(updateCate({ _id: id, ...values }))
        alert("cập nhật danh mục thành công")
        navigate("/admin/category")
      };
  return (
   <div>
     <div>Cập nhập sản phẩm</div>
     <Form
        form={form}
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
          <Button type="primary" htmlType="submit">
            sửa sản phẩm
          </Button>
        </Form.Item>
      </Form>
   </div>
  )
}

export default Updatecate