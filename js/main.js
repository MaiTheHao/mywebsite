var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onresize = function x(){
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};
console.log("width ", width, " height",height);

// CLICK -> SUMMON SIDE BAR
function set_side_bar(){
    let sidebar = document.getElementById("main-sidebar--hideblock");
    let button = document.getElementById("main-sidebar--button");
    let attr = sidebar.style.visibility;

    if(attr != "visible"){
        document.getElementById("main-sidebar--hideblock").style.visibility = "visible";
        button.style.transform = "rotateX(180deg)";
    } else {
        document.getElementById("main-sidebar--hideblock").style.visibility = "hidden";
        button.style.transform = "rotateX(0deg)";
    };
}