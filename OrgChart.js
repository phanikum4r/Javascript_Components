const people = [
    { name: "Alice", empId: "8", managerID: "8" },
    { name: "James", empId: "9", managerID: "9" },
    { name: "Bob", empId: "7", managerID: "8" },
    { name: "clair", empId: "6", managerID: "7" },
    { name: "ron", empId: "5", managerID: "7" },
    { name: "harry", empId: "11", managerID: "9" },
    { name: "david", empId: "12", managerID: "11" },
    { name: "peter", empId: "13", managerID: "12" },
    { name: "cody", empId: "14", managerID: "11" },    
];

const managers = people.filter(emp => emp.managerID===emp.empId);
// adjacency list for graph
const heirarchy = {}
for(let person of people){
    if(!heirarchy[person.managerID]){
        heirarchy[person.managerID] = []
    }
    if(person.managerID !== person.empId){
        heirarchy[person.managerID].push(person)
    }
}

function printChart(employee, left){
    console.log(left + employee.name);
    if(heirarchy[employee.empId]){
        heirarchy[employee.empId].forEach(emp => printChart(emp, left + " "))
    }  
}

managers.forEach(manager => printChart(manager, ""));
