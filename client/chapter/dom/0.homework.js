// querySelector
const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

// console.log( button );

// eventListener 이벤트 핸들러  => click : 객체  , scroll : 객체

function timer() {}

setTimeout(timer, 3000);

let isOpend = false;

function handleMenu(e) {
  e.preventDefault();

  // 메뉴에게 is-active 클래스를 넣어준다.

  // 메뉴에게 클래스를 넣어준다 is-active

  if (!isOpend) {
    menu.classList.add('is-active');
  } else {
    menu.classList.remove('is-active');
  }

  isOpend = !isOpend;

  // menu.classList.toggle('is-active')
  // menu.classList.remove('is-active')
}

button.addEventListener('click', handleMenu);

// Node.addEvent...

// classList

// preventDefault
