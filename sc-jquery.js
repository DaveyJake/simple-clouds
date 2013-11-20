jQuery(function($) {

  function loadBubble(c,t,l) {
    var area = $(SAME_CLASSNAME_AS_BUBBLE-WRAP_CHILD);
    var bubble = $(SAME_CLASSNAME_AS_MAP_AREA);
  
    $(area).hover(
      function(e){
        e.preventDefault();
        $(bubble).addClass('bubble').parent().siblings().children().removeClass('bubble');
        $('.'+c+'.bubble').parent().css({
          'top'   : t+'px',
          'left'  : l+'px'
        });
      },
      function(){
        $('.bubble').removeClass('bubble');      
      }
    );
    $('.bubble-wrap').hover(
      function(e){
        e.preventDefault();
        $(bubble).addClass('bubble').show();
        $(this).siblings().children().removeClass('bubble');       
      },
      function(){
        $('.bubble').removeClass('bubble');        
      }
    );
    
  }
  
  loadBubble(CLASS_OF_BUBBLE-WRAP_CHILD,TOPpx,LEFTpx);

  $('img#ID_OF_IMG').mouseout(function(){
    $('.bubble').removeClass('bubble');
  });
  
});
