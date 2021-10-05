console.clear();
const fetchAndDecode = function (url, type) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ERROR!! Status: ${response.status}`);
      } else {
        if (type === "blob") {
          return response.blob();
        } else if (type === "text") {
          return response.text();
        }
      }
    })
    .catch((err) => {
      console.log(`There has been a Problem with your Fetch Operation for Resource: "${url}": ${err.message}`);
    });
};

const tea = fetchAndDecode("./images/tea.jpg", "blob");
const coffee = fetchAndDecode("./images/coffee.jpg", "blob");
const data = fetchAndDecode("./data/data.txt", "text");

Promise.all([tea, coffee, data]).then((valuesArr) => {
  console.log(valuesArr);

  const teaURL = URL.createObjectURL(valuesArr[0]);
  const coffeeURL = URL.createObjectURL(valuesArr[1]);
  const dataText = valuesArr[2];

  const teaImage = document.createElement("img");
  teaImage.src = teaURL;
  document.body.appendChild(teaImage);

  const coffeeImage = document.createElement("img");
  coffeeImage.src = coffeeURL;
  document.body.appendChild(coffeeImage);

  const para = document.createElement("p");
  para.textContent = dataText;
  document.body.appendChild(para);
});
