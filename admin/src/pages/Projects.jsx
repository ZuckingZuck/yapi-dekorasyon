import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message } from "antd";
import { useNavigate } from "react-router-dom";
import formatDateTime from "../hooks/useFormatDateTime";
import { useSelector } from "react-redux";
import axios from "axios";
import AddProject from "../modals/AddProject";

const Projects = () => {
    const user = useSelector((state) => state.user.user);

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);


    const fetchProject = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/admin/project`, {
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
        fetchProject();
    }, [])

    const handleDelete = async (id) => {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/project/${id}`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });
        if (response.status === 200) {
            message.success("Proje silindi!");
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
            title: "Kategori",
            dataIndex: "categorie",
            key: "categorie",
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
                <h1 className="text-3xl font-bold mb-3">Projeler</h1>
                <Button type="primary" className="mb-5" onClick={() => setOpen(true)}>Proje Ekle</Button>
                <Table dataSource={data} rowKey={"_id"} columns={columns} />
                <AddProject open={open} setOpen={setOpen} />
            </div>
        </div>
    );
};

export default Projects;
