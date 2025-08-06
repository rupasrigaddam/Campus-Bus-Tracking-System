function initMap() {
  // Try to get the user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const userLocation = { lat: userLat, lng: userLng };

        const map = new google.maps.Map(document.getElementById("map"), {
          center: userLocation,
          zoom: 15,
        });

        new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "You are here!",
        });
      },
      function () {
        alert("⚠️ Location access denied or unavailable.");
      }
    );
  } else {
    alert("❌ Your browser doesn't support location.");
  }
}


function toggleMap() {
  const mapSection = document.getElementById("map-section");
  if (mapSection.style.display === "none" || mapSection.style.display === "") {
    mapSection.style.display = "block";
    initMap(); // Show map and initialize
  } else {
    mapSection.style.display = "none";
  }
}

<script>
  window.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const username = localStorage.getItem("username");

    if (isLoggedIn && username) {
      document.getElementById("login-item").style.display = "none";
      document.getElementById("user-profile").style.display = "block";
      document.getElementById("display-name").textContent = username;
      document.getElementById("dropdown-name").textContent = username;
    }
  });

  function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "login.html";
  }
</script>

