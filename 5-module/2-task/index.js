function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  button.addEventListener('click', () => {
  if (text.hidden == true) text.hidden = false;
    else text.hidden = true;
  });
}
