(function($){
  $(document).ready(function (){

    var $btn = $('.btn');

    $btn.on('click', function(){
      console.log('Click');
      if( $btn.hasClass('open') ){
        //$btn.removeClass('open');
      }
      else{

        $btn.find('p').fadeOut(1000);
        var path = document.querySelector('.btn-border');
        var length = path.getTotalLength();
        // Clear any previous transition
         path.style.transition = path.style.WebkitTransition = 'none';
         // Set up the starting positions
         path.style.strokeDasharray = length + ' ' + length;
         path.style.strokeDashoffset = 0;
         // Trigger a layout so styles are calculated & the browser
         // picks up the starting position before animating
         path.getBoundingClientRect();
         // Define our transition
         path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in';
           // Go!
           path.style.strokeDashoffset = '-'+length;
        //$btn.addClass('open');
      }
    });

  });
})(window.jQuery);
