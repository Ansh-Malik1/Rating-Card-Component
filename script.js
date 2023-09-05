const rating = document.querySelectorAll(".rate")
const rated= document.querySelector("[rated]")
const container1 = document.querySelector(".container")
const container2= document.querySelector(".thanksContainer")
const submit= document.querySelector("[submit]")

container1.classList.add("active")

function color(value){
    rating.forEach(element=>{
        if(value.target!=element)
        element.classList.remove('activeColor')
        else{
            value.target.classList.toggle("activeColor")
        }
    })
    
}

var flag= 0
var text=''
function ratingText(value){ 
   
    rating.forEach(element=>{
        if(element.classList.contains("activeColor")){
            flag= 1
            text=element.innerText
        }
    })
    //Important code...revise it many times//
    
    if(flag==1){
        console.log(text)
        rated.innerText=text
        container1.classList.remove("active")
        container2.classList.add("active")
    }
    else{
        alert("Please Select rating before submitting")
    }
  
}
rating.forEach(element=>{
    element.addEventListener('click',color)
})

submit.addEventListener("click",ratingText)