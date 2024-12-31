// Welcome Message
function displayWelcomeMessage() {
    const welcomeDiv = document.getElementById('welcome-message');
    const currentHour = new Date().getHours();
  
    let greeting;
    if (currentHour < 12) {
      greeting = 'Good Morning!';
    } else if (currentHour < 18) {
      greeting = 'Good Afternoon!';
    } else {
      greeting = 'Good Evening!';
    }
  
    welcomeDiv.textContent = `${greeting} Welcome to our website!`;
  }
  
  // Slideshow Functionality
  let currentSlide = 0;
  
  function showSlide(index) {
    const slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
  
    // Loop back to the first slide if index exceeds the number of slides
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
  
    slides[currentSlide].style.display = 'block';
  }
  
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function previousSlide() {
    showSlide(currentSlide - 1);
  }
  
  // Initialize the homepage
  function initializeHomepage() {
    displayWelcomeMessage();
    showSlide(0);
  
    // Add event listeners for slideshow navigation
    document.getElementById('next-btn').addEventListener('click', nextSlide);
    document.getElementById('prev-btn').addEventListener('click', previousSlide);
  }
  
  // Call the initializer on page load
  window.onload = initializeHomepage;
  