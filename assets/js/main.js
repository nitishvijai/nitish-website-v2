(function($){
    $(document).mousemove(
      function(e){
        var X = e.pageX;
        var Y = e.pageY;
        $('body').css('background','radial-gradient(circle closest-side at '+X+'px '+Y+'px, #fff -10%, #121, #000 50%)');
      }
    );
  })(jQuery);