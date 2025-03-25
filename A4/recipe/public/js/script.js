document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".book-page");
    let currentPage = 0;

    function flipPage(direction) {
        if (direction === "next" && currentPage < pages.length - 1) {
            pages[currentPage].style.transform = "rotateY(-180deg)";
            currentPage++;
        } else if (direction === "prev" && currentPage > 0) {
            currentPage--;
            pages[currentPage].style.transform = "rotateY(0deg)";
        }
    }

    document.querySelectorAll(".next-button").forEach(button => {
        button.addEventListener("click", () => flipPage("next"));
    });

    document.querySelectorAll(".prev-button").forEach(button => {
        button.addEventListener("click", () => flipPage("prev"));
    });
});

