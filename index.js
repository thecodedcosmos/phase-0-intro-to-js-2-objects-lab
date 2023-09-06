// Write your solution in this file!
const employee = {
  name: "johnnyAppleseed",
  streetAddress: {
    streetName: "Mercury Lane", 
  },
};

function updateEmployeeWithKeyAndValue() {
    const employee_1 = {
        name : "Sam",
        streetAddress : "11 Broadway",
    }
    const totalEmployees = {...employee , ...employee_1};
    return totalEmployees;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey () {
    const employee_2 = {
        race: "White",
        town: "Murica",
        status: "Rich",
    }

    const {race, ...employee_3} = employee_2;
    return employee_3;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}
