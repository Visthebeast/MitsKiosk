
console.log(newMenu); // Access the imported array from `main.js`


var database = firebase.database();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const userEmailID = user.email;
        const trimedEmailID = makeUserDataID(userEmailID);
        console.log(trimedEmailID);
        displayOrderDetails(trimedEmailID);
    }
});

function displayOrderDetails(userEmail) {
    const orderDetails = document.getElementById('order-details');
    orderDetails.innerHTML = '';
    let subTotal = 0;

    // Retrieve order details from the database
    database.ref('Users_Order/' + userEmail + '_Orders').on('value', function (snapshot) {
        if (snapshot.exists()) {
            const userOrders = snapshot.val();

            // Loop through each order
            for (const orderKey in userOrders) {
                if (userOrders.hasOwnProperty(orderKey)) {
                    const order = userOrders[orderKey];
                    console.log(orderKey)
                    const orderId = order.Order_ID;
                    //console.log(order)
                    const total = order.User_Cart.Total_Amount;
                    const userCart = order.User_Cart.Details;
                    // Create the order table
                    const orderTable = document.createElement('table');
                    orderTable.classList.add('order-table');

                    // Create the table header
                    const headerRow = orderTable.insertRow();
                    headerRow.innerHTML = `
            <th>S.No.</th>
            <th>Food Item</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Total</th>
          `;

                    let i = 1;

                    // Loop through each item in the cart
                    userCart.forEach((item) => {
                        const foodID = item.FoodID;
                        const foodItem = newMenu[foodID - 1].fields.title;
                        const amount = newMenu[foodID - 1].fields.price;
                        const quantity = item.Quantity;
                        const itemTotal = amount * quantity;

                        subTotal += itemTotal;

                        // Create a row for each item in the table
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

                    // Append the order table to the order details container
                    orderDetails.appendChild(orderTable);

                    // Create the order ID div
                    const orderIdDiv = document.createElement('div');
                    orderIdDiv.classList.add('order-id');
                    orderIdDiv.textContent = 'Order ID: ' + orderId;

                    // Append the order ID div to the order details container
                    orderDetails.appendChild(orderIdDiv);

                    // Create the subtotal div
                    const subtotalDiv = document.createElement('div');
                    subtotalDiv.classList.add('bold');
                    subtotalDiv.textContent = 'Sub-Total: ' + subTotal.toFixed(2);

                    // Append the subtotal div to the order details container
                    orderDetails.appendChild(subtotalDiv);

                    // Add a separator line
                    orderDetails.appendChild(document.createElement('hr'));
                }
            }

            // Display the final subtotal
            const finalSubtotalDiv = document.createElement('div');
            finalSubtotalDiv.classList.add('bold');
            finalSubtotalDiv.textContent = 'Final Sub-Total: ' + subTotal.toFixed(2);

            // Append the final subtotal div to the order details container
            orderDetails.appendChild(finalSubtotalDiv);
        }
    });
}


// function generateHash(input) {
//     // Use a hash function (e.g., MD5 or SHA-1) to generate a hash value from the input
//     // Here's an example using the MD5 algorithm with a library called `crypto-js`
//     const hash = CryptoJS.SHA1(input).toString();


//     // Return the hash value
//     return hash;
// }
