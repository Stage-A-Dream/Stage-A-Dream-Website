"use strict";

// NavBar active

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".nav-list li");

  // Function to set the active menu item based on the current URL
  function setActiveMenuItem() {
    const currentURL = window.location.href;

    menuItems.forEach((item) => {
      const menuItemLink = item.querySelector("a");
      if (currentURL === menuItemLink.href) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // Initially set the active menu item
  setActiveMenuItem();
});

// scroll to give navbar background

document.addEventListener("DOMContentLoaded", function () {
  var gap = 65;
  var navMenu = document.querySelector(".nav-menu");

  function handleScroll() {
    if (window.scrollY > gap) {
      navMenu.classList.add("scrollActive");
    } else {
      navMenu.classList.remove("scrollActive");
    }
  }

  // Initial check in case the page is already scrolled
  handleScroll();

  window.addEventListener("scroll", handleScroll);
});

// burger menu

let showSidebar = () => {
  const sidebar = document.querySelector(".sideBar");
  sidebar.style.display = "flex";
  sidebar.style.opacity = "1";
};

let hideSidebar = () => {
  const sidebar = document.querySelector(".sideBar");
  sidebar.style.opacity = "0";
  setTimeout(() => {
    sidebar.style.display = "none";
  }, 500);
};

// hide sidebar when click contactus in sidebar

let hideBar = () => {
  const sidebar = document.querySelector(".sideBar");
  setTimeout(() => {
    sidebar.style.display = "none";
  }, 500);
};
