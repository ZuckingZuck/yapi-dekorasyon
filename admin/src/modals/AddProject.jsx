import React, { useState } from "react";
import { Button, Modal, Form, Input, message, Select } from "antd";
import UploadImage from "../components/UploadImage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const AddProject = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategorie, setSelectedCategorie] = useState(null); // Seçilen servisi saklamak için state ekleyin
  const categories = useSelector((state) => state.categorie.categories);
  const user = useSelector((state) => state.user.user);
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const data = { name: values.name, imgUrl: imgUrl, categorie: selectedCategorie };
        const postServices = async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/admin/project`,
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
            message.success("Proje eklendi");
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
      title="Proje Ekle"
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
        <Form.Item
          name="categorie"
          label="Kategori Seç"
          rules={[{ required: true, message: "Lütfen bir kategori seçin!" }]}
        >
          <Select onChange={value => setSelectedCategorie(value)}>
            {categories?.map(c => (
              <Option key={c._id} value={c.name}>{c.name}</Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProject;
