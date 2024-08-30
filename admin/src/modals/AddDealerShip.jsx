import React, { useState } from "react";
import { Button, Modal, Form, Input, message, Select } from "antd";
import UploadImage from "../components/UploadImage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const AddDealerShip = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState("");
  const user = useSelector((state) => state.user.user);
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const data = { name: values.name, imgUrl: imgUrl };
        const postServices = async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/admin/dealership`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
              body: JSON.stringify(data),
            }
          );
          if(response.status === 403 || response.status === 401){
            message.error("Yetkiniz yok!")
            navigate("/admin");
          }
          if(response.ok){
            const json = await response.json();
            message.success("Bayilik eklendi");
            setTimeout(() => {
                window.location.reload();
            }, 1500);
          }
        };
        postServices();
        setOpen(false);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    setOpen(false);
  };


  return (
    <Modal
      width={"1000px"}
      title="Bayilik Ekle"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Başlık"
          rules={[{ required: true, message: "Başlık alanı zorunludur!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="imgUrl"
          label="Görsel"
          valuePropName="imgUrl"
          getValueFromEvent={() => imgUrl}
        >
         <UploadImage setImgUrl={setImgUrl}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddDealerShip;
