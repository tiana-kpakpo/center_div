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

// const locationParam = new adminLocation(window.location.index.html)
// const username = adminLocation.get('username')
// if (username) {
//     // Set the username in the profile page
//     const usernamePlaceholder = document.getElementById('usernamePlaceholder');
//     usernamePlaceholder.textContent = username;

//     // Display a welcome message on the profile page
//     const welcomeMessage = document.getElementById('welcomeMessage');
//     welcomeMessage.textContent = `Hey, ${username}`;
// }


// const btn2 = document.querySelector('.sidebar a > span.material-symbols-sharp')
// btn2.addEventListener('click', () =>{
//     window.location.href = `./index.html`
// })

// })



fetch('https://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/employer/1')
.then(
    response  => {
        if(!response.ok){
            throw new Error ('response was not ok')
        }
        return response.json()
    }
).then(empData => {
    const employeeTable = document.getElementById("emp-table").getElementsByTagName('tbody')[0]
    empData.forEach(employee => {
        const row = employeeTable.insertRow()
        row.innerHTML = ` ><td> ${employee.job_title} </td>
                 <td> ${employee.name} </td>
                 <td> ${employee.email} </td>
                 <td class="employee-control">
                  <span class="material-icons-outlined deleteBtn" >delete</span>
                    <span class="material-icons-outlined editBtn">edit</span> </td>`;

                    const editBtn = row.querySelector(".editBtn")
                    const deleteBtn = row.querySelector(".deleteBtn")

                    editBtn.addEventListener('click', () => {
                        console.log(`Editing Employee: ${employee.name}`)
                    })

                    deleteBtn.addEventListener('click', () => {
                        console.log(`Deleting Employee: ${employee.name}`)
                        row.remove()
                    })
    }).catch (error => {
        console.error('error', error)
    })

})






// const fetch_employees = async () => {

//     try {
//         const url = 'https://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/employer/1'
//         const result = await fetch(url);

//         const response = await result.json()
//         console.log('response from server ')
//         // console.log(response)

//         //deconstructing the employees from the responds from the server
//         const { employee } = response
//         // console.log(employee)

//         // if (!response.ok) {
//         //     throw new Error(`HTTP Error status: ${response.status}`)

//         // }

//     } catch (error) {
//         throw error
//     }



// }

// fetch_employees();




// const displayEmployees = async () => {
//     try {
//         const employee = await fetch_employees()
//         const tableBody = document.querySelector('tbody')
//         tableBody.setAttribute("id", "table_body")

//         employee.forEach( employ => {
//             const display_tb = document.getElementById(table-body)
//             const employeeDiv = document.createElement('div')
//             employeeDiv.classList.add('employee-table')
//             employeeDiv.innerHTML = ` 
//             </div><h2> ${employee.job_title} </h2>
//         <h2> ${employee.name} </h2>
//         <h2> ${employee.email} </h2>
//         <div class="employee-control">
//           <span class="material-icons-outlined">delete</span>
//             <span class="material-icons-outlined">edit</span>
//         `

//         tableBody.appendChild(employeeDivDiv)
//         // userControls.appendChild(user-card)

      
    



    //     }

    //     )

        

    // }catch (error){
    //     throw error
    // }

// }