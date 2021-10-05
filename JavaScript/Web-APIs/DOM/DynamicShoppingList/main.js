const newItemInput = document.querySelector("#newItem");
const addButton = document.querySelector(".addItemBtn");
const list = document.querySelector(".list");

const deleteItem = function (e) {
  e.target.parentNode.remove();
};

const addToList = function () {
  const value = newItemInput.value.trim();
  newItemInput.value = "";
  newItemInput.focus();

  if (value === "") return;

  const listItem = document.createElement("li");

  const itemSpan = document.createElement("span");
  itemSpan.textContent = value + " ";
  listItem.appendChild(itemSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  listItem.appendChild(deleteBtn);

  list.appendChild(listItem);

  deleteBtn.addEventListener("click", deleteItem);
};

addButton.addEventListener("click", addToList);
newItemInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addToList();
  }
});
