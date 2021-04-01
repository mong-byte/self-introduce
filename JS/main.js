const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icons');
const info = document.querySelector('.mobile_info');

toggleBtn.addEventListener('click',() => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
  info.classList.toggle('active');
});