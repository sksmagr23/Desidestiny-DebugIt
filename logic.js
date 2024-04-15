const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menus.classList.add("display");
});
closeBtn.addEventListener("click", () => {
  menus.classList.remove("display");
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

const count = document.querySelectorAll(".num");
count.forEach((counters) =>{
  counters.textContent = 0;

  increamentCounters();

  function increamentCounters(){
    let currentNum = +counters.textContent;
    const data = counters.getAttribute("data");
    const increament = data / 40;
    currentNum = Math.ceil(currentNum + increament);
    
    if(currentNum<data){
      counters.textContent = currentNum;
      setTimeout(increamentCounters, 50);
    }
    else{
       counters.textContent = data;
    }
  }
})


function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    
    document.querySelectorAll('header .container, #location .container, #about .container, .navbar').forEach(el => {
      el.style.backgroundColor = "#000";
    });
    document.querySelectorAll('#footer').forEach(el => {
      el.style.backgroundColor = "#000";
    });
    document.querySelectorAll('nav ul').forEach(el => {
      el.style.backgroundColor = "#000";
    });
    document.querySelectorAll('#about .lead').forEach(el => {
      el.style.color = "#fff";
    });
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#000";
  } 
  
  else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    
    document.querySelectorAll('header .container, #location .container, #about .container, .navbar').forEach(el => {
      el.style.backgroundColor = "#fff";
    });
    document.querySelectorAll('#footer').forEach(el => {
      el.style.backgroundColor = "rgb(15, 10, 111)";
    });
    document.querySelectorAll('nav ul').forEach(el => {
      el.style.backgroundColor = "#fff";
    });
    document.querySelectorAll('#about .lead').forEach(el => {
      el.style.color = "#000";
    });
    document.body.style.color = "initial";
    document.body.style.backgroundColor = "initial";
  }
}

document.getElementById("theme-icon").addEventListener("click", toggleTheme);



