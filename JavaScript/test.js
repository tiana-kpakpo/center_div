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

 const users= [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
   
  ]


//   const usersObject = JSON.stringify(users)
//   console.log(usersObject);

// const filteredUsers = users.filter
 
  




//   console.log(info)


// turn that object created above into an array
// BODMAS

let arryInfo = Object.entries(info).sort()
// console.log(arryInfo)

const sortedInfo = Object.fromEntries(arryInfo)
for (key in sortedInfo){
        
    if (typeof sortedInfo[key] === "object" && !Array.isArray(sortedInfo[key])) {
        sortedInfo[key] = Object.entries(sortedInfo[key])
    }
}

for (key in sortedInfo){
    if (Array.isArray(sortedInfo[key])) {
        sortedInfo[key].sort()
    }  
    
}
// console.log(sortedInfo)

const myAddress = sortedInfo.address
// console.log(myAddress[0][1]);

// console.log(myAddress.slice(0,-2));

// const hobs =sortedInfo.hobbies
// console.log(hobs[2]);

// console.log(sortedInfo.age);

// console.log(sortedInfo.address[1][1]);






