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
    deflectMainFocus();
    deflectFooterFocus();
    deflectHeaderFocus();
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

function deflectMainFocus() {
  $mainContent.on('focusin.modalOpen', function(e) {
    $modalClose.focus();

  });
};

function deflectFooterFocus() {
  $('.site-footer').on('focusin.modalOpen', function(e) {
    $modalClose.focus();
  });
};

function deflectHeaderFocus() {
  $('.site-header').on('focusin.modalOpen', function(e) {
    $modalClose.focus();
  });
};



$(document).ready(function(){
  setModalButton();
  setModalClose();
});
