const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icons');
const contents = document.querySelector('.contents_main');

toggleBtn.addEventListener('click',() => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
  contents.classList.toggle('active');
});