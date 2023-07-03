const Database = require('./Database.js');

class EmployeeDatabase extends Database {
    constructor (options) {
        super (options);
    }


getDeparments () {
    return new Promise ((resolve, reject) =>{
        this.db.query('SELECT * FROM department', (err, results) =>{
        if (err) {
            reject(err);

        }
        resolve(results);
    });
});
    }


getEmployess () {

    return new Promise((resolve, reject) => {
        this.db.query('SELECT role.id, role.title, CONCAT('£', FORMAT(salary, 0), ' p/a') as salary, department.name as department_name FROM role INNER JOIN Department
            'SELECT
            employee.id,

        )
    }
}