function parseEmployee(input) {
    let stuff = [];
    for (let line of input) {
        let arr = line.match(/^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)$/);
        let employee = {};
        if (arr != null) {
            employee.name = arr[1];
            employee.salary = arr[2];
            employee.position = arr[3];
            stuff.push(employee);
        }
        continue;
    }
    stuff.forEach(function (e) {
        console.log(`Name: ${e.name}`);
        console.log(`Position: ${e.position}`);
        console.log(`Salary: ${e.salary}`);
    })
}

parseEmployee([
    'Jonathan - 2000 – Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader'
])

