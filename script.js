window.onscroll = function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Hàm cuộn lên đầu trang
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
