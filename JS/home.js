
// 監聽滾動事件
window.addEventListener('scroll', function () {
  var backToTopBtn = document.getElementById('back-to-top');
  if (window.scrollY > 20 || document.documentElement.scrollTop > 20) {
    // 滾動位置大於 20 時顯示按鈕
    backToTopBtn.style.display = 'block';
  } else {
    // 滾動位置小於等於 20 時隱藏按鈕
    backToTopBtn.style.display = 'none';
  }
});

window.addEventListener('scroll', function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  //獲得Nav元素
  var navbar = document.getElementById('navbar');
  //獲得Nav高度
  var navbarHeight = navbar.offsetHeight;
  //判斷滾動位置
  if (scrollTop > navbarHeight) {
    //添加背景色
    navbar.classList.add('navbar-scroll');
  } else {
    //移除背景色
    navbar.classList.remove('navbar-scroll');
  }
});

//預設載入時讀取 介紹 introduce
window.addEventListener('DOMContentLoaded', (event) => {
  //選取"元素
  const introduce = document.querySelector('#introduce');
  const clickEvent = new MouseEvent('click',{
    bubbles: true,
    cancelable: true,
    view: window
  });
  introduce.dispatchEvent(clickEvent);
});

