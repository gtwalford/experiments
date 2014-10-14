// SVG Line Animation
// Based on work from Jake Archibald - http://jakearchibald.com/2013/animated-line-drawing-svg/

(function($){
  $(document).ready(function (){

    var $btn = $('.btn'),
        $cssBtn = $('.css-btn'),
        $newBtn = $('.new-btn'),
        btnBorder = document.querySelector('.btn-border'),
        btnBorderLength = btnBorder.getTotalLength(),
        closeBorder = document.querySelector('.close-btn-border'),
        closeBorderLength = closeBorder.getTotalLength(),
        closeX = document.querySelector('.close-x');

    $cssBtn.on('click', function(){
      if( $cssBtn.hasClass('open') ){
        $cssBtn.removeClass('open').addClass('closed');
      }
      else {
        $cssBtn.removeClass('closed').addClass('open');
      }
    });

    $newBtn.on('click', function(){
      if( $newBtn.hasClass('open') ){
        $newBtn.removeClass('open').addClass('closed');
        console.log( document.querySelector('.new-close-btn-border').getTotalLength() );
      }
      else {
        $newBtn.removeClass('closed').addClass('open');
      }
    });

    $btn.on('click', function(){

      // If Button is Open
      if( $btn.hasClass('open') ){

        // Remove open class when closing

        $btn.find('p').fadeIn(1000);

        // Clear any previous transition
        btnBorder.style.transition = btnBorder.style.WebkitTransition = 'none';

        closeBorder.style.transition = closeBorder.style.WebkitTransition = 'none';

        // Set up the starting positions
        btnBorder.style.strokeDasharray = btnBorderLength + ' ' + btnBorderLength;
        btnBorder.style.strokeDashoffset = '-' + btnBorderLength;

        closeBorder.style.strokeDasharray = closeBorderLength + ' ' + closeBorderLength;
        closeBorder.style.strokeDashoffset = 0;

        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        btnBorder.getBoundingClientRect();

        closeBorder.getBoundingClientRect();

        // Define our transition
        btnBorder.style.transition = btnBorder.style.WebkitTransition = 'stroke-dashoffset 1s ease-out';

        closeBorder.style.transition = closeBorder.style.WebkitTransition = 'stroke-dashoffset 1s ease-in';

        // Go
        closeBorder.style.strokeDashoffset = '-' + closeBorderLength;
        $('.close-btn-x').fadeOut(500);

        setTimeout( function(){
          btnBorder.style.strokeDashoffset = 0;
          $btn.removeClass('open');
        }, 950);

      }
      // Otherwise if button is not Open
      else{

        // Add Class for open state
        $btn.addClass('open');

        // Fade out button text
        $btn.find('p').fadeOut(1000);

        // Clear any previous transition
        btnBorder.style.transition = btnBorder.style.WebkitTransition = 'none';

        closeBorder.style.transition = closeBorder.style.WebkitTransition = 'none';

        // Set up the starting positions
        btnBorder.style.strokeDasharray = btnBorderLength + ' ' + btnBorderLength;
        btnBorder.style.strokeDashoffset = 0;

        closeBorder.style.strokeDasharray = closeBorderLength + ' ' + closeBorderLength;
        closeBorder.style.strokeDashoffset = '-' + closeBorderLength;

        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        btnBorder.getBoundingClientRect();

        closeBorder.getBoundingClientRect();

        // Define our transition
        btnBorder.style.transition = btnBorder.style.WebkitTransition = 'stroke-dashoffset 1s ease-in';

        closeBorder.style.transition = closeBorder.style.WebkitTransition = 'stroke-dashoffset 1s ease-out';

        // Go
        btnBorder.style.strokeDashoffset = '-' + btnBorderLength;

        setTimeout( function(){
          closeBorder.style.strokeDashoffset = 0;
          $('.close-btn-x').fadeIn(500);
        }, 950);

      }
    });

  });
})(window.jQuery);
