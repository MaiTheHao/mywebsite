const tableFields = document.getElementById("field");
const tableDocuments = document.getElementById("documents");

const routeDocuments = (id) => {
    tableFields.style.display = "none";
    tableDocuments.style.display = "flex";
}

const routeFields = (id) => {
    tableFields.style.display = "grid";
    tableDocuments.style.display = "none";
}

[...document.getElementsByClassName("field__column__element")].forEach(element => element.addEventListener("click", (event) => routeDocuments(event.currentTarget.id)));
document.getElementById("returntotablefields").addEventListener("click", routeFields)
