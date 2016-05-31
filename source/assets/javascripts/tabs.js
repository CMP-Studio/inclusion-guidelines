$(function(){
  var index = 0;
  var $tabs = $('a.tab');

  $tabs.bind(
  {
    keydown: function(ev){
      var LEFT_ARROW = 37;
      var UP_ARROW = 38;
      var RIGHT_ARROW = 39;
      var DOWN_ARROW = 40;

      var k = ev.which || ev.keyCode;

      if (k >= LEFT_ARROW && k <= DOWN_ARROW){
        if (k == LEFT_ARROW || k == UP_ARROW){
          if (index > 0) {
            index--;
          }
          else {
            index = $tabs.length - 1;
          }
        }

        else if (k == RIGHT_ARROW || k == DOWN_ARROW){
          if (index < ($tabs.length - 1)){
            index++;
          }
          else {
            index = 0;
          }
        }

        $($tabs.get(index)).click();
        ev.preventDefault();
      }
    },

    click: function(ev){
      index = $.inArray(this, $tabs.get());
      setFocus();
      ev.preventDefault();
    }
  });

  var setFocus = function(){
    $tabs.attr(
    {
      tabindex: '-1',
      'aria-selected': 'false'
    }).removeClass('selected');

    $('.tab-panel').removeClass('current');

    $($tabs.get(index)).attr(
    {
      tabindex: '0',
      'aria-selected': 'true'
    }).addClass('selected').focus();

    $($($tabs.get(index)).attr('href')).addClass('current');
  };
});
