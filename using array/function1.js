let itemsArray = [];

const list1 = document.getElementById("data-list1");
const list2 = document.getElementById("data-list2");

function addItemsInArray(i) {
  // validatio for empty input
  let newItem = document.querySelectorAll(".input")[i].value;
  if (newItem == "" || newItem == null) {
    alert("Please enter something");
    return false;
  }
  document.querySelectorAll(".input")[i].value = "";
  itemsArray.push(newItem);
  showData(list1, itemsArray);
  showData(list2, itemsArray);
}

function showData(element, array) {
  let dataList = element;
  dataList.innerHTML = array
    .map(
      (element, index) =>
        `<li class="list">${element} <button id="del-btn" class = "button is-small"  onclick="deteteItem(${index})"> <span><i class="fas fa-trash" ></i></span></button> </li>`
    )
    .join("");
}

function deteteItem(i) {
  delete itemsArray[i];
  //  itemsArray.splice(i,1);  // we can also use this  method
  showData(list1, itemsArray);
  showData(list2, itemsArray);
}
