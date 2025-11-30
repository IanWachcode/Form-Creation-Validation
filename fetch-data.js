// 1. Initialize the async function
async function fetchUserData() {

    // 2. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select the data container
    const dataContainer = document.getElementById('api-data');

    try {
        // 4. Fetch the data
        const response = await fetch(apiUrl);

        // Convert response to JSON
        const users = await response.json();

        // 5. Clear the loading message
        dataContainer.innerHTML = '';

        // 6. Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through each user and create <li>
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// 8. Run fetchUserData when page has loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
