$(document).ready(function() {
    console.log("main javascript file is working")
  
    const uploadButton = document.querySelector('div.img-profile div.iconDiv');
  
    uploadButton.addEventListener('click', function() {
      $('input[type=file]').click();
    });
  
    $('input[type=file]').change(function() {
      let filePath = $(this).val();
      let fileName = filePath.split('\\').pop().split('/').pop();
      console.log(filePath);
      let img = $('div.img-profile.img.image');
      img.attr('src', filePath);
    });
  
    $('.submit-update').click(function(e) {
      e.preventDefault();
  
      let student_name = $('span#name');
      let school = $('span#school');
      let profile_email = $('span#email');
      let profile_phone = $('span#contact');
  
      let first_name = $('input#firstname').val();
      let last_name = $('input#lastname').val();
      let school_name = $('input#school').val();
      let email = $('input#email').val();
      let phone = $('input#contact').val();
  
      student_name.text(first_name + " " + last_name);
      school.text(school_name);
      profile_email.text(email);
      profile_phone.text(phone);
    });
  });