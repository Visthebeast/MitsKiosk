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

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove User';
        removeButton.classList.add('removeButton'); // Add a CSS class for styling
        removeButton.addEventListener('click', () => {
            // Remove user from the database
            childSnapshot.ref.remove()
                .then(() => {
                    console.log('User data removed successfully.');
                })
                .catch((error) => {
                    console.log('Error removing user data:', error);
                });

            // Remove user from the authentication list (assuming you're using Firebase Authentication)
            const userToDelete = firebase.auth().currentUser;
            userToDelete.delete()
                .then(() => {
                    console.log('User deleted successfully.');
                })
                .catch((error) => {
                    console.log('Error deleting user:', error);
                });
        });

        // Create a <div> element to wrap the user details and button
        const userDetailsContainer = document.createElement('div');
        userDetailsContainer.classList.add('userDetailsContainer'); // Add a CSS class for styling
        userDetailsContainer.appendChild(li);
        userDetailsContainer.appendChild(removeButton);

        userList.appendChild(userDetailsContainer);
    });
});
