import React from "react";
import { Modal, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddCategorie = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const user = useSelector((state) => state.user.user);
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const postData = async () => {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/categorie`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify(values),
          });
          if(response.status === 403 || response.status === 401){
            message.error("Yetkiniz yok!")
            navigate("/admin");
          }
          if(response.ok){
            message.success("Kategori eklendi.");
            setOpen(false);
            setTimeout(() => {
                window.location.reload();
            }, 1500);
          }
        };
        postData();
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
      title="Kategori Ekle"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Kategori"
          rules={[{ required: true, message: "Soru alanı zorunludur!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCategorie;
