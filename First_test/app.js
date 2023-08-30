window.addEventListener('load', () => {


   console.log('app.js is working');


        const btn = document.querySelector('.wrapper form .form-group button');

       btn.addEventListener('click', function(e) {
           e.preventDefault();

           const username = document.querySelector('.wrapper form .form-group input[type="username"]');
           const email = document.querySelector('.wrapper form .form-group input[type="email"]');
            // console.log(email.value);
            const error = document.querySelector('.wrapper form .error');
           const message = document.querySelector('.wrapper form .error .error-message');

           if( email.value == '' || email.value == null){
               $(error).fadeIn('slow');
               $(message).text('email cannot be empty');

                // remove error message after 3 seconds
                 setTimeout(() => {
                    $(error).fadeOut('slow');
                }, 3000);
               return;
            }

           username.value = " "
            email.value = " "

          window.location.href = `./dashboard.html?email=${email.value}`;

       });


 })



const themeToggler = document.querySelector('.theme-toggler');
const icons = themeToggler.querySelectorAll('.material-icons-sharp');
themeToggler.addEventListener('click', () => {
//    Toggle the "active" class on both icons
  icons.forEach(icon => icon.classList.toggle('active'));
  document.body.classList.toggle('dark-mode');

 });
