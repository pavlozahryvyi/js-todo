import Component from "./component";
import store from "./store";

export default class ListComponent extends Component {
  constructor() {
    super(store, document.querySelector(".js-items"));
  }

  render() {
    if (store.state.todo.length === 0) {
      this.anchor.innerHTML = "No Todos";
    }

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
