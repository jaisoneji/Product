var hamburger = document.getElementById('hamburger')
var responsive_nav = document.getElementsByClassName('responsive-nav')
var featureIcon = document.getElementsByClassName('feature-i')
var isOpen = false
var body = document.getElementsByTagName('body')
var widthh
hamburger.addEventListener('click',()=>{
    isOpen = !isOpen
    if(isOpen){
        responsive_nav[0].style.display = "flex"
    }
    else{
        responsive_nav[0].style.display = "none"
    }
})

// -Icon resizing coe------
body[0].addEventListener('load',iconResize())
function iconResize(){
    this.width = window.innerWidth
    if(this.width > 600){
        console.log(featureIcon)
        for(let i=0;i<featureIcon.length;i++){
            featureIcon[i].classList.remove('fa-2x')
            featureIcon[i].style.height = '2rem';
            featureIcon[i].style.fontSize = '24px';
        }
    }
    
}