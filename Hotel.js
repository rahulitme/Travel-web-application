const hotels = [
  { 
    id: 1, 
    name: "Sunset Paradise", 
    location: "Goa", 
    price: 3000, 
    available: true,
    imageUrl: "https://plus.unsplash.com/premium_photo-1734543932698-11eebd527d0a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 2, 
    name: "Mountain Retreat", 
    location: "Manali", 
    price: 5000, 
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1736890729709-4443ac5b6bf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 3, 
    name: "Beachside Bliss", 
    location: "Kerala", 
    price: 4000, 
    available: false,
    imageUrl: "https://images.unsplash.com/photo-1737541332978-2e8e6b15a3cc?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 4, 
    name: "City Comfort", 
    location: "Mumbai", 
    price: 2000, 
    available: true,
    imageUrl: "https://plus.unsplash.com/premium_photo-1664371206027-c5accf6fffd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D"
  },
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
        <img src="${hotel.imageUrl}" alt="${hotel.name}">
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