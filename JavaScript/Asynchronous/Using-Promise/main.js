imgBtn.addEventListener("click", (e) => {
  fetch("../image.svg")
    .then((response) => response.blob())
    .then((blob) => {
      const objectURL = URL.createObjectURL(blob);

      const image = document.createElement("img");
      image.src = objectURL;
      document.body.appendChild(image);
    })
    .catch((error) => console.log("There has been a Problem:", error.message));

  e.target.disabled = true;
});

jsonBtn.addEventListener("click", (e) => {
  fetch("../data.json")
    .then((response) => response.json())
    .then((json) => {
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
    })
    .catch((error) => console.log("There has been a Problem:", error.message));

  e.target.disabled = true;
});
