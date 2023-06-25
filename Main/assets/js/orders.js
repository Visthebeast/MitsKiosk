
console.log(newMenu); // Access the imported array from `main.js`

let selectedUserEmail = '';

function OrderDetails() {
    const userList = document.getElementById('user-list');
    const orderDetails = document.getElementById('order-details');

    firebase
        .database()
        .ref('Users_Order')
        .on('value', function (snapshot) {
            userList.innerHTML = '';
            orderDetails.innerHTML = '';

            if (snapshot.exists()) {
                const users = snapshot.val();

                for (const userEmail in users) {
                    if (users.hasOwnProperty(userEmail)) {
                        const userOrders = users[userEmail];

                        const userButton = document.createElement('button');
                        userButton.classList.add('user-button');
                        const userName = userEmail.split('_')[0]; // Extract the name part before the '@' symbol
                        userButton.textContent = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
                        userButton.addEventListener('click', function () {
                            displayOrderDetails(userEmail,userOrders, orderDetails);
                        });

                        userList.appendChild(userButton);
                    }
                }
            } else {
                console.log('No orders');
            }
        });
}

function displayOrderDetails(userEmail, userOrders, orderDetails) {
    orderDetails.innerHTML = '';
    selectedUserEmail=userEmail
    let i = 1;
    let subTotal = 0;

    for (const orderKey in userOrders) {
        if (userOrders.hasOwnProperty(orderKey)) {
            const order = userOrders[orderKey];
            const total = order.User_Cart.Total_Amount;
            const userCart = order.User_Cart.Details;

            const orderTable = document.createElement('table');
            orderTable.classList.add('order-table');

            const headerRow = orderTable.insertRow();
            headerRow.innerHTML = `
        <th>S.No.</th>
        <th>Food Item</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Total</th>
      `;

            userCart.forEach((item) => {
                const foodID = item.FoodID;
                const foodItem = newMenu[foodID-1].fields.title;
                const amount = newMenu[foodID-1].fields.price;
                const quantity = item.Quantity;
                const itemTotal = amount * quantity;

                subTotal += itemTotal;

                const row = orderTable.insertRow();
                row.innerHTML = `
          <td>${i}.</td>
          <td>${foodItem}</td>
          <td>${quantity}</td>
          <td>${amount}</td>
          <td>${itemTotal.toFixed(2)}</td>
        `;

                i++;
            });

            const orderDeliveredButton = document.createElement('button');
            orderDeliveredButton.classList.add('order-delivered-button');
            orderDeliveredButton.textContent = 'Order Delivered';
            orderDeliveredButton.addEventListener('click', function () {
                deleteOrder(userEmail, userOrders, orderKey,orderDetails);
            });

            const orderTableWrapper = document.createElement('div');
            orderTableWrapper.classList.add('order-table-wrapper');
            orderTableWrapper.appendChild(orderTable);
            orderTableWrapper.appendChild(orderDeliveredButton);

            orderDetails.appendChild(orderTableWrapper);

            const subtotalDiv = document.createElement('div');
            subtotalDiv.classList.add('bold');
            subtotalDiv.textContent = 'Sub-Total: ' + subTotal.toFixed(2);

            orderDetails.appendChild(subtotalDiv);
            orderDetails.appendChild(document.createElement('hr'));
        }
    }
    const subtotalDiv = document.createElement('div');
    subtotalDiv.classList.add('bold');
    subtotalDiv.textContent = 'Sub-Total: ' + subTotal.toFixed(2);
    orderDetails.appendChild(subtotalDiv);
}


// function selectUser(userEmail) {
//     selectedUserEmail = userEmail;
//     // Call the displayOrderDetails function for the selected user
//     displayOrderDetails(userEmail, users[userEmail], orderDetails);
// }

function deleteOrder(userEmail, userOrders, orderKey,orderDetails) {
    if (userEmail !== selectedUserEmail) {
        console.log('Cannot delete orders of other users');
        return;
    }

    const userOrderRef = firebase.database().ref('Users_Order');
    userOrderRef
        .child(userEmail)
        .child(orderKey)
        .remove()
        .then(() => {
            console.log('Order deleted successfully');
            orderDetails.innerHTML = '';
            location.reload();
            displayOrderDetails(userEmail, userOrders, orderDetails);
        })
        .catch((error) => {
            console.log('Error deleting order:', error);
        });
}



OrderDetails();
// Call the setOrderDetails function to fetch and display the order details

firebase.database()
    .ref('Users_Order/sebin_Orders')
    .on('value', function (snapshot) {
        if (snapshot.exists()) {
            // Data exists, retrieve and log the data
            var data = snapshot.val();
            //console.log(data); // Log the retrieved data
        } else {
            console.log('No data found.'); // Log a message if no data is found
        }
    });

// Import the newMenu array from main.js
//import { newMenu } from './main.js';

// Call the function to display all orders


