const Database = require('./Database.js');

class EmployeeDatabase extends Database {
  constructor(options) {
    super(options);
  }

  getDepartments() {
    return new Promise((resolve, reject) => {
      this.db.query('SELECT * FROM department', (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  }

  getRoles() {
    return new Promise((resolve, reject) => {
      this.db.query(
        `SELECT role.id, role.title, 
         FORMAT(salary, 0) as formatted_salary, 
         department.name as department_name 
        FROM role 
        INNER JOIN department ON role.department_id = department.id`,
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        }
      );
    });
  }

  getEmployees() {
    return new Promise((resolve, reject) => {
      this.db.query(
        `SELECT employee.id, 
         CONCAT_WS(' ', employee.first_name, employee.last_name) as name,
         role.title as role_title, role.salary as role_salary,
         department.name as department_name,
         IF(employee.manager_id IS NULL, '', 
            CONCAT_WS(' ', manager.first_name, manager.last_name))) as manager_name
        FROM employee
        INNER JOIN role ON employee.role_id = role.id
        INNER JOIN department ON role.department_id = department.id
        LEFT JOIN employee as manager ON employee.manager_id = manager.id`,
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        });
    });
  }


  addDepartment(department) {
    return new Promise((resolve, reject) => {
        this.db.query('INSERT INTO department SET?', {name: department.department_name} , (err, result) => {
            if (err){
                reject(err);
            }

            resolve('Department $(dep)
        }





  }
}

module.exports = EmployeeDatabase;
