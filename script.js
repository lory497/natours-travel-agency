document.querySelector(".navigation").addEventListener("click", function (e) {
  e.target.closest(".navigation__item")
    ? (document.getElementById("navi-toggle").checked = false)
    : "";
});

// appear on scroll

window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");
  for (i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

// modal

const overlay = document.querySelector(".modal");
const modal = document.querySelector(".modal__content");
const btnCloseModal = document.querySelectorAll(".popup__close");
const btnOk = document.querySelector(".btn-ok");
const form = document.querySelector("form");
const btnOpenModal = document.querySelector(".btn-book");

// Validacija Forme
function validateForm() {
  const name = document.getElementById("ime").value;
  const email = document.getElementById("email").value;
  const radioChecked = document.querySelector('input[name="grupa"]:checked');

  // Provjeri jesu li sva polja ispunjena
  if (name.trim() !== "" && email.trim() !== "" && radioChecked) {
    return true;
  } else {
    return false;
  }
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function (e) {
  if (validateForm()) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    e.preventDefault();
  }
};

btnOpenModal.addEventListener("click", openModal);

for (let i = 0; i < btnCloseModal.length; i++)
  btnCloseModal[i].addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
btnOk.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (
    e.key === "Escape" &&
    !modal.classList.contains("hidden") &&
    !popup.classList.contains("hidden")
  ) {
    closeModal();
  }
});
