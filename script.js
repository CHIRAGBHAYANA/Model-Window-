"use strict";
const modal = document.querySelectorAll(".modal");

const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");

const btnOpenModal = document.querySelectorAll(".show-modal");

const closeModal = (i) => {};
for (let i = 0; i < btnOpenModal.length; i++) {
  const closeWindow = () => {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
  };
  switch (i) {
    case 0:
      btnOpenModal[i].addEventListener("click", () => {
        modal[i].classList.remove("hidden");
        overlay.classList.remove("hidden");
      });
      btnCloseModal[i].addEventListener("click", closeWindow);
      overlay.addEventListener("click", closeWindow);
      break;

    case 1:
      btnOpenModal[i].addEventListener("click", () => {
        modal[i].classList.remove("hidden");
        overlay.classList.remove("hidden");
      });
      btnCloseModal[i].addEventListener("click", closeWindow);
      overlay.addEventListener("click", closeWindow);
      break;

    case 2:
      btnOpenModal[i].addEventListener("click", () => {
        modal[i].classList.remove("hidden");
        overlay.classList.remove("hidden");
      });
      btnCloseModal[i].addEventListener("click", closeWindow);
      overlay.addEventListener("click", closeWindow);
      break;
  }

  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape" && !modal[i].classList.contains("hidden")) {
      modal[i].classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
}
