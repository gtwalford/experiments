// SVG Line Animation
// Based on work from Jake Archibald - http://jakearchibald.com/2013/animated-line-drawing-svg/

(function($){
  $(document).ready(function (){
    var $range = $('#range'),
        $radial = $('#radial path')
        radialFullVal = 525;

    // Initial Update on document ready
    updateRadial( $range.val() );

    // When mouseup on slider update radial
    $range.on('mouseup', function(){
      updateRadial( $range.val() );
      console.log( $range.val() );
    });

    // Update Radial by changing the dashoffset
    // Animation done through CSS
    function updateRadial( value ){
      $radial.css({
        // Invert value for radial
        'stroke-dashoffset': radialFullVal - value 
      });
    }

  });
})(window.jQuery);
