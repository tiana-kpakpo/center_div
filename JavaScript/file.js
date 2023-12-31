const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
];


const userDetails = {
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels",
    email: "jane.daniels@example.com",
    comapny: "Example Inc.",
    address: "1234 Example Street",
    age : 25,
    hobby: "Singing"
};

let keysArray = Object.keys(userDetails);

let filteredKeys = keysArray.filter(key => key.length > 5);

// console.log(filteredKeys);

const userNames = Object.keys(userDetails)
    .filter((key) => key.includes("Name"))
    .reduce((object, key) => {
        return Object.assign(object, {
          [key]: userDetails[key]
        });
  }, {});

// console.log(userNames);

// console.log(keysArray);
  

//   companies.forEach(function(company) {
//   console.log(company.category);
// });

// ages.forEach(function(age){
//     console.log(age)
// } )
// console.log(companies.length)




/****************
 *   filter through an array
 *************************/
// let canDrink = [];

// for (let i = 0; i < ages.length; i++) {

//   if (ages[i] > 21) { //if true enter block
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink)

//or ES6
// const elementary = ages.filter(age => age > 5);

// // const elementary = ages.filter(/function(v){ v > 21 })
// console.log(elementary);



// function getUser(name, school){
//     //code here
// }
// //arrow function
// const getUsers = (name, school) => {
//     //code here
// }

//filter company with category = "Retail"
// const RetailCompanies = companies.filter(company => company.category === "Auto");

// console.log(RetailCompanies)


//filter company with category =  start > 1979 and < 1990
// const eightiesCompany = companies.filter(company => company.start > 1979 && company.start < 1990);
//  console.log(eightiesCompany);



//map

//map company to array of names with start and end years
const companyNames = companies.map(company => {
    return [company.name, company.start, company.end];
  })
//   console.log(companyNames);
  
  //map ages to array of squareroots
  const agesSquared = ages.map(old => {
    // return Math.sqrt(age);
    return old * 4;
  })

//console.log(agesSquared);
  

//sorting

// function(a, b){return a - b}

// sort company by start year
const sortedCompany = companies.sort((a, b) => {
    return a.start - b.start;
  })
//    console.log(sortedCompany);
  
  //sort ages by age
  const sortedAges = ages.sort((a, b) => {
    return a - b;
  })
//   console.log(sortedAges);
  




  //reduce age sum
const sum = ages.reduce((a, b) => {
    return a + b;
  })
  //  console.log(sum);
  
  //reduce total years for all comapnies
  const totalYears = companies.reduce((total, company)  => 
     total + ( company.end - company.start), 0);
  
  
  // const sumCompany = companies.reduce((a  , b) => {
  //   return a.start + b.end;
  // })
  
    //  console.log(totalYears);


    // let filteredUsers = [];
// for (let i= 0; i<users.length; i++) {
//     if (users[i].age > 40 && users[i].occupation === 'programmer' ) {
//         filteredUsers = [...filteredUsers, users[i]];
//     }
// }
// console.log(filteredUsers);



// let filteredUsers = users.filter((user) => {
//     return user.age > 40 && user.occupation === 'programmer';
// });

// console.log(filteredUsers);

// let filteredUsers = users.filter(user => user.age > 20 && user.occupation === 'programmer');
// console.log(filteredUsers);

// let filteredUsers = users.filter(user => user.age > 40);
// console.log(filteredUsers);

let filteredUserNames = users.filter(user => user.age > 40 && user.occupation === 'programmer')
    .sort((a, b) => a.age - b.age)
    .map(user => user.name);

// console.log(filteredUserNames);