console.clear();
function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("done");
    }, interval);
  });
}

function calcTime(startTime, name) {
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  console.log(`Time taken by "${name}" in milliseconds: ${timeTaken}`);
}
// Slow Async
async function timeTestSlow() {
  // Here the promises are running 1 after the other hence taking 9 seconds
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}

let startTime = Date.now();
timeTestSlow().then(() => {
  calcTime(startTime, "Slow");
});

// Fast Async
async function timeTestFast() {
  // In this case the promises are stored into variables, which sets off their processes
  // all running simultaneously. hence, taking just 3 seconds
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}

startTime = Date.now();
timeTestFast().then(() => {
  calcTime(startTime, "Fast");
});
