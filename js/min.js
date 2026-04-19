document.querySelector("#form").addEventListener("submit", function(event){

var works = document.querySelector("#works").value;
var resulte = document.querySelector("#resulte");

if(works === ""){
alert("Please enter a work to add.");
event.preventDefault();

}else{


    
    var myLi = document.createElement("li");
    myLi.innerHTML = works;
    resulte.append(myLi);
    document.querySelector("#works").value = ""; 
    event.preventDefault();
}




})
