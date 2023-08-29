console.log('response.js is working')


async function getAllresponses() {
    const url = 'https://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/employer/1'

  const result = await fetch(url);
  const response = await result.json()
  console.log('response from server ')
   console.log(response)

   //deconstructing the employees from the responds from the server
const {employee} = response
console.log(employee)

// displaying the employees

const tableBody = document.querySelector('tbody')
tableBody.setAttribute("id", "table_body")

const table = document.querySelector('table');
table.appendChild(tableBody);




}


getAllresponses();

