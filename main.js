import ListComponent from "./components/list-component.js";
import store from "./store/index.js";

const input = document.querySelector(".input-field");
const submutButton = document.querySelector(".submit-btn");

submutButton.addEventListener("click", (event) => {
  event.preventDefault();

  const inputValue = input.value.trim();

  console.log("---inputValue", inputValue);

  if (inputValue.length) {
    store.dispatch("addItem", inputValue);
  }
});

const list = new ListComponent();
list.render();
