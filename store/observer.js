export default class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }

    this.subscribers[event].push(callback);
  }

  next(event, payload) {
    if (!this.subscribers[event]) {
      return;
    }

    this.subscribers[event].forEach((callback) => {
      callback(payload);
    });
  }
}
