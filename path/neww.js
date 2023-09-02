function checkScreenSize() {
    const mobileScreenWidth = 745; // Example mobile screen width in pixels
    const screenWidth = window.innerWidth;
    const contentDiv = document.getElementById('content');
    const messageDiv = document.getElementById('message');
  
    if (screenWidth > mobileScreenWidth) {
      contentDiv.style.display = 'none'; // Hide content on larger screens
      messageDiv.style.display = 'block'; // Show message on larger screens
    } else {
      contentDiv.style.display = 'block'; // Show content on smaller screens
      messageDiv.style.display = 'none'; // Hide message on smaller screens
    }
  }
  
  // Initial check on page load
  checkScreenSize();
  
  // Add event listener to recheck screen size on window resize
  window.addEventListener('resize', checkScreenSize);
  
