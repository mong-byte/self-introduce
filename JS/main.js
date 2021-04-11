const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".nav_menu");
const icons = document.querySelector(".nav_icons");
const info = document.querySelector(".mobile_info");

const profile = document.querySelector(".profile");
const favorite = document.querySelector(".favorite");
const todo = document.querySelector(".todo");
const mention = document.querySelector(".mention");

let imgToggler = false;


toggleBtn.addEventListener("click",() => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
  info.classList.toggle("active");
});

// MouseEnter //

profile.addEventListener("mouseenter", () => {
  imgToggler = true; 
  if(imgToggler === true){
    profile.classList.add("active");
}
});

favorite.addEventListener("mouseenter", () => {
  imgToggler = true; 
  if(imgToggler === true){
    favorite.classList.add("active");
  }
});

todo.addEventListener("mouseenter", () => {
  imgToggler = true; 
  if(imgToggler === true){
    todo.classList.add("active");
  }
});

mention.addEventListener("mouseenter", () => {
  imgToggler = true; 
  if(imgToggler === true){
    mention.classList.add("active");
  }
});

// Mouse Leave //

profile.addEventListener("mouseleave", () => {
  if(imgToggler === true){
    imgToggler = false
  }; 
  if(imgToggler === false){
    profile.classList.remove("active");
  }
});

favorite.addEventListener("mouseleave", () => {
  if(imgToggler === true){
    imgToggler = false};
  if(imgToggler === false){
    favorite.classList.remove("active");
  }
});

todo.addEventListener("mouseleave", () => {
  if(imgToggler === true){
    imgToggler = false}; 
  if(imgToggler === false){
    todo.classList.remove("active");
  }
});

mention.addEventListener("mouseleave", () => {
  if(imgToggler === true){
    imgToggler = false};
  if(imgToggler === false){
    mention.classList.remove("active");
  }
});