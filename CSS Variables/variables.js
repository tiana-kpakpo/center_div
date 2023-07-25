

window.addEventListener('load', () => {

    console.log('variables.js is working');

    const switched = document.querySelector('.content .header .switch');
    
    switched.addEventListener('click', function(e) {
        e.preventDefault();

        document.body.classList.toggle('theme-dark');
    });

});



// JavaScript to handle sidebar toggle for mobile devices
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

// Function to toggle the sidebar when the checkbox state changes
sidebarToggle.addEventListener('change', function () {
  if (this.checked) {
    sidebar.classList.add('active');
  } else {
    sidebar.classList.remove('active');
  }
});







