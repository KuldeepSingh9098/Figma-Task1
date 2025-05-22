// let array1 = [{
//      name:  "kuldeep",
//      age: 25
// }]

// // let array2 = [{
// //     name: "kuldeep",
// //     age: 26
// // }]

// const array3 = [ ...array1]
// console.log(array3)


// let array1  =  [{
//     name: "kuldeep",
//     age: 25
// }, {
//     name: "sachin",
//     age: 26
// }]

// let array2 = [{
//     name: "kuldeep",
//     age: 26
// }]

// let array3 = [...array1]
// console.log(array3)

// let Pdata = [{
//         name: "kuldeep",
//         age: 26
// }, {name: "Sakshi",


//     age: 21
// }]

// console.log(Pdata[0].index)

// let obj = [{
//     name: "kuldeep",
//     age: 26
// }, {
//     name: "Sakshi",
//     age: 21
// }]

// console.log(obj[1])

class Parent{
      constructor(){
            this.name = "kuldeep"
            this.age =  25
            this.work = "IT Sector"
      }
      
      handleReceived(city){
             console.log(`i am working on ${this.work} and i am living in ${city}`)
      }



}

let obj = new Parent();
console.log(obj.handleReceived("rewa"))







