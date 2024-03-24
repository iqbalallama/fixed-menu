const navbar = document.getElementById('navbar');
window.onscroll = function(){
    const scrollings = window.scrollY;
    if(scrollings >= 100){
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')
    }
}
