var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onresize = function x() {
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};
console.log("HELLO WWW: width ", width, " height", height);

// CLICK -> SUMMON SIDE BAR
function set_side_bar() {
    let sidebar = document.getElementById("header__hideSidebar");
    let button = document.getElementById("header__sidebar__button");
    let attr = sidebar.style.visibility;

    if (attr != "visible") {
        document.getElementById("header__hideSidebar").style.visibility = "visible";
        button.style.opacity = "0.5"
    } else {
        document.getElementById("header__hideSidebar").style.visibility = "hidden";
        button.style.opacity = "1"
    };
}

// SEARCH_BAR
function set_search_bar() {
    let search_bar = document.getElementById("search--bar");
    let style = window.getComputedStyle(search_bar);
    let animation = style.animationName;
    search_bar.style.display = "flex";

    if (animation == "fade-out") {
        search_bar.style.animationName = "fade-in";
    } else if (animation == "fade-in") {
        search_bar.style.animationName = "fade-out";
    } else {
        search_bar.style.animationName = "fade-in";
    };

}

// CHỈNH SỬA THÔNG TIN
function show_updateInfoDiv(type) { //Hàm tạo bảng
    let e = document.getElementById("updateInfoDiv__hideBlock")
    let block = null
    if (e.style.display == "none") {
        e.style.display = "flex"
    } else {
        if (e.style.display == "flex") {
            e.style.display = "none"
        } else {
            e.style.display = "flex"
        }
    }

    let block1 = document.getElementById("updateInfoDiv__hideBlock__pic")
    let block2 = document.getElementById("updateInfoDiv__hideBlock__information")

    if (type == 0) {
        block1.style.display = "block"
        block2.style.display = "none"

    } else {
        block1.style.display = "none"
        block2.style.display = "block"

    }
}

function cancelUpdate(type) { //Hàm reset
    if (type == 0) {
        var formBlock = document.getElementById("updateInfoDiv__hideBlock__pic")
    } else {
        var formBlock = document.getElementById("updateInfoDiv__hideBlock__information")
    }

    let listInput = formBlock.getElementsByClassName("updateInfoInput")
    for (let i = 0; i < listInput.length; i++) {
        if (listInput[i].type != "checkbox") {
            listInput[i].value = '';
        } else {
            listInput[i].checked = false;
        }
    }
}

function createDate() {
    // Đặt ngày bắt đầu YYYY-MM-DD
    let input = '2023-08-28';
    const startDate = new Date(input);
    let dayInWeek = startDate.getDay();
    if (dayInWeek > 1) {
        startDate.setDate(startDate.getDate() - (startDate.getDay() - 1))
    } else {
        if (dayInWeek == 0) {
            startDate.setDate(startDate.getDate() - (startDate.getDay() - 7))
        }
    }

    // Lấy ngày hiện tại
    const _currentDate = new Date();

    // Tính số tuần kể từ ngày bắt đầu
    const weekNumber = Math.floor((_currentDate - startDate) / (7 * 24 * 60 * 60 * 1000)) + 1;

    // Định dạng kiểu DD/MM/YYYY
    const day = _currentDate.getDate();
    const month = _currentDate.getMonth() + 1;
    const year = _currentDate.getFullYear();
    const formattedDate = `${(day < 10) ? `0${day}` : day}/${(month < 10) ? `0${month}` : month}/${year}`

    // Cập nhật số tuần, ngày
    document.getElementById('week-number').textContent = "Tuần " + weekNumber;
    document.getElementById('current-date').textContent = ", " + formattedDate;

    let addWeekElement = document.getElementsByClassName('add__week-number');
    for (let i = 0; i < addWeekElement.length; i++) {
        addWeekElement[i].textContent = weekNumber;
    }

    let addYearElement = document.getElementsByClassName('add__year-number');
    for (let i = 0; i < addYearElement.length; i++) {
        addYearElement[i].textContent = year;
    }
}

function addHeader() {
    // Mã HTML của header
    let headerHTML = `
    <!-- KHỞI TẠO HEADER -->
    <link rel="stylesheet" href="css/header.css">
    <div class="header grid" id = "webHeader">
        <!-- KHUNG HEADER -->
        <div class="header__grid">
            <!-- PHẦN CHÍNH CỦA HEADER -->
            <div class="header-title">
                <!-- BÊN TRÁI HEADER -->
                <div class="header-title--left header-title--elements">
                    <div class="header-title--left-icon">
                        <div class="header-title--left-icon--block">
                            <img src="./pic/school_icon.jpg" alt="school">
                        </div>
                    </div>
                    <div class="header-title--left-sub">
                        <div class="header-title--left-sub--block">
                            <p>HVN-EDUCATION</p>
                            <i class="fa-solid fa-school"></i>
                        </div>
                    </div>
                </div>
                <!-- GIỮA HEADER -->
                <div class="header-title--center header-title--elements">
                    <div class="header-title--center-title">
                        <div class="header-title--center-title--block">
                            <img src = pic/HVN_icon.jpg>
                            <p>THPT HUỲNH VĂN NGHỆ</p>
                        </div>
                    </div>
                </div>
                <!-- PHẢI HEADER -->
                <div class="header-title--right header-title--elements">
                    <!-- CÁC NÚT -->
                    <div class="header-title--right-buttons">
                        <!-- NÚT LIÊN KẾT FACEBOOK VÀ QRCODE -->
                        <div class="header-title--right-buttons-menu header-title--right-buttons--elements">
                            <a class="header-title--right-buttons-menu--icon fa-brands fa-facebook"><p class = "h-m-p">facebook</p></a>   
                            <div class = "header-title--right-buttons-menu--show">
                                <ul>
                                    <a class = "header-title--right-buttons-menu--show-elements" title = "Link to Facebook HVN" href = "https://www.facebook.com/profile.php?id=100028020954560&mibextid=ZbWKwL" target = "_blank">
                                        <img class = "header-title--right-buttons-menu--show-elements--qrc" alt = "QR Code" src = "./pic/QRCode.jpg">
                                        <i class = "header-title--right-buttons-menu--show-elements--fbi fa-brands fa-facebook fa-fade"> Facebook</i>
                                    </a> 
                                </ul>
                            </div>
                        </div>
                        <!-- AVT, TÊN USER VÀ THANH TÙY CHỈNH-->
                        <div class="header__user header-title--right-buttons--elements">
                            <a href = "thanh_vien.html" title = "Link to Profile" target = "_self" id="header__user--name">USER NAME</a>
                            <img src="pic/user_avatar.jpg" title = "USER AVATAR" alt="USER AVATAR" id="header__user--avatar">
                            <button class = "fa-solid fa-bars" id = "header__sidebar__button" onclick = set_side_bar()></button>
                            <div id="header__hideSidebar">
                            <a href="" class="hideSidebar__option" id="logOut"><i class="fa-solid fa-right-to-bracket"></i><span>Đăng xuất</span></a>
                            <div href="" class="hideSidebar__option" id="utilities">
                              <div id="utilities__title"><p><i class="fa-solid fa-star"></i><span>Tiện ích</span></p><i style="font-size: 0.7em;" class="fa-solid fa-angle-down"></i></div>
                              <div id="utilities__element">
                                  <a href="" class="hideSidebar__option" id=""><i class="fa-solid fa-bomb"></i><span>Tiện ích 1</span></a>
                                  <a href="" class="hideSidebar__option" id=""><i class="fa-solid fa-wand-magic-sparkles"></i><span>Tiện ích 2</span></a>
                                  <a href="" class="hideSidebar__option" id=""><i class="fa-solid fa-heart"></i><span>Tiện ích 3</span></a>
                                  <a href="" class="hideSidebar__option" id=""><i class="fa-solid fa-hippo"></i><span>Tiện ích 4</span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-nav set-scrollbar--y">
                <!-- NÚT TÌM KIẾM -->
                <div class = "header-nav__search-block" id = "search--block">
                    <div class = "header-nav__search-block__button" id = "search--button">
                        <button class = "fa-solid fa-magnifying-glass header-nav__search-block__button--icon" onclick = set_search_bar()></button>
                    </div>
                    <div class = "header-nav__search-block__bar" id = "search--bar">
                        <input type = "text">
                    </div>
                </div>
                <!-- THANH ĐIỀU HƯỚNG -->
                <div class="header-nav__menu">
                    <div id = "header__clock"><span id="week-number"></span><span id="current-date"></span></div>  
                    <a href="index.html" class="header-nav__menu--element navbutton" id = "page0">TRANG CHỦ</a>
                    <a href="thanh_vien.html" class="header-nav__menu--element navbutton" id = "page1">THÀNH VIÊN</a>
                    <a href="lop.html" class="header-nav__menu--element navbutton" id = "page2">LỚP</a>
                    <a href="nhom.html" class="header-nav__menu--element navbutton" id = "page3">NHÓM</a>
                    <a href="thu_vien.html" class="header-nav__menu--element navbutton" id = "page4">THƯ VIỆN</a>
                    <a href="gioi_thieu.html" class="header-nav__menu--element navbutton" id = "page5">GIỚI THIỆU</a>
                    <a href="cap_nhat.html" class="header-nav__menu--element navbutton" id = "page6" target = "_blank">CẬP NHẬT THÔNG TIN</a>
                    <a href="thi_dua.html" class="header-nav__menu--element navbutton" id = "page7">THI ĐUA</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" id = "page8">E-LEARNING</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" id = "page9">HOẠT ĐỘNG ĐOÀN</a>
                    <a href="login.html" class="header-nav__menu--element navbutton">ĐĂNG NHẬP-TEST</a>
                    <a target="_blank" href="https://stealth-leo-c2e.notion.site/M-T-S-N-PH-M-D-N-SCHOOL-WEB-532aa687a4ca4a7fb94f0f37424c9085?pvs=4" class="header-nav__menu--element navbutton">LINK MÔ TẢ SẢN PHẨM</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="login.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                </div>
            </div>
        <div class = "paddingRight"></div>
        </div>
    </div>
    <div id="chatWithAi" onclick="chatWithAi()">
        <img src = pic/aiPic.jpg id="chatBotPicture">
    </div>
    <h1 id = "webNote">Đây chỉ là mô hình, dữ liệu chỉ là mô phỏng. <a target="_blank" href="https://stealth-leo-c2e.notion.site/M-T-S-N-PH-M-D-N-SCHOOL-WEB-532aa687a4ca4a7fb94f0f37424c9085?pvs=4"><i>link to workspace here</i></a></h1>
    `;
    // Thêm header vào phần đầu của body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

window.onload = function () {
    addHeader();
    createDate();

}

// MAI THẾ HÀO - Frontend + Logic + WriteJS + Idea; NGUYỄN MINH TRÍ - Backend + Algorithm + Data + Idea