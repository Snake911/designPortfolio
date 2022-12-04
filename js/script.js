document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
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
      speed: 1000
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

  //Скрываем/показываем больше 4 элементов в блоке Обучение
  function hideTraining() {
    const trainingElements = document.querySelectorAll('.training_item');
    const trainingMore = document.querySelector('.training_more');
    const trainingHide = document.querySelector('.training_hide');
    if(trainingElements.length > 4) {
      trainingElements.forEach(function(element, index) {
        if(index > 3) {
          element.classList.add('hidden');
        }
      });
      trainingMore.classList.remove('hidden');
      trainingHide.classList.add('hidden');
      trainingMore.addEventListener('click', showTraining);
    }    
  }
  hideTraining();

  function showTraining() {
    const trainingElements = document.querySelectorAll('.training_item');
    const trainingMore = document.querySelector('.training_more');
    const trainingHide = document.querySelector('.training_hide');
    trainingElements.forEach(function(element, index) {      
      element.classList.remove('hidden');      
    });
    trainingHide.classList.remove('hidden');
    trainingMore.classList.add('hidden');
    trainingHide.addEventListener('click', hideTraining);
  }

  //видео
  const videos = document.querySelectorAll('video');
  videos.forEach((video) => {
    video.addEventListener('click', function() {
      if(video.paused) {
        videos.forEach((otherVideo) => {
          if(!otherVideo.paused) {
            otherVideo.pause();
            otherVideo.parentElement.classList.remove('played');
          }
        });
        video.play();
        video.parentElement.classList.add('played');
      } else {        
        video.pause();
        video.parentElement.classList.remove('played');
      }
    });
    
    video.addEventListener('ended', function() {
      video.parentElement.classList.remove('played');
    });
  });
  
  // const lists = document.querySelectorAll('.reviews_list');
  // const html = document.querySelector('html');
  // document.addEventListener('scroll', function(event) {
  //   lists.forEach(function(list, index) {
  //     const bottom = list.getBoundingClientRect().bottom - list.getBoundingClientRect().height;
  //     var scrollPosition = [
  //       self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
  //       self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
  //     ];
  //     if(/*list.scrollLeft >= 0 && list.scrollLeft + list.clientWidth < list.scrollWidth*/ bottom < 0) {        
  //       html.style.overflow = 'hidden';
  //       window.scrollTo(scrollPosition[0], scrollPosition[1]);
  //     } else {
  //       html.style.overflow = 'initial';
  //       window.scrollTo(scrollPosition[0], scrollPosition[1]);
  //     }
  
  //     if(list.scrollLeft > 0 && event.deltaY < 0) {
  //       event.preventDefault();
  //     }
      
  //     list.scrollBy({
  //       left: event.deltaY * 2
  //     });
  //   });
  // }); 
});