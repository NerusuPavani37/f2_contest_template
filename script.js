/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(obj => {
     if(obj.profession === 'developer'){
      console.log(obj);
     }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(emp=>{
    if(emp.profession === 'developer'){
      console.log(emp);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newObj = {
    id:4,name:"susan",age:"20",profession:"intern"
  }
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let newArr = arr.filter(obj => obj.profession != 'admin')
  console.log(newArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "pavani", age: "24", profession: "developer" },
    { id: 5, name: "sravani", age: "23", profession: "Devops" },
    { id: 6, name: "yamini", age: "22", profession: "Hr" },
  ]

 let concatenatedArr=arr.concat(arr1);
 console.log(concatenatedArr);
}
