function setHeight(id, btn) {
    let element = document.getElementById(id);

    if (element.style.height == "max-content") {
        document.getElementById(id).style.height = 0;
        btn.getElementsByTagName("i")[0].style.transform = "rotate(180deg)";
        btn.getElementsByTagName("span")[0].textContent = " ALL";

    } else {
        document.getElementById(id).style.height = "max-content";
        btn.getElementsByTagName("i")[0].style.transform = "rotate(0deg)";
        btn.getElementsByTagName("span")[0].textContent = " HIDE";
    }
}

function showListYears(e) {
    e.getElementsByTagName("i")
}

document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.body-center2__bodyTable__nav__element');
    elements.forEach(function (element) {
        element.addEventListener('click', function () {
            elements.forEach(function (el) {
                el.classList.remove('bc2_nav-active');
                el.classList.add('bc2_nav-normal');
            });
            this.classList.remove('bc2_nav-normal');
            this.classList.add('bc2_nav-active');
        });
    });
});

function showTable(id) {
    document.querySelectorAll(".Acontent__gridTable__element").forEach(function (element) {
        element.style.display = "none";
    });

    document.getElementById(id).style.display = "flex";
}