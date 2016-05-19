var $modalTrigger = $('.modal-button'),
    $modalContent = $('.modal-content'),
    $modalWrapper = $('.modal-wrapper'),
    $modalClose = $('.close-modal'),
    $modalTitle = $('#modalTitle');
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
  $mainContent.on('focusin.modalOpen', function(e) {
    $modalClose.focus();
  });
};

setModalButton();
setModalClose();
