function formatDateTime(dateStr) {
    const date = new Date(dateStr);

    const day = date.getDate().toString().padStart(2, '0'); // Gün
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ay (0 indeksli olduğu için +1 eklenir)
    const year = date.getFullYear(); // Yıl
    const hour = date.getHours().toString().padStart(2, '0'); // Saat
    const minute = date.getMinutes().toString().padStart(2, '0'); // Dakika
    const second = date.getSeconds().toString().padStart(2, '0'); // Saniye

    return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
}

export default formatDateTime;