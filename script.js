const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

//control nav items animation
function navAnimation(direction1, direction2){
  navItems.forEach((item,index) => {
    item.classList.replace(`slide-${direction1}-${index+1}`, `slide-${direction2}-${index+1}`);
  })
}

function toggleNav(){
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-show');
    if(overlay.classList.contains('overlay-show')){
     //show Nav items
     navAnimation('out', 'in');
    }else{
      //hide Nav items
      navAnimation('in', 'out');
    }
}

//Event listerners
menuBars.addEventListener('click', toggleNav);

navItems.forEach(item => {
  item.addEventListener('click', toggleNav);
});