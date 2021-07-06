const button = document.querySelector('.menu__btn');
const menu = document.querySelector('.mobile__menu');

if(button){
button.addEventListener('click',function(){
    menu.classList.toggle("active");
})
}