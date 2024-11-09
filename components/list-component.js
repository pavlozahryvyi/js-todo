import Component from "./component.js";
import store from "../store/index.js";

export default class ListComponent extends Component {
  constructor() {
    super(store, document.querySelector(".list-wrapper"));
  }

  render() {
    if (store.state.todo.length === 0) {
      this.anchor.innerHTML = "No Todos";
    }

    console.log("---store", store.state);

    this.anchor.innerHTML = `
        <ul>
        ${store.state.todo
          .map(
            (todoItem) => `
            <li>${todoItem} <button type="button">[ X ]</button></li>
            `
          )
          .join("")}
        </ul>
        `;

    this.anchor.querySelectorAll("button").forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        store.dispatch("removeItem", { id: idx });
      });
    });
  }
}
