const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menu__list");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu__link");


burger.addEventListener("click", () => {
   burger.classList.toggle("active");
   menuList.classList.toggle("active");
   body.classList.toggle("lock");
});


menuLinks.forEach(link => {
   link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector('.menu__body').offsetHeight + 1;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
         top: offsetPosition,
         behavior: 'smooth'
      });
   });
});

