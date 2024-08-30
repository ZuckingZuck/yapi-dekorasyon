import { message } from "antd";
const customUploadImage = ({ file, onSuccess, onError }) => {
    const user = localStorage.getItem("user");
    const formData = new FormData();
    formData.append("name", file);

    const apiUrl = `${import.meta.env.VITE_API_URL}/api/admin/upload`;

    fetch(apiUrl, {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${user.token}`,
        }
    })
        .then((response) => response.json())
        .then((data) => {
            message.success("Dosya yüklendi.");
            onSuccess(data);
            setImgUrl(data.imgUrl);
        })
        .catch((error) => {
            onError();
            message.error("Dosya yüklenirken bir hata oluştu!");
            console.error("File upload error:", error);
        });
};

const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
        message.error("Lütfen bir resim dosyası yükleyin!");
    }
    return isImage;
};

export { customUploadImage, beforeUpload }