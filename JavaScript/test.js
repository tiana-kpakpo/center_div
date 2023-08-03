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

