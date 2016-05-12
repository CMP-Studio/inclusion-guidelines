var $modalTrigger = $('.modal-button'),
    $modalContent = $('.modal-content'),
    $modalWrapper = $('.modal-wrapper'),
    $modalClose = $('.close-modal'),
    $mainContent = $('.main-content');

function setModalButton() {
  $modalTrigger.on("click", function(){
    $mainContent.attr('aria-hidden', 'true');
    $modalContent.attr('aria-hidden', 'false');
    $modalTrigger.blur();
    $modalClose.focus();
    $modalWrapper.css('display', 'block');
    deflectFocus();
  });
};

function setModalClose() {
  $modalClose.on("click", function(){
    $modalContent.attr('aria-hidden', 'true');
    $modalWrapper.css('display', 'none');
    $mainContent.attr('aria-hidden', 'false');
  });
};

function deflectFocus() {
  $mainContent.on('focusin', function() {
    console.log('deflect focus working');
    $modalContent.focus();
  });
};

setModalButton();
setModalClose();