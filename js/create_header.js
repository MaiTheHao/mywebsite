// Tạo một hàm để thêm header vào trang web
function addHeader() {
    // Mã HTML của header
    var headerHTML = `
    <!-- KHỞI TẠO HEADER -->
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
                            <p><i class="fa-solid fa-book" style="color: rgb(255, 255, 255)"></i> HUYNH VAN NGHE HIGH SCHOOL</p>
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
            <div class="header-nav">
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
                    <a href="index.html" class="header-nav__menu--element navbutton--active">TRANG CHỦ</a>
                    <a href="thong_tin_thanh_vien.html" class="header-nav__menu--element navbutton--normal">THÀNH VIÊN</a>
                    <a href="thong_tin_lop.html" class="header-nav__menu--element navbutton--normal">LỚP</a>
                    <a href="thong_tin_nhom.html" class="header-nav__menu--element navbutton--normal">NHÓM</a>
                    <a href="thu_vien.html" class="header-nav__menu--element navbutton--normal">THƯ VIỆN</a>
                    <a href="gioi_thieu.html" class="header-nav__menu--element navbutton--normal">GIỚI THIỆU</a>
                    <a href="dang_nhap.html" class="header-nav__menu--element navbutton--normal" style = "color: gray">CHỨC NĂNG THỬ NGHIỆM (ĐĂNG NHẬP)</a>
                </div>
            </div>
        </div>
    </div>
    `;
    // Thêm header vào phần đầu của body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Gọi hàm addHeader khi trang web được tải
window.onload = addHeader;