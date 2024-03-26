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

const testPersons = [
    "Trần Văn An",
    "Lê Thị Bích",
    "Phạm Ngọc Cảnh",
    "Đỗ Thị Dung",
    "Nguyễn Văn Duy",
    "Lê Thị Hà",
    "Trần Văn Hải",
    "Nguyễn Thị Hương",
    "Phạm Ngọc Hưng",
    "Vũ Thị Huyền",
    "Lê Văn Kiên",
    "Trần Thị Lan",
    "Nguyễn Văn Long",
    "Phạm Thị Mai",
    "Đỗ Văn Nam",
    "Lê Thị Nga",
    "Trần Văn Phong",
    "Nguyễn Thị Phương",
    "Phạm Ngọc Quân",
    "Vũ Thị Thanh",
    "Lê Văn Tùng",
    "Trần Thị Tuyết",
    "Nguyễn Văn Tuấn",
    "Phạm Thị Vân",
    "Đỗ Văn Vinh",
    "Lê Thị Xuân",
    "Trần Văn Xuyên",
    "Nguyễn Thị Yến",
    "Phạm Ngọc",
    "Vũ Thị Ánh",
    "Lê Văn Bình",
    "Trần Thị Chi",
    "Nguyễn Văn Dũng",
    "Phạm Thị Dung",
    "Đỗ Văn Duy",
    "Lê Thị Hà",
    "Trần Văn Hải",
    "Nguyễn Thị Hiền",
    "Phạm Ngọc Huy",
    "Vũ Thị Hằng",
    "Lê Văn Kiên",
    "Trần Thị Lan",
    "Nguyễn Văn Long",
    "Phạm Thị Mai",
    "Đỗ Văn Nam",
    "Lê Thị Nga",
    "Trần Văn Phong",
    "Nguyễn Thị Phương",
    "Phạm Ngọc Quân",
    "Vũ Thị Thanh",
    "Lê Văn Tùng",
    "Trần Thị Tuyết",
    "Nguyễn Văn Tuấn",
    "Phạm Thị Vân",
    "Đỗ Văn Vinh",
    "Lê Thị Xuân",
    "Trần Văn Xuyên",
    "Nguyễn Thị Yến",
    "Phạm Ngọc",
    "Vũ Thị Ánh",
    "Lê Văn Bình",
    "Trần Thị Chi",
    "Nguyễn Văn Dũng",
    "Phạm Thị Dung",
    "Đỗ Văn Duy",
]
const root = document.getElementById("listMembers");
testPersons.forEach((name, index) => {
    let A = document.createElement("a");
    A.className = "Acontent__sidebar__element__content__element";
    A.href = "#";
    A.innerText = `${name}`;

    root.appendChild(A);
})

document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.body-center1__bodyTable__nav__element');
    elements.forEach(function (element) {
        element.addEventListener('click', function () {
            elements.forEach(function (el) {
                el.classList.remove('bc1_nav-active');
                el.classList.add('bc1_nav-normal');
            });
            this.classList.remove('bc1_nav-normal');
            this.classList.add('bc1_nav-active');
        });
    });
});

function showTable(id = "body-center1__UPDATELATER") {
    document.querySelectorAll(".Acontent__gridTable__element").forEach(function (element) {
        element.style.display = "none";
    });

    document.getElementById(id).style.display = "flex";
}

function showListYears(e) {
    e.getElementsByTagName("i")
}