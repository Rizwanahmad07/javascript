
var person ={
    firstName:"rizzu",
    age:"21",
    isMale: true,
    balance:1000,
    dob :new Date(2003,8,26).toJSON(),
    address:{    
        city: "muzaffarpur"
    }  
};
console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));