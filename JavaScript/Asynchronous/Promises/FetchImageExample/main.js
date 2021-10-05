/*
const promise = fetch("./../../image.svg");

console.log(promise);

const promise2 = promise.then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  } else {
    return response.blob();
  }
});

console.log(promise2);

const promise3 = promise2.then((myBlob) => {
  const objectURL = URL.createObjectURL(myBlob);
  const image = document.createElement("img");
  image.src = objectURL;
  document.body.appendChild(image);
});

console.log(promise3);

const errorCase = promise3.catch((e) => {
  console.log("There has been a Problem with fetch() Operation: " + e.message);
});

console.log(errorCase);
*/

fetch("./../../image.svg")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    } else {
      return response.blob();
    }
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    const image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((error) => {
    console.log(`There has been a Problem with fetch() Operation: ${error.message}`);
  });
