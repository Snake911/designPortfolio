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
  });

  const projectSlider = document.getElementById('project_slider');
  if(projectSlider) {
    tns({
      container: '#project_slider',
      items: 1,
      slideBy: 1,
      nav: false,
      controlsContainer: '.project_slider-nav',
      loop: false,
      // mouseDrag: true,
    });
  }

  //Переносим стрелки в конец блока проекты
  if(window.outerWidth < 968) {
    const sliderNav = document.querySelector('.project_slider-nav');
    sliderNav.before(document.querySelector('.projects_right'));
  } else {
    const projectLeft = document.querySelector('.projects_left');
    projectLeft.after(document.querySelector('.projects_right'))
  }
  window.addEventListener('resize', function() {
    if(window.outerWidth < 968) {
      const sliderNav = document.querySelector('.project_slider-nav');
      sliderNav.before(document.querySelector('.projects_right'));
    } else {
      const projectLeft = document.querySelector('.projects_left');
      projectLeft.after(document.querySelector('.projects_right'))
    }
  });
});