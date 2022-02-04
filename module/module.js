
/**Core Modules in Node.js **/

/* Path */
const path = require("path");
const os = require("os");
const fs = require("fs");
const myPath = "E:/projects/Nodejs/module/number.js";
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));
// os module
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.networkInterfaces());
// console.log(os.tmpdir());
// console.log(os.cpus());
// console.log(os.version());

/**File System */
// fs.writeFileSync("file.txt", "New File Created by nodejs"); // sync way
// fs.readFile("file.txt", (err, data) => {
//   console.log(data.toString()); // async way
// });
// console.log("hello world");


/**Event */

const EventEmitter = require("events");
const emitter = new EventEmitter;
// console.log(emitter); 

const NewEvent = require("./event/newEvent")

// register a listener for events
// emitter.on("bellRing",({period,text})=>{
//     console.log(`The bell is rung!!!!! ${period}  ${text}`);
// })

// raise an emit events=> direct app.
// setTimeout(() => {
//     emitter.emit("bellRing",{
//         period:"first",
//         text:"period ended"
//     })
// }, 2000);

//  raise an emit events=> class based app.
const newEvent=new NewEvent()
// register a listener for events
newEvent.on("bellRing",({period,text})=>{
    console.log(`The bell is rung!!!!! ${period}  ${text}`);
})
 newEvent.eventFunc();