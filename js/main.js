var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onresize = function x(){
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};
console.log("HELLO WWW: width ", width, " height",height);

// CLICK -> SUMMON SIDE BAR
function set_side_bar(){
    let sidebar = document.getElementById("header__hideSidebar");
    let button = document.getElementById("header__sidebar__button");
    let attr = sidebar.style.visibility;

    if(attr != "visible"){
        document.getElementById("header__hideSidebar").style.visibility = "visible";
        button.style.opacity = "0.5"
    } else {
        document.getElementById("header__hideSidebar").style.visibility = "hidden";
        button.style.opacity = "1"
    };
}

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

// CHỈNH SỬA THÔNG TIN
function show_updateInfoDiv(type){ //Hàm tạo bảng
    let e = document.getElementById("updateInfoDiv__hideBlock")
    let block = null
    if (e.style.display == "none"){
        e.style.display = "flex"
    } else {
        if(e.style.display == "flex"){
            e.style.display = "none"
        }else{
            e.style.display = "flex"
        }
    }

    let block1 = document.getElementById("updateInfoDiv__hideBlock__pic")
    let block2 = document.getElementById("updateInfoDiv__hideBlock__information")

    if(type == 0){
        block1.style.display = "block"
        block2.style.display = "none"
        
    } else {
        block1.style.display = "none"
        block2.style.display = "block"

    }   
}

function cancelUpdate(type){ //Hàm reset
    if(type == 0){
        var formBlock = document.getElementById("updateInfoDiv__hideBlock__pic")
    } else {
        var formBlock = document.getElementById("updateInfoDiv__hideBlock__information")
    }   

    let listInput = formBlock.getElementsByClassName("updateInfoInput")
    for(let i = 0; i < listInput.length; i++){
        if(listInput[i].type != "checkbox"){
            listInput[i].value = '';
        } else {
            listInput[i].checked = false;
        }
    }
}

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
    //     "css/trang_chu/body.css",
    //     "css/cap_nhat_tt/body.css",
    //     "css/thi_dua/body.css"
    // ];
    
    // for (let i = 0; i < links.length; i++) {
    //     let link = document.createElement('link');
    //     link.rel = 'stylesheet';
    //     link.href = links[i];
    //     document.head.appendChild(link);
    // }
}