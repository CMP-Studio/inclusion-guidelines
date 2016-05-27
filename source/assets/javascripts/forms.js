function handleFormSubmission(){
  $('.form-example input').on('keyup', function(e){
    $(this).addClass('edited');
  });

  $('.form-example [type="submit"]').on('click.formValidation', function(e){
    shouldPrevent = false;
    errorList = [];


    $form = $(this).parents('form');
    $inputs = $form.find('input[required]');

    $inputs.each(function(index, input){
      errorMessageSelector = 'label[for="' + $(input).attr('id') + '"] .error-message';
      $form.find(errorMessageSelector).removeAttr('aria-live');
      error = $form.find(errorMessageSelector);
      error.css('display', 'none');

      if(!input.validity.valid){
        error.css('display', 'inline-block');
        shouldPrevent = true;        
        errorList.push(error);
        
      }
      else {
        error.css('display', 'none');
      }
    });

    if(!$form[0].checkValidity()){
      e.preventDefault();
      errorList[0].attr('aria-live', 'assertive');
    }
  });
}

$(document).ready(function(){
  handleFormSubmission();
});
