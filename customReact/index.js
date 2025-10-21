const div = document.querySelector("#root")
let counter=0;
const element = document.createElement("button");
element.id = "button"
element.innerHTML = ` + ${counter}`;
div.appendChild(element);
div.addEventListener("click", function(e){
    if(e.target.id === "button"){
        counter++;
        element.innerHTML = ` + ${counter}`
        console.log(counter);
    }
})
