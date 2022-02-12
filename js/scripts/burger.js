window.addEventListener('load', () => {
  let opener = document.getElementsByClassName('burger__opener')[0];
  let closer = document.getElementsByClassName('burger__closer')[0];
  let burger = document.getElementsByClassName('main__burger')[0];

  opener.addEventListener('click', () => {
    burger.classList.add('burger_active');
  });

  closer.addEventListener('click', () => {
    burger.classList.remove('burger_active');
  });
});
