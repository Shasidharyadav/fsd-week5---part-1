// Fetch API data
fetch("https://api.npoint.io/7bbd3a59c401f616bb89")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Access city details
    const cities = data.places;

    // Display city details
    const container = document.getElementById("city-container");
    cities.forEach((city) => {
      const cityElement = document.createElement("div");
      cityElement.classList.add("city");

      const nameElement = document.createElement("h2");
      nameElement.textContent = city.name;
      cityElement.appendChild(nameElement);

      const infoElement = document.createElement("p");
      infoElement.textContent = city.info;
      cityElement.appendChild(infoElement);

      const imageElement = document.createElement("img");
      imageElement.src = city.image;
      cityElement.appendChild(imageElement);

      container.appendChild(cityElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
