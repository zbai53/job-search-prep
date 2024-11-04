async function loadContent_screening(page, userId = null, event = null) {
    if (event) {
        event.preventDefault();
    }
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    if (currentLoadedPage === page && currentLoadedUserId === userId) {
        return; 
    }

    try {
        const response = await fetch(`${page}?timestamp=${new Date().getTime()}`);
        const html = await response.text();
        mainContent.innerHTML = html;

        currentLoadedPage = page;
        currentLoadedUserId = userId;

       
        if (page === 'screening.html') {
            document.getElementById("categoryFilter").addEventListener("change", filterAndSortComputers);
            document.getElementById("manufacturerFilter").addEventListener("change", filterAndSortComputers);
            document.getElementById("sortFilter").addEventListener("change", filterAndSortComputers);
            // Ensure filter page data is loaded and displayed
            loadComputers(); 
        }
    } catch (error) {
        mainContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
    }
}


async function loadComputersPage(event = null) {
    // if (event) {
    //     event.preventDefault(); // 防止默认事件行为
    // }
    console.log('Loading screening page...'); // 调试信息

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // 清空当前内容

    // Check if data has already been loaded
    if (filteredComputers.length > 0) {
      // Debugging information
        console.log('Computers data already loaded. Skipping reload.');
        // Direct display of loaded data
        displayComputers(); 
        return;
    }

    try {
        const response_screening = await fetch('../data/stocks-formatted.json');
        if (!response_screening.ok) {
            throw new Error(`HTTP error! status: ${response_screening1.status}`);
        }
        const data_screening = await response_screening.json();
        console.log("Loading computers data...");
        console.log("Screening data:", data_screening);

        
        data_screening.forEach((item, index) => {
            localStorage.setItem(`screening_${index}`, JSON.stringify(item));
            console.log(`Stored item screening_${index}:`, item);
        });

        
      
         // Calling initial loading and event binding after loading HTML
         loadComputers();
         document.getElementById("categoryFilter").addEventListener("change", filterAndSortComputers);
         document.getElementById("manufacturerFilter").addEventListener("change", filterAndSortComputers);
         document.getElementById("sortFilter").addEventListener("change", filterAndSortComputers);

        // Convert data to Computer instances
        computersData = data_screening.map(item => new Computer(item));
        filteredComputers = [...computersData];
        displayComputers();
    } catch (error) {
        console.error('Error loading computers data:', error);
        mainContent.innerHTML = '<p>Error loading computer data. Please try again later.</p>';
    }
}

// Create a computer class that encapsulates all of its attributes
class Computer {
    constructor({ model, name, category, specifications, manufacturer, address, releaseDate, stockCode, popularity }) {
      this.model = model;
      this.name = name;
      this.category = category;
      this.specifications = specifications;
      this.manufacturer = manufacturer;
      this.address = address;
      this.releaseDate = new Date(releaseDate);
      this.stockCode = stockCode;
      this.popularity = popularity;
    }
  }
  
  let computersData = [];
  let filteredComputers = [];
  
  // document.addEventListener("DOMContentLoaded", () => {
  //   loadComputers();
  //   document.getElementById("categoryFilter").addEventListener("change", filterAndSortComputers);
  //   document.getElementById("manufacturerFilter").addEventListener("change", filterAndSortComputers);
  //   document.getElementById("sortFilter").addEventListener("change", filterAndSortComputers);
  // });
  
  async function loadComputers() {
    try {
      const response_screening = await fetch("../data/stocks-formatted.json");
      
      const data_screening = await response_screening.json();

      // Debugging information
      console.log("loading screening!!!!");
      console.log("Screening data:", data_screening);
     
      data_screening.forEach((item, index) => {
        // Store the key name
        localStorage.setItem(`screening_${index}`, JSON.stringify(item));
        console.log(`Stored item screening_${index}:`, item);
    });
      computersData = data_screening.map(item => new Computer(item));
      filteredComputers = [...computersData];
      displayComputers();
    } catch (error) {
      console.error("Error loading computer data:", error);
    }
  }
  
  function displayComputers() {
    const computerList = document.getElementById("computers");
    computerList.innerHTML = "";
    filteredComputers.forEach(computer => {
      const li = document.createElement("li");
      li.textContent = computer.name;
      li.addEventListener("click", () => showDetails(computer));
      computerList.appendChild(li);
    });
  }
  
  function showDetails(computer) {
    const detailsContent = document.getElementById("detailsContent");
    detailsContent.innerHTML = `
      <h3>${computer.name}</h3>
      <p><strong>Category:</strong> ${computer.category}</p>
      <p><strong>Specifications:</strong> ${computer.specifications}</p>
      <p><strong>Manufacturer:</strong> ${computer.manufacturer}</p>
      <p><strong>Address:</strong> ${computer.address}</p>
      <p><strong>releaseDate:</strong> ${computer.releaseDate.toDateString()}</p>
      <p><strong>Popularity:</strong> ${computer.popularity}</p>
    `;
  }
  
  function filterAndSortComputers() {
    const category = document.getElementById("categoryFilter").value;
    const manufacturer = document.getElementById("manufacturerFilter").value;
    const sortBy = document.getElementById("sortFilter").value;
  // Filtering eligible data from computersData
    filteredComputers = computersData
      .filter(computer => (category === "All" || computer.category === category))
      .filter(computer => (manufacturer === "All" || computer.manufacturer === manufacturer));
  
      // Sort by popularity is selected, using the sort() method to sort by the popularity attribute from highest to lowest.
    if (sortBy === "popularity") {
      filteredComputers.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === "releaseDate") {
      filteredComputers.sort((a, b) => b.releaseDate - a.releaseDate);
    }
  
    displayComputers();
  }


  
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
    // loadNavigationData();
    document.getElementById('screeningLink').addEventListener('click', () => loadContent_screening('screening.html'));
});