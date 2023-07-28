const os = require("os");

// Information about current user
const user = os.userInfo();
console.log(user);

// Method method returns system uptime in seconds
console.log(os.uptime());

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
