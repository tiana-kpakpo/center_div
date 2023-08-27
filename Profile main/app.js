
// ------------------- wait for all elements to load ------------------- 
$(document).ready(function() {


    console.log("main javascript file is working")
    
    const uploadButton = document.querySelector('div.img-profile div.iconDiv');
    
    uploadButton.addEventListener('click', function() {
       document.querySelector('input[type=file]').click();
       //path to image file
       $('input[type=file]').change(function (e) {
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function (e) {
            let img = $('.img-profile .image');
            img.attr('src', e.target.result);
        };


    });
    
    
    });
    
    setInterval(() => {
    
    const width = window.innerWidth;
    
    if( width <= 425){
    
    const contactLabel = document.querySelector("div.form-control.contact > label");
    $(contactLabel).text('');
    $(contactLabel).text('Contact');
    
    }
    
    }, 4000);
    
    
    
    
    const changeProfile = document.querySelector('.header span');
    // -------- switch to edit profile---------------
    changeProfile.addEventListener('click', function() {
        const editProfile = document.querySelector('.edit-profile');
        const profileControl = document.querySelector('.profile-control');
        profileControl.classList.remove('d-flex');
        profileControl.classList.add('d-none');
    
        // -----------  show edit profile --------------
        editProfile.classList.remove('d-none');
        editProfile.classList.add('d-block');
    
        const editHeader = document.querySelector('.header h3');
        editHeader.style.display = 'flex';
    });
    
    
    
    
    
    $('.submit-update').click(function (e) { 
        e.preventDefault();
    
        const editHeader = document.querySelector('.header h3');
        editHeader.style.display = 'none';
    
    
    
        // ---------------- get window width ----------------
        const width = window.innerWidth;
        console.log(width);
    
        if( width <= 425){
            // alert("Please use a desktop to update your profile");
    
          
            const editProfile = document.querySelector('.edit-profile');
            profileInfo = document.querySelector('.profile-control .profile-info');
            // editProfile.style.display = 'none';
            
            const profileControl = document.querySelector('.profile-control');
            profileControl.style.height = '100vh';
            profileControl.classList.remove('d-none');
            profileControl.classList.add('d-flex');
        
            // -----------  show edit profile --------------
            editProfile.classList.remove('d-block');
            editProfile.classList.add('d-none');
    
        }
        
        // ---------------------span  selecting elements from our webpage----------------------------
    //    let student_name =  $('span#name');
    //    let school = $('span#school');
    //    let profile_email = $('span#email');
    //    let profile_phone = $('span#contact');
    
    
    // // ---------------------- get form data --------------------------
    //    let first_name = $('input#firstname').val();
    //    let last_name = $('input#lastname').val();
    //     let school_name = $('input#school').val();
    //     let email = $('input#email').val();
    //     let phone = $('input#contact').val();
    
    //     student_name.text('');
    //     student_name.text(first_name+ " " +last_name);
    //     school.text('');
    //     school.text(school_name);
    //     profile_email.text('');
    //     profile_email.text(email);
    //     profile_phone.text('');
    //     profile_phone.text(phone);
    
    
        
    });
    
    
      //---------------- post data to server -----------------------
 
      (async() =>{
        console.log("self invoking function is working")
 
       
 
        //----------- get form data-------------
        const fn = document.querySelector('input#firstname').value
        const ln = document.querySelector('input#lastname').value
        const school_right = document.querySelector("input#school").value;
       const email_right = document.querySelector("input#email").value;
       const phone_right = document.querySelector("input#contact").value;
 
       if(fn == '' || email_right == '' || ln == '' || school_right == '' || phone_right == ''){
         alert('please fill all fields')
 
         return 
       }
 
       const postData = {
         firstname: fn,
         lastname: ln,
         email: email_right,
         school: school_right,
         contact: phone_right,
       }
 
       // console.log(postData)
 
    //    console.log(fn)

     //------------------ ajax approach ---------------
      // $.ajax({
      //   type: "POST",
      //   url: "http://localhost:8000/api/user",
      //   dataType : "json",
      //   contentType: "application/json; charset=utf-8",
      //   data: JSON.stringify(postData),
      //   success: function (response) {
      //     console.log(response)
      //   }
      // });
 
 
     
        try{
        //    // const url ='https://pick-up-service-de35950ca197.herokuapp.com/api'
        //   const result = await fetch('http://localhost:8000/api/user',{
        //     method: 'POST',
        //     header: {
        //        'Content-Type': 'application/json',
        //        },
            
        //    body: JSON.stringify({ 
        //    firstname: fn,
        //    lastname: ln,
        //    email: email_right,
        //    school: school_right,
        //    contact: phone_right
        //  })

        const url ='https://pick-up-service-de35950ca197.herokuapp.com/api'

        const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Set the content type to JSON
        },
        body: JSON.stringify(postData) // Convert user data to JSON string
      };
 
       })//fetch ends here
 
       const res = await result.json();
       console.log(res)
 
     } catch(error){
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorCode, errorMessage);
     }
     
      
   
      })();
 
   });
 
    
    // ------------------- wait for all element to load ends ------------------- 
    
    
 