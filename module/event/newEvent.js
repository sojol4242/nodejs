const EventEmitter = require("events");
 

class NewEvent extends EventEmitter {
  eventFunc() {
      console.log("Initialized");
    setTimeout(() => {
      this.emit("bellRing", {
        period: "first",
        text: "period ended",
      });
    }, 2000);
  }
}
module.exports =NewEvent;
