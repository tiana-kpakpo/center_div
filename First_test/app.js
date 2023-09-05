window.addEventListener('load', () => {


    console.log('app.js is working'); 


    const btn = document.querySelector('.input-group button');

    btn.addEventListener('click', async function (e) {
        e.preventDefault();

        const email = document.querySelector('input#email');
        const password = document.querySelector('input#password');
        // console.log(email.value);
        const error = document.querySelector('.wrapper form .error');
        const message = document.querySelector('.wrapper form .error .error-message');
        
        message.style.padding = '13px;'

                //checks for empty email and password
        if (email.value == '' || email.value == null || password.value == '' || password.value == null) {
            $(error).fadeIn('slow');
            $(message).text('field cannot be empty');

            // remove error message after 3 seconds
            setTimeout(() => {
                $(error).fadeOut('slow');
            }, 3000);
            return;
        }else{
            
            alert(email.value)

            //make fetch request
            const result = await fetch('http:localhost:5151/api/auth',{
                method: 'POST',
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value
                })
               }) //fetch ends here

               //check http status
               if(result.status != 200){
                //get message from response
                 const response = await result.json();
                $(error).fadeIn('slow');
                $(message).text(response.message);

                    // remove error message after 3 seconds
                    setTimeout(() => {
                        $(error).fadeOut('slow');
                    }, 3000);

                    return;
                   }

                   if(result.status == 200){
                    //getting user back from server

                    const response = await result.json();
                    let name = response.name;
                    window.location.href = `./dashboard.html?name=${name}`;
                
                   }

        }
        

        // email.value = " "
        // password.value = " "


    });

})


//toggle

const light_mode = document.querySelector("div.theme-toggler span.light_mode");
const dark_mode = document.querySelector("div.theme-toggler span.dark_mode");

dark_mode.addEventListener('click', () => {
    document.body.classList.add('dark-theme-variables');
    dark_mode.classList.add('active');
    light_mode.classList.remove('active');
});

light_mode.addEventListener('click', () => {
    document.body.classList.remove('dark-theme-variables');
    dark_mode.classList.remove('active');
    light_mode.classList.add('active');
});




