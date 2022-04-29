const employee = [
  {
    name: "Rajat",
    Salary: 40000,
  },
  {
    name: "Sahil",
    Salary: 400000,
  },
  {
    name: "Jagan",
    Salary: 4000,
  },
];

employee.map(emp=>{
    return console.log(emp.name,emp.Salary)
})