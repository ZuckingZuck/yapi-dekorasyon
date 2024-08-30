import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message, Space } from "antd";
import { useNavigate } from "react-router-dom";
import formatDateTime from "../hooks/useFormatDateTime";
import { useSelector } from "react-redux";
import AddAdmin from "../modals/AddAdmin";
import axios from "axios";

const Admins = () => {
    const user = useSelector((state) => state.user.user);

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/admin/admins`, {
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
        try {
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/admin/${id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            if (response.status === 200) {
                message.success("Admin silindi!");
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }
        } catch (error) {
            if(error.response.status === 422){
                message.error("Kendi hesabınızı silemezsiniz!")
            }
        }
        
    }

    const handleSuperAdmin = async (id) => {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/admin/superadmin/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });
        if (response.status === 200) {
            message.success("Rol ayarlandı!");
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    }

    const handleAdmin = async (id) => {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/admin/admin/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });
        if (response.status === 200) {
            message.success("Rol ayarlandı!");
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
            title: "Kullanıcı Adı",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "E-Posta",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Yetki",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "İşlemler",
            key: "detail",
            render: (_, record) => {
                return (
                    <Space>
                        <Button
                            danger
                            onClick={() => {
                                handleDelete(record._id);
                            }}
                            type="primary"
                        >
                            Sil
                        </Button>
                        <Button
                            onClick={() => {
                                handleAdmin(record._id);
                            }}
                            type="primary"
                        >
                            Admin Yap
                        </Button>
                        <Button
                            onClick={() => {
                                handleSuperAdmin(record._id);
                            }}
                            type="primary"
                        >
                            SuperAdmin Yap
                        </Button>
                    </Space>

                );
            },
        },
    ];

    return (
        <div className="flex w-full">
            <div className="container mx-auto mt-6">
                <h1 className="text-3xl font-bold mb-3">Adminler</h1>
                <Button type="primary" className="mb-5" onClick={() => setOpen(true)}>Admin Ekle</Button>
                <Table dataSource={data} rowKey={"_id"} columns={columns} />
                <AddAdmin open={open} setOpen={setOpen} />
            </div>
        </div>
    );
};

export default Admins;
