document.addEventListener('DOMContentLoaded', function () {

  // Handle login form submission
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const userid = document.getElementById("userid").value;
    const password = document.getElementById("password").value;

    // Send login data to the server
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userid, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          document.getElementById("login-page").style.display = "none";
          document.getElementById("main-page").style.display = "block";
          renderProducts(data.hashtags);
        } else {
          alert(data.message || "Invalid login");
        }
      })
      .catch(error => console.error("Error logging in:", error));
  });

  // Render products for both recommended and all products
  function renderProducts(hashtags) {
    // --- Recommended Products ---
    const recommended = document.getElementById("recommended-products");
    recommended.innerHTML = "";
    const recommendedProducts = new Set();

    getRecommendedProductList().forEach(product => {
      if (
        product.tags.some(tag =>
          hashtags.map(h => h.trim().toLowerCase()).includes(tag.toLowerCase())
        ) &&
        !recommendedProducts.has(product.name)
      ) {
        recommended.appendChild(createProductElement(product));
        recommendedProducts.add(product.name);
      }
    });

    if (recommended.children.length === 0) {
      recommended.innerHTML = `<div style="color:#888; font-size:1.1em; padding:20px;">No recommended products found for your interests.</div>`;
    }

    // --- All Products: Static Categories as rows ---
    const all = document.getElementById("all-products");
    all.innerHTML = "";
    getStaticCategories().forEach(cat => {
      // Category heading
      const heading = document.createElement("h2");
      heading.className = "category-heading";
      heading.textContent = cat.category;
      all.appendChild(heading);

      // Product row
      const row = document.createElement("div");
      row.className = "category-row";
      cat.products.slice(0, 5).forEach(product => {
        row.appendChild(createProductElement(product));
      });
      all.appendChild(row);

      // Line break (space) after each row
      all.appendChild(document.createElement("br"));
    });
  }

  // Create individual product elements
  function createProductElement(product) {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h2 style="margin: 10px 0 4px;">${product.name}</h2>
      <div style="font-weight: bold; font-size: 0.9em;">${product.price ? product.price : ""}</div>
    `;
    return el;
  }

  function getRecommendedProductList() {
    const tagGroups = {
      tech: ["Laptop", "PC", "Computer"],
      pets: ["Pet", "Petcare", "Petlove"],
      bike: ["Bike", "GT650", "Riding"],
      cars: ["Cars", "Drift", "BMW"],
      travel: ["Travel", "Mountains", "Tent"],
      gardening: ["Saplings", "Pots", "Tree"],
      food: ["Fruits", "Healthy", "Tasty"],
      fitness: ["Fatloss", "Gym", "Workout"],
      sports: ["Sports", "Outdoor", "Football"],
      yoga: ["Yoga", "Fitness", "Workout"]
    };

    const productsByTag = {
      travel: [
        { name: "Camping Tent", price: "Rs 4,999/-", img: "https://images.unsplash.com/photo-1526491109672-74740652b963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Sleeping Bag", price: "Rs 11,999/-", img: "https://images.unsplash.com/photo-1623083617139-e455e92030e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Cooking Gear", price: "Rs 2,670/-", img: "https://media-www.canadiantire.ca/product/playing/camping/camping-living/0766085/woods-heritage-cast-iron-cook-set-9-piece-196c1f1f-d2b2-47c7-9fd9-e31a1ff04c40-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom" },
        { name: "Head Lamp", price: "Rs 999/-", img: "https://images.unsplash.com/photo-1517457773273-412ec74a18cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Hiking Shoes", price: "Rs 5,980/-", img: "https://images.unsplash.com/photo-1575987116913-e96e7d490b8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Water Filter", price: "Rs 899/-", img: "https://cdn.shopify.com/s/files/1/0407/1692/7132/files/Gravity_Bag_Water_Filter_Purification_System_480x480.jpg?v=1661911332" },
        { name: "Hiking Backpack", price: "Rs 6,999/-", img: "https://images.unsplash.com/photo-1663179975117-b6b1a6dcd951?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Log cutter", price: "Rs 1,599/-", img: "https://images.unsplash.com/photo-1645374060175-a5f7e74a0af2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Torch", price: "Rs 799/-", img: "https://images.unsplash.com/photo-1685342654383-584d56907425?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Hiking Stick", price: "Rs 1,999/-", img: "https://images.unsplash.com/photo-1632411316785-33d395035a3c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
      ],
      bike: [
        { name: "Bike Helmet", price: "Rs 7,999/-", img: "https://m.media-amazon.com/images/I/614v1unak9L._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Bike Gloves", price: "Rs 2,149/-", img: "https://m.media-amazon.com/images/I/41IbET8MnYL._SX300_SY300_QL70_FMwebp_.jpg" },
        { name: "Key Chain", price: "Rs 79/-", img: "https://m.media-amazon.com/images/I/613ihrbfSDL._SX679_.jpg" },
        { name: "Riding Jacket", price: "Rs 4,500/-", img: "https://m.media-amazon.com/images/I/819rEfNhlEL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Bike Cover", price: "Rs 1,499/-", img: "https://m.media-amazon.com/images/I/51432n71+KL._SX522_.jpg" },
        { name: "Exhaust", price: "Rs 11,999/-", img: "https://m.media-amazon.com/images/I/51AIX6Mu2gL._SX522_.jpg" },
        { name: "Indicators", price: "Rs 3,999/-", img: "https://www.royalenfield.com/content/dam/royal-enfield/india/accessories/product-images/1990486/1990486-640x500.jpg" },
        { name: "Bike Phone Holder", price: "Rs 999/-", img: "https://m.media-amazon.com/images/I/41cInmmEMML._SY445_SX342_QL70_FMwebp_.jpg" },
        { name: "Side Mirror", price: "Rs 4,000/-", img: "https://m.media-amazon.com/images/I/51bfwoOSiTL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Bike seat", price: "Rs 9,999/-", img: "https://m.media-amazon.com/images/I/71fZrNfFK-L._SL1500_.jpg" }
      ],
      gym: [
        { name: "Dumbbells", img: "https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80" },
        { name: "Barbell", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
        { name: "Resistance Bands", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
        { name: "Kettlebells", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" }
      ]
    };

    return Object.entries(productsByTag).flatMap(([key, products]) =>
      products.map(product => ({
        ...product,
        tags: tagGroups[key] || []
      }))
    );
  }

  // Static categories for all products (each with 5 products)
  function getStaticCategories() {
    return [
      {
        category: "Clothes",
        products: [
          { name: "T-Shirt", img: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tags: ["Clothes", "Fashion"] },
          { name: "Jeans", img: "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tags: ["Clothes", "Denim"] },
          { name: "Jacket", img: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tags: ["Clothes", "Winter"] },
          { name: "Dress", img: "https://images.unsplash.com/photo-1676521720160-6f3a0ca2bbb2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tags: ["Clothes", "Women"] },
          { name: "Shirt", img: "https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tags: ["Clothes", "Men"] }
        ]
      },
      {
        category: "Shoes",
        products: [
          { name: "Sneakers", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tags: ["Shoes", "Sneakers"] },
          { name: "Boots", img: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tags: ["Shoes", "Boots"] },
          { name: "Sandals", img: "https://images.unsplash.com/photo-1728973702902-9cd4c75eebdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FuZGxlc3xlbnwwfHwwfHx8MA%3D%3D", tags: ["Shoes", "Sandals"] },
          { name: "Running Shoes", img: "https://images.unsplash.com/photo-1597892657493-6847b9640bac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww", tags: ["Shoes", "Running"] },
          { name: "Loafers", img: "https://images.unsplash.com/photo-1426649397221-b62c5a7824ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9hZmVhcnN8ZW58MHx8MHx8fDA%3D", tags: ["Shoes", "Loafers"] }
        ]
      },
      {
        category: "Electronics",
        products: [
          { name: "Smartphone", img: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8fDA%3D", tags: ["Electronics", "Phone"] },
          { name: "Laptop", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", tags: ["Electronics", "Laptop"] },
          { name: "Headphones", img: "https://images.unsplash.com/photo-1531104985437-603d6490e6d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D", tags: ["Electronics", "Music"] },
          { name: "Smartwatch", img: "https://plus.unsplash.com/premium_photo-1681150012494-7030abadfd3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3Ryb25pYyUyMHdhdGNofGVufDB8fDB8fHww", tags: ["Electronics", "Watch"] },
          { name: "Camera", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww", tags: ["Electronics", "Camera"] }
        ]
      },
      {
        category: "Fruits",
        products: [
          { name: "Apple", img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D", tags: ["Fruits", "Apple"] },
          { name: "Banana", img: "https://plus.unsplash.com/premium_photo-1675731118330-08c71253af17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hfGVufDB8fDB8fHww", tags: ["Fruits", "Banana"] },
          { name: "Orange", img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww", tags: ["Fruits", "Orange"] },
          { name: "Grapes", img: "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGVzfGVufDB8fDB8fHww", tags: ["Fruits", "Grapes"] },
          { name: "Mango", img: "https://plus.unsplash.com/premium_photo-1724255863045-2ad716767715?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuZ298ZW58MHx8MHx8fDA%3D", tags: ["Fruits", "Mango"] }
        ]
      },
      {
        category: "Toys",
        products: [
          { name: "Action Figure", img: "https://images.unsplash.com/photo-1682163339125-321e5a7eac1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFuJTIwdG95fGVufDB8fDB8fHww", tags: ["Toys", "Action"] },
          { name: "Puzzle", img: "https://images.unsplash.com/photo-1612611741189-a9b9eb01d515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHV6emxlfGVufDB8fDB8fHww", tags: ["Toys", "Puzzle"] },
          { name: "Building Blocks", img: "https://images.unsplash.com/photo-1599409460212-39ff69649d5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmclMjBibG9ja3MlMjBsZWdvfGVufDB8fDB8fHww", tags: ["Toys", "Blocks"] },
          { name: "Doll", img: "https://images.unsplash.com/photo-1612506001235-f0d0892aa11b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9sbHxlbnwwfHwwfHx8MA%3D%3D", tags: ["Toys", "Doll"] },
          { name: "Remote Car", img: "https://images.unsplash.com/photo-1612039442391-9444903883e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2hlZWxzfGVufDB8fDB8fHww", tags: ["Toys", "Car"] }
        ]
      }
    ];
  }

});
