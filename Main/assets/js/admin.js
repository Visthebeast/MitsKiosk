// --- Admin Product Management Btns ---
const addProductBtn = document.querySelector("#add-product-menu");
const removeProductBtn = document.querySelector("#remove-product-menu");

// Admin Management Containers
const addContainer = document.querySelector(".add-container");
const removeContainer = document.querySelector(".remove-container");

// --- Admin Product Management Btns ---
const additemBtn = document.querySelector("#add-item-menu");
const removeitemBtn = document.querySelector("#remove-item-menu");

// Admin Management Containers
const additemContainer = document.querySelector(".add-cont");
const removeitemContainer = document.querySelector(".remove-cont");

// Admin Side URL
const adminSRC = "http://127.0.0.1:5502/admin-side.html";

console.log(newMenu); // Access the imported array from `main.js`
console.log(newStore);

// --- Admin Side ---
if (adminSRC === window.location.href) {
  console.log("admin side");

  addProductBtn.addEventListener("click", () => {
    addContainer.classList.toggle("show-container");
    removeContainer.classList.remove("show-container");
  });
  console.log('JavaScript file loaded.');

  if (adminSRC === window.location.href) {
    console.log("admin side");
    // Admin Management Btns
    additemBtn.addEventListener("click", () => {
      additemContainer.classList.toggle("show-container");
      removeitemContainer.classList.remove("show-container");
    });
    console.log('JavaScript file loaded.');


  // Admin Management Btns
  removeProductBtn.addEventListener("click", () => {
    removeContainer.classList.toggle("show-container");
    addContainer.classList.remove("show-container");
  });
  // Admin Management Btns
  removeitemBtn.addEventListener("click", () => {
    removeitemContainer.classList.toggle("show-container");
    additemContainer.classList.remove("show-container");
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

  // Show success message
  Swal.fire('Success', 'Product removed from menu successfully!', 'success');

  // Clear input field
  titleInput.value = '';
});
//store
var addButton = document.querySelector('.add-item .btn');
addButton.addEventListener('click', function() {
  var titleInput = document.getElementById('add-title');
  var priceInput = document.getElementById('add-price');
  var categorySelect = document.getElementById('add-category');

  // Performing validation on input fields
  if (titleInput.value === '' || priceInput.value === '') {
    Swal.fire('Error', 'Please fill in all fields.', 'error');
    return;
  }

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


  // Show success message
  Swal.fire('Success', 'Product removed from menu successfully!', 'success');

  // Clear input field
  titleInput.value = '';
});


/*
  // Function to display orders
  function setOrderDetails() {
    const orderTable = document.getElementById('order-table');
    const subtotal = document.getElementById('subtotal');

    firebase
      .database()
      .ref('Users_Order')
      .on('value', function (snapshot) {
        orderTable.innerHTML = '';
        subtotal.textContent = '';

        if (snapshot.exists()) {
          var users = snapshot.val();

          var i = 1;

          for (const userEmail in users) {
            if (users.hasOwnProperty(userEmail)) {
              var userOrders = users[userEmail];

              for (const orderKey in userOrders) {
                if (userOrders.hasOwnProperty(orderKey)) {
                  var order = userOrders[orderKey];
                  var total = order.User_Cart.Total_Amount;
                  var UserCart = order.User_Cart.Details;
                  var subTotal = 0;

                  UserCart.forEach(item => {
                    var foodItem = item.FoodItem;
                    var amount = item.Amount;
                    var quantity = item.Quantity;
                    var itemTotal = amount * quantity;

                    subTotal += itemTotal;
                    console.log(foodItem);
                    var tr = document.createElement('tr');
                    tr.innerHTML = `
                    <td>${i}.</td>
                    <td>${foodItem}</td>
                    <td>${amount}</td>
                    <td>${itemTotal.toFixed(2)}</td>
                  `;
                    orderTable.appendChild(tr);

                    i++;
                  });

                  var subtotalDiv = document.createElement('div');
                  subtotalDiv.classList.add('bold');
                  subtotalDiv.textContent = 'Sub-Total: ' + subTotal.toFixed(2);
                  subtotal.appendChild(subtotalDiv);
                }
              }
            }
          }
        } else {
          console.log('No orders');
        }
      });
  }
*/
    // Function to add a new product to the menu
    


  // Call the function to display all orders
  
  //setOrderDetails();

}
}
