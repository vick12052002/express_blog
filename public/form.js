const form = document.querySelector('.post_form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let hasErr = false;
  let content
  // eslint-disable-next-line
  if(CKEDITOR.instances.content !== undefined){
     content = CKEDITOR.instances.content.getData();
  }
  const elements = document.querySelectorAll('.form_input');
  for (let i = 0; i < elements.length; i += 1) {
    let isValid = true;
    const element = elements[i];
    const input = element.querySelector('.required');
    if (!input.value) {
      isValid = false;
    }
    if (element.childNodes.length > 5) {
      if (content.length !== 0) {
        isValid = true;
      }
    }
    if (!isValid) {
      element.childNodes[1].classList.remove('input_error');
      hasErr = true;
    } else {
      element.childNodes[1].classList.add('input_error');
    }
  }
  if (!hasErr) {
    form.submit();
  }
});
