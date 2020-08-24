const form = document.getElementById("addForm");
const items = document.getElementById("items");
const filter = document.getElementById("filter");
const item = document.getElementById("item");

// Form submit event
form.addEventListener("submit", addNewItem);
// Delete event
items.addEventListener("click", deleteItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add Item List
function addNewItem(e) {
  e.preventDefault();

  // Get Input Value
  let itemInput = item.value;

  // Create new li element
  const li = document.createElement("li");
  // Add class
  li.className = "list-group-item";

  // Add text node with input value
  li.appendChild(document.createTextNode(itemInput));

  // Create delete button element
  const deleteBtn = document.createElement("button");
  // Add classes to delete button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  // Append button to li
  li.appendChild(deleteBtn);
  // Append button to list
  items.appendChild(li);

  item.value = "";
}

// Remove Item
function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure to delete?")) {
      const li = e.target.parentElement;
      items.removeChild(li);
    }
  }
}

// Filter items
function filterItems(e) {
  // Convert text to lowercase
  const filterText = e.target.value.toLowerCase();

  // Get li's
  const itemList = items.getElementsByTagName("li");

  // Convert to an array
  Array.from(itemList).forEach((item) => {
    const itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(filterText) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
