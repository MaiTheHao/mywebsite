// Tạo một hàm để thêm header vào trang web
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
                            <a href = "thong_tin_thanh_vien.html" title = "Link to Profile" target = "_self" id="header__user--name">USER NAME</a>
                            <img src="pic/user_avatar.jpg" title = "USER AVATAR" alt="USER AVATAR" id="header__user--avatar">
                            <button class = "fa-solid fa-bars" id = "header__sidebar__button" onclick = set_side_bar()></button>
                            <div id = "header__hideSidebar">
                                <a href="" class="hideSidebar__option" id = "logOut"><i class="fa-solid fa-right-to-bracket"></i><span>Đăng xuất</span></a>
                                <a href="" class="hideSidebar__option" id = "none"><i class="fa-solid fa-gears"></i><span>Đang hoàn thiện ...</span></a>
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
                    <a href="thong_tin_thanh_vien.html" class="header-nav__menu--element navbutton" id = "page1">THÀNH VIÊN</a>
                    <a href="thong_tin_lop.html" class="header-nav__menu--element navbutton" id = "page2">LỚP</a>
                    <a href="thong_tin_nhom.html" class="header-nav__menu--element navbutton" id = "page3">NHÓM</a>
                    <a href="thu_vien.html" class="header-nav__menu--element navbutton" id = "page4">THƯ VIỆN</a>
                    <a href="gioi_thieu.html" class="header-nav__menu--element navbutton" id = "page5">GIỚI THIỆU</a>
                    <a href="cap_nhat_tt.html" class="header-nav__menu--element navbutton" id = "page6">CẬP NHẬT THÔNG TIN</a>
                    <a href="thi_dua.html" class="header-nav__menu--element navbutton" id = "page7">THI ĐUA</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">ĐĂNG NHẬP-TEST</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton" style = "color: gray">TEST ELEMENT</a>
                </div>
            </div>
        <div class = "paddingRight"></div>
        </div>
    </div>
    `;
    // Thêm header vào phần đầu của body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

function createDate(){
    // Đặt ngày bắt đầu YYYY-MM-DD
    let input = '2023-08-28';
    const startDate = new Date(input); 
    let dayInWeek = startDate.getDay();
    if ( dayInWeek > 1){
        startDate.setDate(startDate.getDate() - (startDate.getDay() - 1))
    } else {
        if (dayInWeek == 0){
            startDate.setDate(startDate.getDate() - (startDate.getDay() - 7))
        }
    }

    // Lấy ngày hiện tại
    var _currentDate = new Date();

    // Tính số tuần kể từ ngày bắt đầu
    var weekNumber = Math.floor((_currentDate - startDate) / (7 * 24 * 60 * 60 * 1000)) + 1;

    // Định dạng kiểu DD/MM/YYYY
    var day = _currentDate.getDate();
    var month = _currentDate.getMonth() + 1;
    var year = _currentDate.getFullYear();
    const formattedDate = `${(day < 10) ? `0${day}` : day}/${(month < 10) ? `0${month}` : month}/${year}`

    // Cập nhật số tuần, ngày
    document.getElementById('week-number').textContent = "Tuần "+weekNumber;
    document.getElementById('current-date').textContent = ", "+formattedDate;

    let addWeekElement = document.getElementsByClassName('add__week-number');
    for (let i = 0; i < addWeekElement.length; i++) {
        addWeekElement[i].textContent = weekNumber;
    }

    let addYearElement = document.getElementsByClassName('add__year-number');
    for (let i = 0; i < addYearElement.length; i++) {
        addYearElement[i].textContent = year;
    }
}   

// Gọi hàm addHeader khi trang web được tải
window.onload = function(){
    addHeader();
    createDate();
    // let links = [
    //     "css/base.css",
    //     "css/header.css",
    //     "css/dang_nhap/body.css",
    //     "css/gioi_thieu/body.css",
    //     "css/thong_tin_lop/body.css",
    //     "css/thong_tin_nhom/body.css",
    //     "css/thong_tin_thanh_vien/body.css",
    //     "css/thu_vien/body.css",
    //     "css/thu_vien/sidebar.css",
    //     "css/trang_chu/body.css"
    // ];
    
    // for (let i = 0; i < links.length; i++) {
    //     let link = document.createElement('link');
    //     link.rel = 'stylesheet';
    //     link.href = links[i];
    //     document.head.appendChild(link);
    // }
}