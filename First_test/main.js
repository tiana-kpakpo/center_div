console.log('response.js is working')

 //get admin name
 const adminName = document.querySelector('#admin-name');
 //get all url parameters
 const params = new URLSearchParams(window.location.search);
 
 if(params.has('name')){
     adminName.innerHTML = params.get('name');
 }

async function getAllResponses() {
  const url = 'https://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/employer/1';

  try {
    const result = await fetch(url);
    const response = await result.json();
    console.log('response from server');
    console.log(response);

    // Destructure the 'employee' array from the response
    const { employee } = response;
    console.log(employee);

    // Get the table body element
    const tableBody = document.getElementById('table_body');

    // Clear existing table rows if any
    tableBody.innerHTML = ' ';

    // Populate the table with employee data
    employee.forEach(emp => {
      const row = tableBody.insertRow();

      const jobCell = row.insertCell(0);
      jobCell.textContent = emp.job_title;

      const nameCell = row.insertCell(1);
      nameCell.textContent = emp.name;

      const emailCell = row.insertCell(2);
      emailCell.textContent = emp.email;

      const actionCell = row.insertCell(3);

      //action icons
      actionCell.innerHTML = `
      <i class="material-icons edit-button" data-id="${emp.id}">edit</i>
      <i class="material-icons delete-button" data-id="${emp.id}">delete</i>
           `;
    });

    const editButtons = document.querySelectorAll('.edit-button');
    const deleteButtons = document.querySelectorAll('.delete-button');

    editButtons.forEach(button => {
      button.addEventListener('click', handleEdit);
    });

    deleteButtons.forEach(button => {
      button.addEventListener('click', handleDelete);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// handleEdit function
async function handleEdit(event) {
    const employeeId = event.target.getAttribute('data-id');
    // Redirect to an edit page 
    window.location.href = `patch.html?id=${employeeId}`;
}

// handleDelete function
async function handleDelete(event) {
    const employeeId = event.target.getAttribute('data-id');
    const deleteUrl = `https://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/employee/${employeeId}`;

      // Ask for confirmation before proceeding
      const confirmed = window.confirm('Are you sure you want to delete this employee?');

      if (!confirmed) {
          return; // User canceled the deletion
      }

    try {
      
        const result = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }); //fetch ends 

        const response = await result.json();
        console.log('Delete response:', response);

        // transition
        const deleteRow= e.target.parentElement.parentElement;
        const employee = deleteRow.parentElement;
        employee.classList.add('remove-deleted');
        employee.addEventListener('transitionend', () => {
            employee.remove();
        })

        if (response) {
          const rowToDelete = event.target.closest('tr');
            rowToDelete.classList.add('remove-deleted');

          
            setTimeout(() => {

                rowToDelete.remove();
            // Refresh the table after successful deletion
            getAllResponses();
            },300);
        } else {
            console.log('Delete operation did not return a response.');
        }
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

getAllResponses();



  
