jQuery(function($) {

// initialize SC for elements of a designated class
// in conjunction with an image map

  function loadBubbleByClass(c,t,l) {
  
    $('area[class="'+c+'"]').mouseover(function(){
      $('div[class="'+c+'"]').addClass('bubble').parent().siblings().children().removeClass('bubble');
      $('.'+c+'.bubble').parent().css({
        'top'   : t+'px',
        'left'  : l+'px'
      });
    });

    $('area[class="'+c+'"]').mouseout(function(){
      $('.bubble').parent().hover(
        function(){
          $('.bubble').show();
        },
        function(){
          $('.bubble').removeClass('bubble');
        }
      );
    });
    
    $('.bubble').parent().hover(
      function(){
        $('area[class="'+c+'"]').mouseover(
          function(){$('.bubble').show();}
        );
      },
      function() {
        $('.bubble').removeClass('bubble');
      }
    );
    
    $('img#IMG_ID').mouseout(function(){
      $('.bubble').removeClass('bubble');
    });
    
  }
  
  // position elements by class using the className
  // and the numerical values for top & left positioning
  
  loadBubbleByClass(CLASSNAME,TOP,LEFT);
  
});
