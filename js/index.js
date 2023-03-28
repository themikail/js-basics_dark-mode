console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkMode = document.querySelector('[data-js="dark-mode-button"]');
darkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

const lightMode = document.querySelector('[data-js="light-mode-button"]');
lightMode.addEventListener("click", () => {
  bodyElement.classList.add("light");
});

const toggleMode = document.querySelector('[data-js="toggle-button"]');
toggleMode.addEventListener("click", () => {
  if (bodyElement.classList.contains("dark")) {
    bodyElement.classList.remove("dark");
    bodyElement.classList.add("light");
  } else {
    bodyElement.classList.remove("light");
    bodyElement.classList.add("dark");
  }
});
