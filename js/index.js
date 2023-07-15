//zoomanimation
function scale(){
  //スクロールの一を取得
  const scroll = window.scrollY;
  //mainvisualの幅を変更する
  const imgs = document.querySelectorAll('.mainhead_image img');
 imgs.forEach(function(img){
  if(window.innerWidth > 900){
    img.style.width = 100/3 + scroll/10 + '%';
  }else {
    img.style.width = 100 - scroll/10  + '%'
  }
 });
}
["load", "resize", "scroll"].forEach(function (evt) {
  window.addEventListener(evt, scale);
});

//header scroll
const HeaderElement = document.getElementById('header_wrapper');

window.addEventListener('scroll', function(){
 const ScrollTriger = 550;
if(window.scrollY > ScrollTriger){
   HeaderElement.classList.add('.show')
  }else if(window.scrollY < ScrollTriger){
   HeaderElement.classList.remove('.show')
  }
});

//hambugermenu
const menubutton = document.getElementById('menu_button');
const nav = document.getElementById('nav');

menubutton.addEventListener('click', function(){
  this.classList.toggle('.active');
  nav.classList.toggle('.active');
})

//scrollanimation
const targetElement = document.querySelectorAll('.animation-target');

document.addEventListener('scroll', function(){
  for (let i = 0; i < targetElement.length; i++) {
   const getElementDistance = targetElement[i].getBoundingClientRect().top
   + targetElement[i].clientHeight * 1

   if(window.innerHeight > getElementDistance){
    targetElement[i].classList.add('show-image');
   }
  }
})

//side_button scroll
const SideButton = document.getElementById('side_button');
window.addEventListener('scroll', function(){
  const ScrollTrigerTop = 1100;
  const ScrollTrigerBottom = 3300;

  if(window.scrollY >= ScrollTrigerTop && window.scrollY <= ScrollTrigerBottom){
   SideButton.classList.add('slide')
 } else{
  SideButton.classList.remove('slide')
 }
})


//scroll backgroundimage
//背景画像の要素取得
const BackgroundImage = document.getElementById('bg');
window.addEventListener('scroll', function(){
  //画面上部
  const TrigerTop = 3550;
 //画面下部
  const TrigerBottom = 4200;
  if(window.scrollY >= TrigerTop && window.scrollY <= TrigerBottom){
    feadeIn(BackgroundImage);
  }else{
    feadeOut(BackgroundImage);
  }
})

//feadeIn 関数
function feadeIn(element){
  element.style.display = 'block';
  element.style.opacity = '1';
}
//feadeOut 関数
function feadeOut(element){
  element.style.opacity = '0';
  
}