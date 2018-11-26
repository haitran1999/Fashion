let bar = document.querySelector('.toggle');
let menu = document.querySelector('.menu-right');
let logo = document.querySelector('.logo');
 
bar.addEventListener('click', ()=>{
  menu.classList.toggle('active');
})
 



$(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 2000
    });
  $(window).scroll(function(){
    let height  = $('*').scrollTop();
    if(height > 100){
      $('.navbar').addClass('active');
      
       
    }else if(height < 100){
      $('.navbar').removeClass('active');
      $('.logo').addClass('active');
    }
  })

  $('#home').click(function(){
    $('*').animate({scrollTop: $('.top1').offset().top}, 1600, 'easeOutCubic');
  })
  $('#about').click(()=>{
    $('*').animate({scrollTop: $('.journex').offset().top}, 1600, 'easeOutCubic');
  })
  $('#demos').click(()=>{
    $('*').animate({scrollTop: $('.demos').offset().top}, 1600, 'easeOutCubic');
  })
  $('#benefit').click(()=>{
    $('*').animate({scrollTop: $('.whychoose').offset().top}, 1600, 'easeOutCubic');
  })
  $('#3step').click(()=>{
    $('*').animate({scrollTop: $('.threestep').offset().top}, 1600, 'easeOutCubic');
  })
  $('#subscribe').click(()=>{
    $('*').animate({scrollTop: $('.footer').offset().top}, 1600, 'easeOutCubic');
  })
  

})