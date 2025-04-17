let items = []; // Array to store todo items

const itemsDiv = document.getElementById("items"); // Div to display todo items
const input = document.getElementById("itemInput"); // Input field for adding new todo items
const storageKey = "todoItems"; // Key for local storage

// Add a new item to the todo list
function addItem() {
    const value = input.value.trim(); // Get input value and remove whitespace

    if (!value) {
        alert("You cannot add an empty item");
        return;
    }

    items.push(value); // Add item to the list
    renderItems();     // Update the UI
    input.value = "";  // Clear the input field
    saveItems();       // Save list to local storage
}

// Load saved items from local storage
function loadItem() {
    const oldItem = localStorage.getItem(storageKey);

    if (oldItem) {
        items = JSON.parse(oldItem); // Convert JSON string back to array
        renderItems();               // Show them in the UI
    }
}

// Remove a specific item by index
function removeItem(idx) {
    items.splice(idx, 1);  // Remove one item at the given index
    renderItems();         // Update UI
    saveItems();           // Save updated list
}

// Display all todo items in the browser
function renderItems() {
    itemsDiv.innerHTML = ""; // Clear current items

    // Loop through each item with its index
    items.forEach((item, idx) => {
        const container = document.createElement("div");  // Container for each item
        container.style.marginBottom = "10px";

        const text = document.createElement("p");         // Text of the todo item
        text.textContent = item;
        text.style.display = "inline";
        text.style.marginRight = "10px";

        const button = document.createElement("button");  // Delete button
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx); // When clicked, remove the item

        container.appendChild(text);
        container.appendChild(button);
        itemsDiv.appendChild(container); // Add item to the DOM
    });
}

// Save items to local storage
function saveItems() {
    const stringItems = JSON.stringify(items); // Convert array to string
    localStorage.setItem(storageKey, stringItems); // Store it
}

// When page loads, fetch items from local storage
document.addEventListener("DOMContentLoaded", loadItem);
