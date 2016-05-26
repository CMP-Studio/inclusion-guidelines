var $modalTrigger = $('.modal-button'),
    $modalContent = $('.modal-content'),
    $modalWrapper = $('.modal-wrapper'),
    $modalClose = $('.close-modal'),
    $modalTitle = $('#modal-title');
    $mainContent = $('.main-content');

function setModalButton() {
  $modalTrigger.on("click", function(e){
    $mainContent.attr('aria-hidden', 'true');
    $modalWrapper.attr('aria-hidden', 'false');
    $modalWrapper.css('display', 'block');
    $modalTitle.focus();
    deflectFocus();
  });
};

function setModalClose() {
  $modalClose.on("click", function(e){
    $modalWrapper.attr('aria-hidden', 'true');
    $modalWrapper.css('display', 'none');
    $mainContent.attr('aria-hidden', 'false');
    $modalTrigger.focus();
    $mainContent.off('.modalOpen');
  });
};

function deflectFocus() {
  console.log('this is working 1');
  $mainContent.on('focusin.modalOpen', function(e) {
    console.log('this is working 2');
    $modalClose.focus();

  });
};

$(document).ready(function(){
  setModalButton();
  setModalClose();
});
