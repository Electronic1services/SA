function toggleDarkMode() {
    let body = document.body;
    let isDark = body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark);
    document.querySelector(".toggle-btn").textContent = isDark ? "☀️" : "🌙";
}

window.onload = function () {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        document.querySelector(".toggle-btn").textContent = "☀️";
    }
};

function redirectToWhatsApp(serviceName) {
    let phoneNumber = "+966554047782";
    let message = encodeURIComponent("مرحبًا، أريد الاستفسار عن خدمة: " + serviceName);
    window.location.href = "https://wa.me/" + phoneNumber + "?text=" + message;
}
