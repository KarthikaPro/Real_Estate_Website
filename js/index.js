
const container = document.getElementById("property-container");

// Fetch data from backend
fetch("http://localhost:5000/api/admin-ranked") // your backend API
  .then(res => res.json())
  .then(data => {
    container.innerHTML = ""; // clear container first

    // Take only first 3 properties
    data.slice(0, 3).forEach(property => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img loading="lazy" class="property-img" src="${property["Property Image"] || ''}" alt="Property Image">
        <div class="property-desc p-3">
                <div class="price">${property["Price Range"]}</div>
        <div class="home-type">${property["Property Type"]}</div>
        <div class="home-address">${property["Address"]}</div>
        <div class="facilities d-flex">
            <ul class="d-flex justify-content-between p-0 w-65">
                <li>
                    <div class="icon"> <i class="fa-solid fa-bed"></i> </div>
                    <p class="bed">${property["Beds"]} beds</p>
                </li>
                <li>
                    <div class="icon"><i class="fa-solid fa-bath"></i></div>
                    <p class="bath">${property["Baths"]} baths</p>
                </li>
                <li>
                    <div class="icon"> <i class="fa-solid fa-house"></i></div>
                    <p class="size">${property["Size (sqft)"]} sqft </p>
                </li>
            </ul>
        </div>

        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error(err));

