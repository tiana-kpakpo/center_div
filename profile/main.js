$(document).ready(function () {
    console.log("main JavaScript file is working");

    const uploadButton = document.querySelector('.img-profile .iconDiv');

    uploadButton.addEventListener('click', function () {
        $('input[type=file]').click();
    });

    $('input[type=file]').change(function (e) {
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function (e) {
            let img = $('.img-profile .image');
            img.attr('src', e.target.result);
        };

    });

    $('.submit-update').click(function (e) {
        e.preventDefault();

        let student_name = $('#name');
        let school = $('#school');
        let profile_email = $('#email');
        let profile_phone = $('#contact');

        let first_name = $('#firstname').val();
        let last_name = $('#lastname').val();
        let school_name = $('#school').val();
        let email = $('#email').val();
        let phone = $('#contact').val();

        student_name.text(first_name + " " + last_name);
        school.text(school_name);
        profile_email.text(email);
        profile_phone.text(phone);
    });
});