import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message, Space } from "antd";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify"
import formatDateTime from "../hooks/useFormatDateTime";
import { useSelector } from "react-redux";
import axios from "axios";

const Messages = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({});
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/message`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      );

      if (response.status === 403 || response.status === 401) {
        message.error("Yetkiniz yok!")
        navigate("/admin");
      }

      if (response.ok) {
        const json = await response.json();
        setData(json.reverse());
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [navigate, user.token]);

  const handleDetail = (record) => {
    setDetail(record);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/message/${id}`, {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    });
    if (response.status === 200) {
        message.success("Mesaj silindi!");
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
      title: "Ad Soyad",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "E-posta",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Konu",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Detay",
      key: "detail",
      render: (_, record) => {
        return (
          <Space>
            <Button
              onClick={() => {
                handleDetail(record);
              }}
              type="primary"
            >
              Detay
            </Button>
            <Button
              danger
              onClick={() => {
                handleDelete(record._id);
              }}
              type="primary"
            >
              Sil
            </Button>
          </Space>

        );
      },
    },
  ];

  const handleCancel = () => {
    setDetail({});
    setOpen(false);
  };

  const renderProjectDetail = () => {
    // projectDetail içindeki \n karakterini <br> etiketi ile değiştir
    const formattedProjectDetail = detail.message?.replace(/\n/g, '<br>');

    // Güvenli bir şekilde HTML içeriği işleme
    const sanitizedHTML = DOMPurify.sanitize(formattedProjectDetail, { ALLOWED_TAGS: ['br'] });

    return (
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    );
  };

  return (
    <div className="flex w-full">
      <div className="container mx-auto mt-6">
        <h1 className="text-3xl font-bold mb-3">Mesajlar</h1>
        <Table dataSource={data} rowKey={"_id"} columns={columns} />
        <Modal
          footer={false}
          title="Mesaj İçeriği"
          open={open}
          onCancel={handleCancel}
        >
          {renderProjectDetail()}
        </Modal>
      </div>
    </div>
  );
};

export default Messages;
