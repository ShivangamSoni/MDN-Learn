const header = document.querySelector("header");
const section = document.querySelector("section");

const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const request = new XMLHttpRequest();
request.open("GET", requestURL);
/*
// Gets the Response as a String
request.responseType = "text";
*/
// Gets the Response & Converts it into JSON Object
request.responseType = "json";
request.send();

request.addEventListener("load", () => {
  /*
  // In Case of Text Response we have to convert it to JSON Object
  const superHeroesText = request.response;
  const superHeroes = JSON.parse(superHeroesText);
  */
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
});

function populateHeader(obj) {
  const h1 = document.createElement("h1");
  h1.textContent = obj.squadName;
  header.appendChild(h1);

  const para = document.createElement("p");
  para.textContent = `Hometown: ${obj.homeTown} / Formed: ${obj.formed}`;
  header.appendChild(para);
}

function showHeroes(obj) {
  const heroes = obj.members;

  heroes.forEach((hero) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const list = document.createElement("ul");

    h2.textContent = hero.name;
    para1.textContent = `Secret Identity: ${hero.secretIdentity}`;
    para2.textContent = `Age: ${hero.age}`;
    para3.textContent = `Super-Powers:`;

    const superPowers = hero.powers;
    superPowers.forEach((power) => {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      list.appendChild(listItem);
    });

    article.appendChild(h2);
    article.appendChild(para1);
    article.appendChild(para2);
    article.appendChild(para3);
    article.appendChild(list);
    section.appendChild(article);
  });
}
