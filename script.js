// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Process the form submission here
});