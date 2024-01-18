var list_element = [];

function addEvent(){
    let elements = document.getElementsByClassName("element");
    
    for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener("click", function(e){

            list_element = document.getElementsByClassName("element");
            for(let j = 0; j < elements.length; j++){
                if(elements[j].className.includes("active")){
                    elements[j].className = elements[j].className.replace("active", "none")
                }
            }

            let c = e.currentTarget.className.replace("none", "active")
            e.currentTarget.className = c
        })
    }
}