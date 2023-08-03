console.log(" test our understanding of data types, data properties, and data methods")


// create and object

const info = {
    name: 'Joy Spoon',
    age: 25,
    occupation: 'Software Engineer',
    hobbies: ['Reading', 'Gardening', 'Playing Guitar'],
    address: {
      city: 'New York',
      country: 'USA'
    },
    favoriteColors: ['Green', 'Purple', 'Blue']
  };

  console.log(info)


// turn that object created above into an array

let arryinfo = Object.entries(info)
console.log(arryinfo)

let valuearry = Object.values(info)
console.log(valuearry)


// sort the array and console.log(results)
const sortedinfo = arryinfo.sort((a, b) => {
    return a - b;
  })
  console.log(sortedinfo)

  const sortedvalues = valuearry.sort((a, b) => {
    return a - b;
  })
  console.log(sortedvalues)


  // Convert inner objects into arrays
for (const key in info) {
    if (Object.hasOwnProperty.call(info, key)) {
      info[key] = Object.values(info[key]);
    }
  }
  
  console.log(info);

//   // Convert inner objects into arrays, leave other properties as they are
// for (const [key, value] of Object.entries(info)) {
//     if (typeof value === 'object' && !Array.isArray(value)) {
//       info[key] = Object.values(value);
//     }
//   }
  
//   console.log(info);


// Filter and convert the 'address' property's inner object into an array
const addressArray = Object.values(info.address);

console.log(addressArray);
