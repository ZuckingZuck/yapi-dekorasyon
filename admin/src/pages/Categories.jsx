import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message } from "antd";
import { useNavigate } from "react-router-dom";
import formatDateTime from "../hooks/useFormatDateTime";
import { useSelector } from "react-redux";
import AddCategorie from "../modals/AddCategorie";
import axios from "axios";

const Categories = () => {
  const user = useSelector((state) => state.user.user);
  const categories = useSelector((state) => state.categorie.categories);
  
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  

  const handleDelete = async (id) => {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/categorie/${id}`, {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    });
    if(response.status === 200){
        message.success("Kategori silindi!");
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
  }

  const columns = [
    {
      title: "Tarih",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, record) => {
        return <span>{formatDateTime(record.createdAt)}</span>
      }
    },
    {
      title: "Kategori",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "İşlemler",
      key: "detail",
      render: (_, record) => {
        return (
          <Button
            danger
            onClick={() => {
              handleDelete(record._id);
            }}
            type="primary"
          >
            Sil
          </Button>
        );
      },
    },
  ];

  return (
    <div className="flex w-full">
      <div className="container mx-auto mt-6">
        <h1 className="text-3xl font-bold mb-3">Kategoriler</h1>
        <Button type="primary" className="mb-5" onClick={() => setOpen(true)}>Kategori Ekle</Button>
        <Table dataSource={categories} rowKey={"_id"} columns={columns} />
        <AddCategorie open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
};

export default Categories;
