console.log(" test our understanding of data types, data properties, and data methods")


// create and object

const info = {
    name: 'Joy Spoon',
    age: 25,
    occupation: 'Software Engineer',
    hobbies: ['Reading', 'Gardening', 'Playing Guitar'],
    address: {
      country: 'USA',
      city: 'New York',
      county:'Brooklyn',
    },
    favoriteColors: ['Green', 'Purple', 'Blue']
  };

//   console.log(info)


// turn that object created above into an array
// BODMAS

let arryInfo = Object.entries(info).sort()
console.log(arryInfo)




