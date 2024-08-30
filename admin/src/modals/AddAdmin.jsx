import React from "react";
import { Modal, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddAdmin = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const user = useSelector((state) => state.user.user);
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const postData = async () => {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/createadmin`, {
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
            message.success("Admin eklendi.");
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
      title="Admin Ekle"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="username"
          label="Kullanıcı Adı"
          rules={[{ required: true, message: "Kullanıcı adı alanı zorunludur!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-Posta"
          rules={[{ required: true, message: "E-Posta alanı zorunludur!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Parola"
          rules={[{ required: true, message: "Parola alanı zorunludur!" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddAdmin;
