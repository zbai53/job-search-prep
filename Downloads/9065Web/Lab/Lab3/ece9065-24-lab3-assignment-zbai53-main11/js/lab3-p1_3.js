async function fetchData() {
    try {
      const response_computer = await fetch('../data/stocks-complete.json');
      const data_computer = await response_computer.json();

      const response_user = await fetch('../data/users.json');
      const data_user = await response_user.json();

      const response_screening = await fetch('../data/stocks-formatted.json');
      const data_screening = await response_screening.json();
  
      // Iterate through each model, saving it individually to the localStorage
      data_computer.forEach((item, index) => {
        localStorage.setItem(`model_${index}`, JSON.stringify(item));
      });

      data_user.forEach((item, index) => {
        localStorage.setItem(`user_${item.id}`, JSON.stringify(item));
      });

      // Stores filtered data into the LocalStorage
      data_screening.forEach((item, index) => {
        localStorage.setItem(`screening_${index}`, JSON.stringify(item));
        });
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

// Load model data in LocalStorage and populate the left navigation bar
function loadNavigationData_computer() {
    try {
      const modelMenu = document.getElementById('computer-submenu');
      // Empty existing navigation items to avoid duplicate loads
      modelMenu.innerHTML = ''; 
  
      // Iterate over the model data in LocalStorage
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('model_')) { 
          const model = JSON.parse(localStorage.getItem(key));
  
          // Creating secondary menu items
          const li = document.createElement('li');
          //Output debugging information
          console.log(key + "?!!?");
          li.innerHTML = `
            <a href="#" onclick="loadContent_computer('computerDetail.html', '${key}'); return false;" style="color: #fff; text-decoration: none;">
              ${model.model}
            </a>`;
          modelMenu.appendChild(li);

          console.log(`Loaded model into navigation: ${model.model} (key: ${key})`);
        }
      }
      console.log("loadNavigationData_computer executed successfully");
    } catch (error) {
      console.error('Error loading navigation data from localStorage:', error);
    }
  }
  // Global variables, passing parameters
  let Mkey = 0;
  // Load content into main-content to support the display of model-specific data
  async function loadContent_computer(page, modelKey) {
    console.log('Loading page:', page);
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    Mkey = modelKey;
  
    try {
      const response = await fetch(`${page}?timestamp=${new Date().getTime()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      mainContent.innerHTML = html;
  
      // Determine if the model details page is loaded, populate model specific data
      if (page === 'computerDetail.html' && modelKey) {
        console.log("Enter loadContent_coumpter !!!!");
        const model = JSON.parse(localStorage.getItem(modelKey));
        // Debugging Information
        console.log(model + "111" + modelKey + "/////")
        // Calling a function to display model details
        await populateModelDetails(modelKey); 
      }
    } catch (error) {
      console.error('Error loading page:', error);
      mainContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
    }
  }
  
  // 
  function populateModelDetails(modelKey) {
    const modelDetails = document.getElementById('model-details');
    // Debugging information
    console.log("!!!!  populateModelDetails" + modelKey);
    if (!modelDetails) {
      console.error('main-content element is null');
      return;
    }
  
    const modelData = localStorage.getItem(modelKey);
    const userData = localStorage.getItem(`user_${userId}`);
    // Debugging information
    console.log(userId + "???" + "12234");
    if (modelData && userData) {
      const model = JSON.parse(modelData);
      const user = JSON.parse(userData);
      modelDetails.innerHTML = `
        <label>Model</label>
        <input type="text" id="model" value="${model.model}">
        <label>Name</label>
        <input type="text" id="name" value="${model.name}">
        <label>Category</label>
        <input type="text" id="category" value="${model.category}">
        <label>Specifications</label>
        <input type="text" id="specifications" value="${model.specifications}">
        <label>Manufacturer</label>
        <input type="text" id="manufacturer" value="${model.manufacturer}">
        <label>Address</label>
        <input type="text" id="address" value="${model.address}">
        <div id="portfolio"></div>
       
      `;
    // Populating Portfolio Data
    const portfolioDiv = document.getElementById('portfolio');
    user.portfolio.forEach(item => {
        portfolioDiv.innerHTML += `
            <div class="portfolio-item">
                
                <label>Number</label>
                <input type="number" class="portfolio-owned" value="${item.owned}">
            </div>
        `;
    });
    }
  }
  
  // Updates and saves the specified model data to LocalStorage.
  function saveModel() {
    // Debugging information
    console.log(Mkey + "!!!kdkakd")
    const updatedModel = {
      model: document.getElementById('model').value,
      name: document.getElementById('name').value,
      category: document.getElementById('category').value,
      specifications: document.getElementById('specifications').value,
      manufacturer: document.getElementById('manufacturer').value,
      address: document.getElementById('address').value
    };
  
    localStorage.setItem(`${Mkey}`, JSON.stringify(updatedModel));
    loadNavigationData_computer(); 
    alert('Model details saved!'); 
  }
  
  // Delete specified model data
  function deleteModel() {
    console.log(Mkey);
    localStorage.removeItem(Mkey);
    document.getElementById("main-content").innerHTML = '';
    loadNavigationData_computer(); 
    if (!localStorage.getItem(Mkey)) {
        alert('Model has been successfully deleted!');
    } else {
        alert('Model deletion failed!');
    }

    // When deletion is complete, return to index
    window.location.href = 'index.html'; 
  }

  async function resetDataComputer() {
    // Empty all data in LocalStorage
    localStorage.clear();
    // Clear the data loaded flag
    localStorage.removeItem('isDataLoaded'); 

    // Reload JSON data
    await fetchData();
    

    // Loading updated navigation data
    loadNavigationData_computer();
    // console.log("Calling loadNavigationData_computer"); 
    // loadNavigationData_computer();
    alert('The data has been restored to its original state!');
}

function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  let results = [];
  
  // Searching for user data from localStorage
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

    // Searching for device data from localStorage
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
  
  
  document.addEventListener("DOMContentLoaded", loadNavigationData_computer);
  
  document.addEventListener('DOMContentLoaded', () => {
    loadNavigationData_computer();
    populateModelDetails(modelKey);
    // loadNavigationData_computer();
   
});
// document.addEventListener("DOMContentLoaded", fetchData);