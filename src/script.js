const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Function to load the testimonial content
// function loadTestimonial() {
//   fetch("testimonial.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("testimonial-container").innerHTML = data;
//       // After loading the content, initialize the slider
//       initializeSlider();
//     })
//     .catch((error) => console.error("Error loading testimonial:", error));
// }

// Function to initialize the slider (from your original script)
// function initializeSlider() {
//   const slider = document.getElementById("testimonial-slider");
//   const slideWidth = slider.clientWidth;
//   let currentSlide = 0;

//   function showSlide(index) {
//     currentSlide = index;
//     slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
//     updateDots();
//   }

//   function updateDots() {
//     const dots = document.querySelectorAll(".flex.justify-center button");
//     dots.forEach((dot, index) => {
//       dot.classList.toggle("bg-gray-600", index === currentSlide);
//       dot.classList.toggle("bg-gray-300", index !== currentSlide);
//     });
//   }

//   // Initialize
//   updateDots();

//   // Make showSlide function global so it can be called from the HTML
//   window.showSlide = showSlide;
// }

// Load the testimonial when the page loads
// window.addEventListener("load", loadTestimonial);

// Function to load the features content
// function loadFeatures() {
//   fetch("features.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("features-container").innerHTML = data;
//     })
//     .catch((error) => console.error("Error loading features:", error));
// }

// Load the features when the page loads
// window.addEventListener("load", loadFeatures);

// Function to load the quickstart content
// function loadQuickStart() {
//   fetch("quickstart.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("quickstart-container").innerHTML = data;
//     })
//     .catch((error) => console.error("Error loading quickstart:", error));
// }

// // Load the quickstart when the page loads
// window.addEventListener("load", loadQuickStart);

// Function to load the Specification content
// function loadSpecification() {
//   fetch("specification.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("Specification-container").innerHTML = data;
//     })
//     .catch((error) => console.error("Error loading quickstart:", error));
// }

// // Load the Specification when the page loads
// window.addEventListener("load", loadSpecification);

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicators = document.getElementById("indicators");

  let currentSlide = 0;
  const slides = carousel.children;
  const totalSlides = slides.length;

  // Create indicators
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.className = `h-2 w-2 rounded-full mx-1 ${
      i === 0 ? "bg-gray-800" : "bg-gray-400"
    }`;
    dot.onclick = () => goToSlide(i);
    indicators.appendChild(dot);
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateIndicators();
  }

  function updateIndicators() {
    Array.from(indicators.children).forEach((indicator, index) => {
      indicator.className = `h-2 w-2 rounded-full mx-1 ${
        index === currentSlide ? "bg-gray-800" : "bg-gray-400"
      }`;
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Optional: Auto-advance slides every 5 seconds
  setInterval(nextSlide, 5000);
});
