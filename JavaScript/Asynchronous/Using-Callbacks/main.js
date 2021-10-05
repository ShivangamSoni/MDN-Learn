const imgBtn = document.querySelector("#imgBtn");
const jsonBtn = document.querySelector("#jsonBtn");

function loadAsset(url, type, callback) {
  const XHR = new XMLHttpRequest();

  XHR.open("GET", url);
  XHR.responseType = type;

  XHR.addEventListener("load", () => {
    callback(XHR.response);
  });

  XHR.send();
}

function displayImage(blob) {
  const objectURL = URL.createObjectURL(blob);

  const image = document.createElement("img");
  image.src = objectURL;
  document.body.appendChild(image);
}

function displayJSON(json) {
  if (json.length !== 0) {
    const dl = document.createElement("dl");
    json.forEach((obj) => {
      const dt = document.createElement("dt");
      dt.textContent = `${obj.name} | ${obj.age}`;
      dl.appendChild(dt);

      obj.skills.forEach((skill) => {
        const dd = document.createElement("dd");
        dd.textContent = `${skill}`;
        dl.appendChild(dd);
      });
    });

    document.body.appendChild(dl);
  } else {
    console.log("Response JSON is Empty");
  }
}

imgBtn.addEventListener("click", (e) => {
  loadAsset("../image.svg", "blob", displayImage);
  e.target.disabled = true;
});

jsonBtn.addEventListener("click", (e) => {
  loadAsset("../data.json", "json", displayJSON);
  e.target.disabled = true;
});
