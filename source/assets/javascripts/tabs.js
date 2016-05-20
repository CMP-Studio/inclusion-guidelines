function switchTabs(){
  // $('.tabbed-content .tabs-list a').on('click', function(event){
  //   target = $(this);

  //   allTabs = $('.tab-panel');

  //   tabPanel = $($(target).attr('href')).parent();

  //   // unhide hidden things
  //   tabPanel.attr('aria-hidden', false);
  //   $(target).parents('li').addClass('current');



  //   // hide everything else
  //   allTabs.not(tabPanel).each(function(index, elem){
  //     $(elem).attr('aria-hidden', true);
  //     $(elem).removeClass('current');
  //   })

  // });
}

$(document).ready(function(){
  switchTabs();
});
