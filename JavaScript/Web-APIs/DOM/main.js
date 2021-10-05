const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "We Hope you Enjoyed the Ride.";

sect.appendChild(para);

const text = document.createTextNode(" — the premier source for web development knowledge.");

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);
// sect.removeChild(linkPara);
// or
// linkPara.remove();
// or
linkPara.parentNode.removeChild(linkPara);

console.log(document.styleSheets);
// Adding CSS Manually
/*
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";
*/
// Or we can just change classes
para.classList.add("highlight");
