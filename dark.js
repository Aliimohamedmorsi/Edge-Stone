const root = document.documentElement;
const change = document.querySelector(".form-check-input")
var color = getComputedStyle(root).getPropertyValue('--primary-color')
console.log(color)
change.addEventListener('change',()=>{
    if(color == "white"){
        // console.log("HI")
        root.style.setProperty("--primary-color","rgb(35,47,71)")
        root.style.setProperty("--text-color","white")
        root.style.setProperty("--third-color","rgb(35,47,71)")
        color = getComputedStyle(root).getPropertyValue('--primary-color')
        localStorage.setItem("Dark","yes")
    }else{
        // console.log("BYE")
        root.style.setProperty("--primary-color","white")
        root.style.setProperty("--text-color","black")
        root.style.setProperty("--third-color","rgb(233,232,232)")
        color = getComputedStyle(root).getPropertyValue('--primary-color')
        localStorage.setItem("Dark","no")
    }
})
document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem("Dark") == "yes"){
        // console.log("HI")
        root.style.setProperty("--primary-color","rgb(35,47,71)")
        root.style.setProperty("--text-color","white")
        root.style.setProperty("--third-color","rgb(35,47,71)")
        color = getComputedStyle(root).getPropertyValue('--primary-color')
        localStorage.setItem("Dark","yes")
    }
})
