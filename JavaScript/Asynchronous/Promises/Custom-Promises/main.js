console.clear();

const timeoutProm = function (message, interval) {
  return new Promise((resolve, reject) => {
    if (message === "" || typeof message !== "string") {
      reject("Message is Empty or Not a String");
    } else if (interval < 0 || typeof interval !== "number") {
      reject("Interval is Negative or Not a Number ");
    } else {
      setTimeout(() => {
        resolve(message);
      }, interval);
    }
  });
};

timeoutProm("Resolved after 5Sec.", 5000).then(console.log).catch(console.log);
timeoutProm("Resolved after 5Sec.", -5000).then(console.log).catch(console.log);
timeoutProm(22, 5000).then(console.log).catch(console.log);
