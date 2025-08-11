// const mobileMenuBtn = document.getElementById("mobileMenuBtn");
// const navMenu = document.getElementById("navMenu");

// mobileMenuBtn.addEventListener("click", function () {
//   if (navMenu.classList.contains("active")) {
//     navMenu.classList.remove("active");
//     mobileMenuBtn.textContent = "☰";
//   } else {
//     navMenu.classList.add("active");
//     mobileMenuBtn.textContent = "✕";
//   }
// });

// const navLinks = document.querySelectorAll('a[href^="#"]');

// navLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const targetId = this.getAttribute("href");
//     const targetElement = document.querySelector(targetId);

//     if (targetElement) {
//       targetElement.scrollIntoView({
//         behavior: "smooth",
//       });

//       navMenu.classList.remove("active");
//       mobileMenuBtn.textContent = "☰";
//     }
//   });
// });

// function updateActiveNav() {
//   const sections = ["home", "about", "skills", "projects", "contact"];
//   const navLinksElements = document.querySelectorAll(".nav-link");

//   let activeSection = "home";

//   for (let i = 0; i < sections.length; i++) {
//     const section = sections[i];
//     const element = document.getElementById(section);
//     if (element) {
//       const rect = element.getBoundingClientRect();
//       if (rect.top <= 100 && rect.bottom >= 100) {
//         activeSection = section;
//       }
//     }
//   }

//   navLinksElements.forEach(function (link) {
//     const href = link.getAttribute("href").substring(1);
//     if (href === activeSection) {
//       link.classList.add("active");
//     } else {
//       link.classList.remove("active");
//     }
//   });
// }

// window.addEventListener("scroll", updateActiveNav);

// updateActiveNav();
