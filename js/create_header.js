// Tạo một hàm để thêm header vào trang web
function addHeader() {
    // Mã HTML của header
    var headerHTML = `
    <!-- KHỞI TẠO HEADER -->
    <div class="header grid">
        <!-- KHUNG HEADER -->
        <div class="header__grid">
            <!-- PHẦN CHÍNH CỦA HEADER -->
            <div class="header-title">
                <!-- BÊN TRÁI HEADER -->
                <div class="header-title--left header-title--elements">
                    <div class="header-title--left-icon">
                        <div class="header-title--left-icon--block">
                            <img src="./pic/school_icon.png" alt="school">
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
                                        <img class = "header-title--right-buttons-menu--show-elements--qrc" alt = "QR Code" src = "./pic/QRCode.png">
                                        <i class = "header-title--right-buttons-menu--show-elements--fbi fa-brands fa-facebook fa-fade"> Facebook</i>
                                    </a> 
                                </ul>
                            </div>
                        </div>
                        <!-- NÚT LOGIN VÀ SIGNUP -->
                        <div class="login-signup header-title--right-buttons--elements">
                            <a class = "login button">LOGIN</a>
                            <a class = "signup button">SIGN UP</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-nav">
                <!-- THANH SIDEBAR ẨN -->
                <div class = "header-nav__sidebar-button" id = "main-sidebar--block">
                    <button class = "fa-solid fa-caret-down" id = "main-sidebar--button" onclick = set_side_bar()></button>
                    <div id="main-sidebar--hideblock">
                        <iframe src = "sidebar.html"></iframe>
                    </div>
                </div>
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
                    <a href="index.html" class="header-nav__menu--element navbutton">TRANG CHỦ</a>
                    <a href="thong_tin_hs.html" class="header-nav__menu--element navbutton">HỌC SINH</a>
                    <a href="thong_tin_lop.html" class="header-nav__menu--element navbutton">LỚP</a>
                    <a href="thong_tin_clb.html" class="header-nav__menu--element navbutton">NHÓM</a>
                    <a href="thu_vien.html" class="header-nav__menu--element navbutton">THƯ VIỆN</a>
                    <a href="hoat_dong.html" class="header-nav__menu--element navbutton">HOẠT ĐỘNG</a>
                    <a href="gioi_thieu.html" class="header-nav__menu--element navbutton">GIỚI THIỆU TRƯỜNG</a>
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

// SEARCH_BAR
function set_search_bar(){
    let search_bar = document.getElementById("search--bar");
    let style = window.getComputedStyle(search_bar);
    let animation = style.animationName;
    search_bar.style.display = "flex";

    if(animation == "fade-out"){
        search_bar.style.animationName = "fade-in";
    } else if (animation == "fade-in"){
        search_bar.style.animationName = "fade-out";
    } else {
        search_bar.style.animationName = "fade-in";
    };
    
}