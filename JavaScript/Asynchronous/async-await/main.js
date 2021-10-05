/*
// Normal Promise Code
fetch("./../image.svg")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.blob();
  })
  .then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.log(`There has been a problem with your fetch operation: ${e.message}`);
  });
*/

// Using async-await
const myFetch = async function () {
  const response = await fetch("./../image.svg");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const myBlob = await response.blob();

  const objectUrl = URL.createObjectURL(myBlob);
  const image = document.createElement("img");
  image.src = objectUrl;
  document.body.appendChild(image);
};

myFetch().catch((e) => {
  console.log(`There has been a problem with your fetch operation: ${e.message}`);
});
