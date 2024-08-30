import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message } from "antd";
import { useNavigate } from "react-router-dom";
import formatDateTime from "../hooks/useFormatDateTime";
import { useSelector } from "react-redux";
import axios from "axios";
import AddReference from "../modals/AddReference";

const References = () => {
    const user = useSelector((state) => state.user.user);

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);


    const fetchData = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/admin/reference`, {
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
        fetchData();
    }, [])

    const handleDelete = async (id) => {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/reference/${id}`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });
        if (response.status === 200) {
            message.success("Referans silindi!");
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    }

    const columns = [
        {
            title: "Görsel",
            dataIndex: "imgUrl",
            key: "imgUrl",
            render: (_, record) => {
                return <img className="w-40 rounded-lg" src={record.imgUrl} alt="img" />
            }
        },
        {
            title: "Tarih",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (_, record) => {
                return <span>{formatDateTime(record.createdAt)}</span>
            }
        },
        {
            title: "İsim",
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
                <h1 className="text-3xl font-bold mb-3">Referanslar</h1>
                <Button type="primary" className="mb-5" onClick={() => setOpen(true)}>Referans Ekle</Button>
                <Table dataSource={data} rowKey={"_id"} columns={columns} />
                <AddReference open={open} setOpen={setOpen} />
            </div>
        </div>
    );
};

export default References;
