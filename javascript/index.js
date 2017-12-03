var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})

var waypoint = new Waypoint({
      element: document.getElementById('waypoint'),
      handler: function(direction) {
        if(direction ==='down'){
            $('.nb-nav-bg').css("background-color","black");
            $('.tagline').css("font-size","2.5vmin");
            $('.logo a').css("font-size","4vmin"); }
        else if(direction === 'up')
            {
            $('.nb-nav-bg').css("background-color","transparent");
            $('.tagline').css("font-size","3vmin");
            $('.logo a').css("font-size","5vmin");
            }
      },
        offset: 100
    })

window.sr = ScrollReveal({reset: true});
sr.reveal('.service-item', {duration: 1000});
sr.reveal('.card',{
    duration:700,
    origin: 'left',
    easing: 'linear' 
},100)

$(document).ready(function(){
    $('#scroll').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
})
