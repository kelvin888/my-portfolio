import { fade, openMobileSidebar, closeMobileSidebar } from "./functions";

export function initializePage() {
  window.scrollTo({ behavior: "smooth", top: 0 });
  //preloader
  fade("out", 500, document.querySelector("#preloader"));

  document.querySelector(".menu-icon").addEventListener("click", function () {
    openMobileSidebar();
  });

  document
    .querySelector("main.content, header.left button.close")
    .addEventListener("click", function () {
      closeMobileSidebar();
    });

  /*=========================================================================
     Add (nav-link) class to main menu.
     =========================================================================*/
  document.querySelector(".vertical-menu li span").classList.add("nav-link");

  /*=========================================================================
     Progress bar animation with Waypoint JS
     =========================================================================*/
  document.querySelectorAll(".progress-bar").forEach((el) => {
    const bar_value = el.getAttribute("aria-valuenow") + "%";
    el.setAttribute("style", `width: ${bar_value}`);
  });

  /*=========================================================================
     Background Image with Data Attribute
     =========================================================================*/
  const bg_img = document.getElementsByClassName("background");

  for (let i = 0; i < bg_img.length; i++) {
    const src = bg_img[i].getAttribute("data-image-src");
    bg_img[i].setAttribute("style", `background-image: url(${src}); `);
  }

  /*=========================================================================
     Spacer with Data Attribute
     =========================================================================*/
  const list = document.getElementsByClassName("spacer");

  for (let i = 0; i < list.length; i++) {
    const size = list[i].getAttribute("data-height");
    list[i].setAttribute("style", `height:${size}px`);
  }
}
