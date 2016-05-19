function handleFormSubmission(){
  $('.form-example [type="submit"]').on('click.formValidation', function(e){
    shouldPrevent = false;

    $form = $(this).parents('form');
    $inputs = $form.find('input[required]');

    $inputs.each(function(index, input){
      errorMessageSelector = 'label[for="' + $(input).attr('id') + '"] .error-message';
      error = $form.find(errorMessageSelector);

      if(!input.validity.valid){
        error.css('display', 'inline-block');
        shouldPrevent = true;
      }
      else {
        error.css('display', 'none');
      }
    });

    if(!$form[0].checkValidity()){
      e.preventDefault();
    }
  });
}

$(document).ready(function(){
  handleFormSubmission();
});
