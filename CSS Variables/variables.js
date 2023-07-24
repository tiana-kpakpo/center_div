

window.addEventListener('load', () => {

    console.log('variables.js is working');

    const switched = document.querySelector('.content .header .switch');
    
    switched.addEventListener('click', function(e) {
        e.preventDefault();

        document.body.classList.toggle('theme-dark');
    });

});

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-250px") {
      sidebar.style.left = "0";
    } else {
      sidebar.style.left = "-250px";
    }
  }