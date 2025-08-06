// Show bus cards when "Buses" button is clicked
document.querySelector("#bushbtn").addEventListener("click", () => {
  fetch("buses.json")
    .then((res) => res.json())
    .then((data) => renderCards(data.buses));
});

// Show driver cards when "Drivers" button is clicked
document.querySelector("#driverhbtn").addEventListener("click", () => {
  fetch("buses.json")
    .then((res) => res.json())
    .then((data) => renderDrivers(data.drivers));
});

// Render bus cards
function renderCards(buses) {
  const container = document.querySelector("#cardcontainer");
  container.innerHTML = "";
  buses.forEach((bus) => {
    const card = document.createElement("div");
    card.className = "box-card";
    card.innerHTML = `
      <img src="${bus.image}" alt="Bus" />
      <h3>${bus.name}</h3>
      <p>Route: ${bus.route}</p>
      <p>Bus Number: ${bus.busnumber}</p>
    `;
    container.appendChild(card);
  });
}

// Render driver cards with driver images
function renderDrivers(drivers) {
  const container = document.querySelector("#cardcontainer");
  container.innerHTML = "";
  drivers.forEach((driver) => {
    const card = document.createElement("div");
    card.className = "box-card";
    card.innerHTML = `
      <img src="${driver.image}" alt="${driver.name}" />
      <h3>${driver.name}</h3>
      <p>Route: ${driver.route}</p>
      <p>Phone: ${driver.mnumber}</p>
    `;
    container.appendChild(card);
  });
}

// Redirect to login page
document.querySelector("#loginbtn").addEventListener("click", () => {
  window.location.href = "login.html";
});

  // Toggle dropdown visibility
  function toggleDropdown() {
    const dropdown = document.getElementById("profile-dropdown");
    dropdown.classList.toggle("show");
  }

  // Show profile if logged in
  window.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const username = localStorage.getItem("username");

    if (isLoggedIn && username) {
      document.getElementById("loginbtn").style.display = "none";
      document.getElementById("profile-dropdown").style.display = "block";
      document.getElementById("profile-name").textContent = username;
      document.getElementById("dropdown-username").textContent = username;
    }
  });

  function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "login.html";
  }

  // Close dropdown on outside click
  window.addEventListener("click", function (e) {
    if (!document.getElementById("profile-dropdown").contains(e.target)) {
      document.getElementById("profile-dropdown").classList.remove("show")
    }
  });

