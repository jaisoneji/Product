var hamburger = document.getElementById('hamburger')
var responsive_nav = document.getElementsByClassName('responsive-nav')
var isOpen = false
hamburger.addEventListener('click',()=>{
    isOpen = !isOpen
    if(isOpen){
        responsive_nav[0].style.display = "flex"
    }
    else{
        responsive_nav[0].style.display = "none"
    }
})