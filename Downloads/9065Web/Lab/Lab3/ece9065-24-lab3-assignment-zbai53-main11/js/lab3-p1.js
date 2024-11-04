// Dynamically load content into the main content area
// Currently loaded page markup

let currentLoadedPage = null;
// Mark the currently loaded user ID for user details
let currentLoadedUserId = null; 
async function loadContent(page, userId = null, event = null) {
    if (event) {
        event.preventDefault();
    }
    console.log('Loading page:', page); 
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    // Check if a new page needs to be loaded to avoid multiple loads, resulting in an unresponsive interface
    if (currentLoadedPage === page && currentLoadedUserId === userId) {
        console.log('The page is already loaded. Skipping reload.');
        return; 
    }

    try {
        const response = await fetch(`${page}?timestamp=${new Date().getTime()}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        mainContent.innerHTML = html;

          // Update Load Status
          currentLoadedPage = page;
          currentLoadedUserId = userId;
  

        if (page === 'users.html') {
            // Fetch data from JSON only if no data has been loaded in Local Storage.
            if (!localStorage.getItem('isDataLoaded')) { 
                await fetchData(); 
                localStorage.setItem('isDataLoaded', 'true');
            } else {
                populateTableLocalStorage();
            }
        }

        // Call loadUserDetails when loading the user details page.
        if (page === 'userDetail.html' && userId !== null) {
            await loadUserDetails(userId);  
        }
    } catch (error) {
        console.error('Error loading page:', error);
        mainContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
    }
}


function toggleSubmenu(element, pageUrl) {
  element.classList.toggle('active'); 

  // If there is a page URL, load the content
  if (pageUrl) {
        console.log(pageUrl);
      loadContent(pageUrl);
  }
}
// Getting data from the server and populating the table
async function fetchData() {
    try {
        const response_user = await fetch('../data/users.json'); 
        const data_user = await response_user.json();

        const response_computer = await fetch('../data/stocks-complete.json');
        const data_computer = await response_computer.json();

        const response_screening = await fetch('../data/stocks-formatted.json');
        const data_screening = await response_screening.json();
        populateTable(data);
        // Storing user data to LocalStorage
        data_user.forEach(item => {
            localStorage.setItem(`user_${item.id}`, JSON.stringify(item));
        });

        data_computer.forEach((item, index) => {
            localStorage.setItem(`model_${index}`, JSON.stringify(item));
          });

        // Storing filtered data to LocalStorage
        data_screening.forEach((item, index) => {
            localStorage.setItem(`screening_${index}`, JSON.stringify(item));
        });

        // console.log(data);
    } catch (error) {
        
        console.error('Error fetching data:', error);
    }
  }


function populateTable(data) {
    // const response = await fetch('users.json'); 
    // const data = await response.json();
    const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; 
  
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.user.firstname}</td>
            <td>${item.user.lastname}</td>
            <td>${item.user.email}</td>
            <td>${item.user.address}</td>
            <td>${item.user.city}</td>
            <td>${item.user.state}</td>
            <td>${item.user.zip}</td>
            <td>${formatPortfolio(item.portfolio)}</td>
        `;
        tableBody.appendChild(row);
    });
  }

  // Populate tables from LocalStorage
function populateTableLocalStorage() {
    const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; 

    // Iterate over user data in LocalStorage
    for (let i = 1; i <= localStorage.length; i++) { 
        const userData = localStorage.getItem(`user_${i}`);
        if (userData) {
            const user = JSON.parse(userData);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.user.firstname}</td>
                <td>${user.user.lastname}</td>
                <td>${user.user.email}</td>
                <td>${user.user.address}</td>
                <td>${user.user.city}</td>
                <td>${user.user.state}</td>
                <td>${user.user.zip}</td>
                <td>${formatPortfolio(user.portfolio)}</td>
            `;
            tableBody.appendChild(row);
        }
    }
}





// Load navigation item data from LocalStorage
function loadNavigationData() {
    try {
        const usersMenu = document.getElementById('users-submenu');
        usersMenu.innerHTML = ''; 

        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
             // Check if it's user data
            if (key.startsWith('user_')) {
                const user = JSON.parse(localStorage.getItem(key));
                const userName = `${user.user.firstname} ${user.user.lastname}`;

                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="#" onclick="loadContent('userDetail.html', ${user.id}, event); return false;" style="color: #fff; text-decoration: none;">
                        ${user.id} ${userName}
                    </a>`;
                usersMenu.appendChild(li);
            }
        }
        console.log("loading loadNavigationData");
    } catch (error) {
        console.error('Error loading navigation data from localStorage:', error);
    }
}




// Formatting Portfolio Information
function formatPortfolio(portfolio) {
    if (!Array.isArray(portfolio)) {
        return ''; 
    }
    return portfolio.map(item => `${item.model} (${item.owned})`).join('<br>');
}


// Set global variables to store user IDs
let userId = 1; 

async function loadUserDetails(userId) {
    console.log('Attempting to load user details for ID:', userId);
    const userDetails = document.getElementById('user-details');

    if (!userDetails) {
        console.error('user-details element is null');
        return;
    }

    const userData = localStorage.getItem(`user_${userId}`);
    
    if (userData) {
        const user = JSON.parse(userData);
        userDetails.innerHTML = `
            <label>First Name</label>
            <input type="text" id="firstname" value="${user.user.firstname}">
            <label>Last Name</label>
            <input type="text" id="lastname" value="${user.user.lastname}">
            <label>Email</label>
            <input type="email" id="email" value="${user.user.email}">
            <label>Address</label>
            <input type="text" id="address" value="${user.user.address}">
            <label>City</label>
            <input type="text" id="city" value="${user.user.city}">
            <label>State</label>
            <input type="text" id="state" value="${user.user.state}">
            <label>Zip</label>
            <input type="text" id="zip" value="${user.user.zip}">
            <div id="portfolio"></div>
            
        `;

        // Populate Portfolio data
        const portfolioDiv = document.getElementById('portfolio');
        user.portfolio.forEach(item => {
            portfolioDiv.innerHTML += `
                <div class="portfolio-item">
                    <label>Portfolio Model</label>
                    <input type="text" class="portfolio-model" value="${item.model}">
                    <label>Number</label>
                    <input type="number" class="portfolio-owned" value="${item.owned}">
                </div>
            `;
        });

       
        const deleteButton = document.getElementById('btnDelete');
        deleteButton.onclick = function() {
            deleteUser(userId);
        };
    } else {
        userDetails.innerHTML = '<p>User not found.</p>';
    }
}

// Saving the user's changed information
function saveUserDetails() {
    const updatedUser = {
        id: userId,
        user: {
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value
        },
        // Store Portfolio data
        portfolio: [] 
    };

    const portfolioItems = document.querySelectorAll('.portfolio-item'); 
    portfolioItems.forEach(item => {
        // Get model name
        const model = item.querySelector('.portfolio-model').value; 
        // Get the number of possessions
        const owned = parseInt(item.querySelector('.portfolio-owned').value) || 0; 
        // Add models and ownership numbers to portfolio
        updatedUser.portfolio.push({ model, owned }); 
    });
    localStorage.setItem(`user_${userId}`, JSON.stringify(updatedUser));
   

    alert('User details saved!'); 
}

// Delete User
function deleteUser(userId) {
    if (confirm('Sure you want to delete this user?')) {
        // Deleting User Data from Local Storage
        console.log(`Deleting user with ID: ${userId}`); 
        localStorage.removeItem(`user_${userId}`);

        if (!localStorage.getItem(`user_${userId}`)) {
            alert('The user has been successfully deleted!');
        } else {
            alert('User deletion failed!');
        }

        // Jump to index screen after deletion.
        window.location.href = 'index.html'; 
    }
}

async function resetData() {
    // Empty all data in LocalStorage
    localStorage.clear();
    // Clear the data loaded flag
    localStorage.removeItem('isDataLoaded'); 

    // Reload JSON data
    await fetchData();
    populateTableLocalStorage(); 

    // Loading updated navigation data
    loadNavigationData();
    // console.log("Calling loadNavigationData_computer"); 
    // loadNavigationData_computer();
    alert('The data has been restored to its original state!');
}



window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    // Get the userId in the URL
    const userIdFromUrl = urlParams.get('userId'); 
    if (userIdFromUrl) {
         // Update userId
        userId = userIdFromUrl;
        loadUserDetails(userId); 
    }
    loadNavigationData(); 
    
};

function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  let results = [];
  
  // 从 localStorage 中搜索用户数据
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key.startsWith('user_')) {
      const user = JSON.parse(localStorage.getItem(key));
      const fullName = `${user.user.firstname} ${user.user.lastname}`.toLowerCase();

      if (fullName.includes(query)) {
        results.push({
          type: 'User',
          id: user.id,
          name: fullName,
          details: `Email: ${user.user.email}, Address: ${user.user.address}, ${user.user.city}, ${user.user.state}`
        });
      }
    }

    // 从 localStorage 中搜索设备数据
    if (key.startsWith('model_')) {
      const computer = JSON.parse(localStorage.getItem(key));
      console.log(computer + "!!!???2jda" );
      
      if (computer.model.toLowerCase().includes(query)) {
        results.push({
          type: 'Computer',
          model: computer.model,
          name: computer.name,
          details: `Specifications: ${computer.specifications}, Manufacturer: ${computer.manufacturer}, Address: ${computer.address}`
        });
      }
    }
  }

  displayResults(results);
}

  


  function displayResults(results) {
      const resultsDiv = document.getElementById("searchResults");
      resultsDiv.innerHTML = ''; 
    
      if (results.length === 0) {
        resultsDiv.innerHTML = "<p>No results found</p>";
      } else {
        results.forEach(result => {
          const resultDiv = document.createElement("div");
          resultDiv.classList.add("result-item");
    
          if (result.type === 'User') {
            resultDiv.innerHTML = `
              <h3><a href="#" onclick="loadContent('userDetail.html', ${result.id}, event)">${result.type}: ${result.name}</a></h3>
              <p>${result.details}</p>
            `;
          } else if (result.type === 'Computer') {
            resultDiv.innerHTML = `
              <h3>${result.type}: ${result.name}</a></h3>
              <p>${result.details}</p>
            `;
          }
    
          resultsDiv.appendChild(resultDiv);
        });
      }
    }

document.addEventListener('DOMContentLoaded', () => {
    loadNavigationData();
    populateTableLocalStorage();
    // loadNavigationData_computer();
   
});



