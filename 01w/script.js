const products = [
    {
      name: "Wireless Headphones",
      price: "₹7,999",
      description: "Noise-cancelling over-ear headphones.",
      image: "https://via.placeholder.com/80"
    },
    {
      name: "Smartwatch",
      price: "₹12,999",
      description: "Fitness-tracking smartwatch.",
      image: "https://via.placeholder.com/80"
    },
    {
      name: "Gaming Mouse",
      price: "₹2,499",
      description: "Ergonomic gaming mouse.",
      image: "https://via.placeholder.com/80"
    },
    {
      name: "Laptop Stand",
      price: "₹1,999",
      description: "Adjustable aluminium stand.",
      image: "https://via.placeholder.com/80"
    },
    {
        name: "Wireless Headphones",
        price: "₹7,999",
        description: "Noise-cancelling over-ear headphones.",
        image: "https://via.placeholder.com/80"
      },
      {
        name: "Smartwatch",
        price: "₹12,999",
        description: "Fitness-tracking smartwatch.",
        image: "https://via.placeholder.com/80"
      },
      {
        name: "Gaming Mouse",
        price: "₹2,499",
        description: "Ergonomic gaming mouse.",
        image: "https://via.placeholder.com/80"
      },
      {
        name: "Laptop Stand",
        price: "₹1,999",
        description: "Adjustable aluminium stand.",
        image: "https://via.placeholder.com/80"
      },
      {
        name: "Wireless Headphones",
        price: "₹7,999",
        description: "Noise-cancelling over-ear headphones.",
        image: "https://via.placeholder.com/80"
      },
      {
        name: "Smartwatch",
        price: "₹12,999",
        description: "Fitness-tracking smartwatch.",
        image: "https://via.placeholder.com/80"
      },
      {
        name: "Gaming Mouse",
        price: "₹2,499",
        description: "Ergonomic gaming mouse.",
        image: "https://via.placeholder.com/80"
      },
      {
        name: "Laptop Stand",
        price: "₹1,999",
        description: "Adjustable aluminium stand.",
        image: "https://via.placeholder.com/80"
      },
      {
        name: "Wireless Headphones",
        price: "₹7,999",
        description: "Noise-cancelling over-ear headphones.",
        image: "https://via.placeholder.com/80"
      },
      {
        name: "Smartwatch",
        price: "₹12,999",
        description: "Fitness-tracking smartwatch.",
        image: "https://via.placeholder.com/80"
      },
      {
        name: "Gaming Mouse",
        price: "₹2,499",
        description: "Ergonomic gaming mouse.",
        image: "https://via.placeholder.com/80"
      },
      {
        name: "Laptop Stand",
        price: "₹1,999",
        description: "Adjustable aluminium stand.",
        image: "https://via.placeholder.com/80"
      },
      
    // Add more dummy products to exceed 10 for testing pagination
  ];
  
  let currentPage = 1;
  const rowsPerPage = 10;
  
  function displayProducts() {
    const tableBody = document.querySelector("#productTable tbody");
    tableBody.innerHTML = "";
  
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageItems = products.slice(start, end);
  
    pageItems.forEach(product => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><img src="${product.image}" alt="${product.name}"></td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.description}</td>
      `;
      tableBody.appendChild(row);
    });
  
    document.getElementById("pageInfo").textContent = `Page ${currentPage} of ${Math.ceil(products.length / rowsPerPage)}`;
  }
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayProducts();
    }
  });
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage < Math.ceil(products.length / rowsPerPage)) {
      currentPage++;
      displayProducts();
    }
  });
  displayProducts();
  