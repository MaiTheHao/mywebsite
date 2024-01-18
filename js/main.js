var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onresize = function x(){
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};
console.log("width ", width, " height",height);

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