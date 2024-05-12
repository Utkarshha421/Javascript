// Object

// var myObject = { key : value , key2 : value2 , key3 : value3}

var InsituteDetails = {
    name: "Awdiz",
    age: 10,
    location: "Washi",
    isOpen: true,
    courses: [
      "Full stack Development",
      "CCNA",
      "WINDOWS",
      "LINUX",
      ["hi", "Hello", "target"],
    ],
    batchesDetails: { totalBatches: 50, totalStudents: 500 },
  };
 
//   console.log(InsituteDetails.batchesDetails);
//   console.log(InsituteDetails.courses);
//   console.log(InsituteDetails.location);
//   console.log(InsituteDetails.batchesDetails.totalStudents)
  
//   console.log(InsituteDetails["name"])
//   console.log(InsituteDetails["age"])
//   console.log(InsituteDetails["courses"].length)
  
//   const keys = Object.keys(InsituteDetails);
//   console.log(keys);
//   const values = Object.values(InsituteDetails);
//   console.log(values);
  
    
  const subArray = InsituteDetails.courses[4];
  console.log(subArray[2]);
  
//   for(var i = 0; i < subArray.length; i++){
//       if(subArray[i] === "target"){
//           console.log(i)
//       }
//   }
  
  
  // for (let key in InsituteDetails) {
  //     console.log(key, InsituteDetails[key]);
  //   }