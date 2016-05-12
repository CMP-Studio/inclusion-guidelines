var $modalTrigger = $('.modal-button'),
    $modalContent = $('.modal-content'),
    $modalWrapper = $('.modal-wrapper'),
    $modalClose = $('.close-modal'),
    $mainContent = $('.main-content');

function setModalButton() {
  $modalTrigger.on("click", function(e){
    $mainContent.attr('aria-hidden', 'true');
    $mainContent.attr('tabindex', '-1');
    $modalWrapper.attr('aria-hidden', 'false');
    $modalTrigger.blur();
    $modalClose.focus();
    e.preventDefault();
    $modalWrapper.css('display', 'block');
    deflectFocus();
  });
};

function setModalClose() {
  $modalClose.on("click", function(e){
    $modalWrapper.attr('aria-hidden', 'true');
    $modalWrapper.css('display', 'none');
    $mainContent.attr('aria-hidden', 'false');
    $modalClose.focus();
    e.preventDefault();
  });
};

function deflectFocus() {
  $mainContent.on('focusin', function(e) {
    console.log('deflect focus working');
    $modalWrapper.focus();
    e.preventDefault();
  });
};

setModalButton();
setModalClose();