document.addEventListener('DOMContentLoaded', () => {
  //Бургерное меню
  const header_burger = document.querySelector('.header_burger');
  const burger_close = document.querySelector('.burger_close');
  const menu = document.querySelector('.burger_content');
  //Открываем бургер
  header_burger.addEventListener('click', () => {    
    menu.classList.add('active');
    setTimeout(() => {
      menu.style.transition = 'right .3s ease';
    }, 1);    
  });
  //Закрываем бургер
  burger_close.addEventListener('click', () => {
    menu.classList.remove('active');
    setTimeout(() => {
      menu.style.transition = '';
    }, 300);
  })
});