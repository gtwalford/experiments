// SVG Line Animation
// Based on work from Jake Archibald - http://jakearchibald.com/2013/animated-line-drawing-svg/

(function($){
  $(document).ready(function (){
    var $menuButton = $('.menu-button');

    $menuButton.on('click', function(e){
      $(e.currentTarget).toggleClass('open');
    });

  });
})(window.jQuery);
