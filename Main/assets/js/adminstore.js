// --- Admin Product Management Btns ---
const addProductBtn = document.querySelector("#add-product-menu");
const removeProductBtn = document.querySelector("#remove-product-menu");

// Admin Management Containers
const addContainer = document.querySelector(".add-container");
const removeContainer = document.querySelector(".remove-container");

// Admin Side URL
const adminStoreSRC = "http://127.0.0.1:5502/admin-Store.html";

// --- Admin Side ---
if (adminSRC === window.location.href) {
  console.log("admin Store");
  // Admin Management Btns
  addProductBtn.addEventListener("click", () => {
    addContainer.classList.toggle("show-container");
    removeContainer.classList.remove("show-container");
  });

  // Admin Management Btns
  removeProductBtn.addEventListener("click", () => {
    removeContainer.classList.toggle("show-container");
    addContainer.classList.remove("show-container");
  });
  // Add event listener to "Add to Menu" button
var addButton = document.querySelector('.add-product .btn');
addButton.addEventListener('click', function() {
  var titleInput = document.getElementById('add-title');
  var priceInput = document.getElementById('add-price');
  var categorySelect = document.getElementById('add-category');

  // Perform validation on input fields
  if (titleInput.value === '' || priceInput.value === '') {
    Swal.fire('Error', 'Please fill in all fields.', 'error');
    return;
  }

  // Add the product to the menu (your implementation here)

  // Show success message
  Swal.fire('Success', 'Product added to menu successfully!', 'success');

  // Clear input fields
  titleInput.value = '';
  priceInput.value = '';
});

// Add event listener to "Remove From Menu" button
var removeButton = document.querySelector('.remove .btn');
removeButton.addEventListener('click', function() {
  var titleInput = document.querySelector('.remove input[type="text"]');

  // Perform validation on input field
  if (titleInput.value === '') {
    Swal.fire('Error', 'Please enter the title of the food to remove.', 'error');
    return;
  }

  // Remove the product from the menu (your implementation here)

  // Show success message
  Swal.fire('Success', 'Product removed from menu successfully!', 'success');

  // Clear input field
  titleInput.value = '';
});

}
