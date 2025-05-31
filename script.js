document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.getElementById("like");
    const likeIcon = likeButton.querySelector("i"); // เลือกไอคอนภายในปุ่ม
    const isLiked = localStorage.getItem("liked");

    // ตรวจสอบสถานะจาก Local Storage
    if (isLiked === "true") {
        likeButton.classList.add("liked"); // เพิ่มคลาส 'liked' หากเคยกดไลค์
        likeButton.innerHTML = '<i class="fa fa-thumbs-up"></i> LIKED'; // เปลี่ยนข้อความเป็น 'LIKED'
    }

    // เพิ่ม Event Listener สำหรับการกดปุ่ม
    likeButton.addEventListener("click", function () {
        this.classList.toggle("liked"); // เพิ่ม/ลบคลาส 'liked'

        if (this.classList.contains("liked")) {
            this.innerHTML = '<i class="fa fa-thumbs-up"></i> LIKED'; // เปลี่ยนข้อความเป็น 'LIKED'
            localStorage.setItem("liked", "true"); // บันทึกสถานะลงใน Local Storage
        } else {
            this.innerHTML = '<i class="fa fa-thumbs-up"></i> LIKE'; // เปลี่ยนข้อความกลับเป็น 'LIKE'
            localStorage.setItem("liked", "false"); // ลบสถานะออกจาก Local Storage
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleCheckbox = document.getElementById("toggle");
    const barLinks = document.querySelectorAll(".bar ul li a");

    // เพิ่ม Event Listener ให้กับลิงก์ใน .bar
    barLinks.forEach(link => {
        link.addEventListener("click", function () {
            toggleCheckbox.checked = false; // ยกเลิกการเลือก checkbox
        });
    });
});