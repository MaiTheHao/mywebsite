function changeTypeList(btn) {
    let e = document.getElementById("body0-Acontent__table__contentList--type1")
    let c = document.getElementById("body0-Acontent__table__contentList--type0")
    if (e.style.display != "block") {
        e.style.display = "block";
        c.style.display = "none";
        btn.getElementsByTagName("span")[0].textContent = "Shortage"
    } else {
        c.style.display = "block";
        e.style.display = "none";
        btn.getElementsByTagName("span")[0].textContent = "Full"
    }

}