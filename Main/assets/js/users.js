
// Get a reference to the "User_Data" collection
const usersRef = firebase.database().ref('User_Data');

// Get the <ul> element to display the user list
const userList = document.getElementById('userList');

// Fetch and display the registered users
usersRef.on('value', (snapshot) => {
    userList.innerHTML = ''; // Clear the previous list

    snapshot.forEach((childSnapshot) => {
        const user = childSnapshot.val();
        const li = document.createElement('li');
        li.innerHTML = `<strong>Name:</strong> ${user.User_Name}<br>
                    <strong>Email:</strong> ${user.Email}<br>
                    <strong>Phone:</strong> ${user.Phone_Number}<br><br>`;
        userList.appendChild(li);
    });
});
