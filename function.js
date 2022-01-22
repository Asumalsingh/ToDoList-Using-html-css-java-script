const addBtn = document.getElementById("add-task");
addBtn.addEventListener("click", addNewItems);

function addNewItems() {
  // validation start
  let x = document.getElementById("input-task").value;
  if (x == "" || x == null) {
    document.getElementById("error").style.display = "block";    
    return false;
  }
   else {
    document.getElementById("error").style.display = "none";
  }

  let newItem = document.querySelector(".input-task").value;
  if (newItem != "") {
    document.querySelector(".input-task").value = "";
    let newLi = document.createElement("li");
    let allTasks = document.getElementById("all-tasks");
    // newLi.appendChild(document.createTextNode(newItem))

    // this is how we add new item , remove-btn at single time
    // important note: -- these are not inverted coma (') these are bactic
    newLi.innerHTML = ` <span>${newItem}</span> <button class="remove-btn" onclick = "deleteItem(this)" draggable="true"><i class="fa fa-trash"></i></button>`;
    allTasks.appendChild(newLi);
    newLi.classList.add("draggable-task");
    newLi.draggable = true;
    addEventsDragAndDrop(newLi);
  }
}

// this function is called in newLi.innerHTML
function deleteItem(currentItem) {
    alert("Delete this item")
  currentItem.parentElement.remove();
}

// -----------Drag and drop----------
let draggables = document.querySelector(".draggable-task");
function dragStart(e) {
  this.style.opacity = "0.4";
  dragingItem = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("html", this.innerHTML);
}
//--> these function are used to animation while dragin and droping
// function dragEnter(e) {
//   this.classList.add("over");
// }

// function dragLeave(e) {
//   e.stopPropagation();
//   this.classList.remove("over");
// }

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  return false;
}
function dragDrop(e) {
  if (dragingItem != this) {
    dragingItem.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("html");
  }
  return false;
}

// function dragDrop(e){
//   if(dragingItem != this){
//     dragingItem = this;
//     this = e.dataTransfer.getData("html")
//   }
//   return false;
// }

function dragEnd(e) {
  this.style.opacity = "1";
}

function addEventsDragAndDrop(el) {
  el.addEventListener("dragstart", dragStart, false);
  //   el.addEventListener("dragenter",dragEnter,false)
  //   el.addEventListener("dragleave",dragLeave,false)
  el.addEventListener("dragover", dragOver, false);
  el.addEventListener("drop", dragDrop, false);
  el.addEventListener("dragend", dragEnd, false);
}
