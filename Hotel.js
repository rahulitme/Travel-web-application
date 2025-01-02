const hotels = [
  { id: 1, name: "Sunset Paradise", location: "Goa", price: 3000, available: true },
  { id: 2, name: "Mountain Retreat", location: "Manali", price: 5000, available: true },
  { id: 3, name: "Beachside Bliss", location: "Kerala", price: 4000, available: false },
  { id: 4, name: "City Comfort", location: "Mumbai", price: 2000, available: true },
];

function displayHotels(filterFn = null) {
  const hotelList = document.getElementById("hotel-list");
  hotelList.innerHTML = "";

  const filteredHotels = filterFn ? hotels.filter(filterFn) : hotels;

  if (filteredHotels.length === 0) {
    hotelList.innerHTML = `<div class="no-hotels">No hotels match your criteria. Try different filters!</div>`;
    return;
  }

  filteredHotels.forEach((hotel) => {
    const hotelDiv = document.createElement("div");
    hotelDiv.className = "hotel-card";
    hotelDiv.innerHTML = `
      <div class="hotel-image">
        <img src="https://source.unsplash.com/random/400x200/?hotel,${hotel.location}" alt="${hotel.name}">
      </div>
      <div class="hotel-info">
        <h3>${hotel.name}</h3>
        <p><strong>Location:</strong> ${hotel.location}</p>
        <p><strong>Price:</strong> ₹${hotel.price}</p>
        <p><strong>Available:</strong> <span class="${hotel.available ? "available" : "not-available"}">${hotel.available ? "Yes" : "No"}</span></p>
        ${
          hotel.available
            ? `<button onclick="bookHotel(${hotel.id})" class="btn-book">Book Now</button>`
            : `<button class="btn-disabled" disabled>Not Available</button>`
        }
      </div>
    `;
    hotelList.appendChild(hotelDiv);
  });
}

function bookHotel(hotelId) {
  const hotel = hotels.find((h) => h.id === hotelId);
  if (hotel && hotel.available) {
    alert(`You have successfully booked ${hotel.name}!`);
    hotel.available = false;
    displayHotels();
  } else {
    alert("Sorry, this hotel is not available.");
  }
}

function filterByLocation(location) {
  displayHotels((hotel) => hotel.location.toLowerCase() === location.toLowerCase());
}

function filterByPrice(maxPrice) {
  displayHotels((hotel) => hotel.price <= maxPrice);
}

window.onload = function () {
  displayHotels();
};
