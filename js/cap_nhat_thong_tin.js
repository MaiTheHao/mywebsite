//DANH SÁCH DỮ LIỆU
const pageData = {
    members:{
        "H10125": "Nguyễn Thị Lan",
        "H10126": "Lê Văn Nam",
        "H10127": "Phạm Thị Hà",
        "H10128": "Vũ Văn Hùng",
        "H10129": "Đỗ Thị Mai",
        "H10130": "Trần Thị Dung",
        "H10131": "Nguyễn Văn Long",
        "H10132": "Lê Thị Nga",
        "H10133": "Phạm Văn Phong",
        "H10134": "Vũ Thị Bích",
        "H11135": "Trần Văn Tý",
        "H11136": "Nguyễn Thị Bích",
        "H11137": "Lê Văn Tèo",
        "H11138": "Phạm Thị Huệ",
        "H11139": "Vũ Văn An",
        "H11140": "Đỗ Thị Bình",
        "H11141": "Trần Văn Dũng",
        "H11142": "Nguyễn Thị Minh",
        "H11143": "Lê Văn Tuấn",
        "H11144": "Phạm Thị Thanh",
        "H12145": "Vũ Văn Đức",
        "H12146": "Đỗ Thị Loan",
        "H12147": "Trần Văn Hiệp",
        "H12148": "Nguyễn Thị Thúy",
        "H12149": "Lê Văn Dũng",
        "H12150": "Phạm Thị Lan",
        "H12151": "Vũ Thị Hằng",
        "H12152": "Đỗ Văn Tùng",
        "H12153": "Trần Thị Thanh",
        "H12154": "Nguyễn Văn Hiếu",
        "H12155": "Vũ Thị Hằng",
        "H12156": "Đỗ Văn Tùng",
        "H12157": "Trần Thị Thanh",
        "H12158": "Nguyễn Văn Hiếu",
    } // MÃ ĐỊNH DANH "H"
    ,
    groups:{
        // QUAN TRỌNG NHẤT
        "G10001": "Ban giám hiệu trường Huỳnh Văn Nghệ",
        "G10002": "Chi hội Đảng bộ trường Huỳnh Văn Nghệ",
        "G10003": "Công đoàn trường Huỳnh Văn Nghệ",
        "G10004": "Liên đoàn Lao động trường Huỳnh Văn Nghệ",
        "G10005": "Đoàn Thanh niên Cộng sản Hồ Chí Minh trường Huỳnh Văn Nghệ",
        // QUAN TRỌNG
        "G20001": "Ban phụ huynh học sinh trường Huỳnh Văn Nghệ",
        "G20002": "Câu lạc bộ Sáng tạo STEM",
        "G20003": "Câu lạc bộ Tiếng Anh",
        "G20004": "Đội tuyển học sinh giỏi",
        "G20005": "Câu lạc bộ Thể thao",
        "G20006": "Tuổi trẻ Huỳnh Văn Nghệ",
        // KHÔNG QUAN TRỌNG
        "G30001": "Nhóm Văn nghệ",
        "G30002": "Nhóm Báo chí",
        "G30003": "Nhóm Kỹ năng mềm",
        "G30004": "Nhóm thiện nguyện",
        "G30005": "Nhóm Cầu lông",
    } // MÃ ĐỊNH DANH "G"
    ,
    classes:{ 
        grades: {
            grd10: {
                "C1001": "10.01",
                "C1002": "10.02",
                "C1003": "10.03",
                "C1004": "10.04",
                "C1005": "10.05",
                "C1006": "10.06",
                "C1007": "10.07",
                "C1008": "10.08",
                "C1009": "10.09",
                "C1010": "10.10",
                "C1011": "10.11",
                "C1012": "10.12",
            },
            grd11: {
                "C1101": "11.01",
                "C1102": "11.02",
                "C1103": "11.03",
                "C1104": "11.04",
                "C1105": "11.05",
                "C1106": "11.06",
                "C1107": "11.07",
                "C1108": "11.08",
                "C1109": "11.09",
                "C1110": "11.10",
                "C1111": "11.11",
                "C1112": "11.12",
            },
            grd12: {
                "C1201": "12.01",
                "C1202": "12.02",
                "C1203": "12.03",
                "C1204": "12.04",
                "C1205": "12.05",
                "C1206": "12.06",
                "C1207": "12.07",
                "C1208": "12.08",
                "C1209": "12.09",
                "C1210": "12.10",
                "C1211": "12.11",
                "C1212": "12.12",
            },
        },
    } // MÃ ĐỊNH DANH "C"
};

const pages = {
    "members": pageData.members,
    "groups": pageData.groups,
    "classes": {...pageData.classes.grades.grd10, ...pageData.classes.grades.grd11, ...pageData.classes.grades.grd12},
    "scoreboards": null,
    "achievements": null,
    "year": null,
    "documents": null,
    "categories": null,
};

// Đối tượng HTML
const root = document.getElementById("content");

const searchInput = document.getElementById("bc6-sidebar__search");
const searchRoot = document.getElementById("searchResult");

const navPage = document.getElementsByClassName("bc6__nav__element")

// Biến
let currentPageId = "members";
let currentPage = document.getElementById(currentPageId);
let currentBase = pages[currentPageId];
let currentElementChosed = null

// Đặt sự kiện
searchInput.addEventListener("input", (event) => handleInput(event.target.value));
Array.from(navPage).forEach((element) => element.addEventListener("click", (event) => handlePageChange(event.target)));

// Hàm xử lý
function handlePageChange(elementClicked){
    currentPage = document.getElementById(currentPageId)
    currentPage.className = currentPage.className.replace("active", "normal");
    elementClicked.className = elementClicked.className.replace("normal", "active");

    let pageID = elementClicked.id
    currentPageId = pageID;
    currentBase = pages[currentPageId];
    searchInput.value = "";
    searchRoot.innerHTML = "";
}

function handleInput(inputValue){
    const base = Object.entries(currentBase);
    if(inputValue.trim()){
        const result = base.filter(([key, value]) => value.toString().trim().toLowerCase().split(" ").join("").includes(inputValue.toString().trim().toLowerCase().split(" ").join("")));
        renderResult(result)
    } else {
        searchRoot.innerHTML = ""
    }   
}

function renderResult(base){
    searchRoot.innerHTML = "";
    base.forEach(([id, name]) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        const paragraph = document.createElement("p");
        listItem.className = "search__result";
        listItem.id = id;
        anchor.innerText = name;
        paragraph.innerText = "ID: "+id;
        listItem.appendChild(anchor);
        listItem.appendChild(paragraph);

        searchRoot.appendChild(listItem);
    });
}


// MAI THẾ HÀO - Frontend + Logic + WriteJS + Idea; NGUYỄN MINH TRÍ - Backend + Algorithm + Data + Idea