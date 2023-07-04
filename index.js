require('dotenv').config();
const inquirer = require('inquirer');
const { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions } = require('./questions');
const EmployeeDatabase = require('./db/EmployeeDatabase.js');

const db = new EmployeeDatabase({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect();

const doMenuQuestions = () => {
  inquirer
    .prompt(MainMenuQuestions)
    .then((response) => {
      const { option } = response;
      if (option === 'view_departments') {
        view_departments();
      } else if (option === 'view_roles') {
        view_roles();
      } else if (option === 'view_employees') {
        view_employees();
      } else if (option === 'add_department') {
        add_department();
      } else if (option === 'add_role') {
        add_role();
      } else if (option === 'add_employee') {
        add_employee();
      } else if (option === 'update_role') {
        update_role();
      } else {
        console.log('Invalid option');
        doMenuQuestions();
      }
    });
};

const view_departments = () => {

  db.getDepartments().then((results) => {

      console.table(results);
      doMenuQuestions();
   
    });
}

const view_roles = () => {

  db.getRoles().then((results) => {

      console.table(results);

      doMenuQuestions();
    });
 
}

const view_employees = () => {

  db.getEmployees().then((results) => {

      console.table(results);

      doMenuQuestions();
    });
   
}

const add_department = () => {
  inquirer
    .prompt(AddDepartmentQuestions)
    .then((response) => {

      db.addDepartment(response).then((results) => {
          console.log('\n', results, '\n');
          doMenuQuestions();
        });
       
    })
}

const add_role = () => {

  db.getDepartments().then((results) => {
      const departmentQuestions = AddRoleQuestions[2];
      results.forEach((department) => {
        departmentQuestions.choices.push({
          value: department.id,
          name: department.name
        });
      });

      inquirer
        .prompt(AddRoleQuestions)
        .then((response) => {
          db.addRole(response)
            .then((results) => {
              console.log('\n', results, '\n');
              doMenuQuestions();
            });
            
          
        })
    });
  
}

const add_employee = () => {
  db.getRoles().then((results) => {
    
      const roleQuestion = AddEmployeeQuestions[2];
      results.forEach((role) => {

        const role_summary = `${role.title} (${role.department_name}) ${role.salary}`;
        roleQuestion.choices.push({
          value: role.id,
          name: role_summary
        });
      });
 db.getEmployees().then((results) => {

      const managerQuestion = AddEmployeeQuestions[3];
      results.forEach((employee) => {
        managerQuestion.choices.push({
          value: employee.id,
          name: employee.name
        });
      });

      managerQuestion.choices.push({
        value: null,
        name: 'None'
      });

      inquirer
        .prompt(AddEmployeeQuestions)
        .then((response) => {
          db.addEmployee(response)
            .then((results) => {
              console.log('\n', results, '\n');
              doMenuQuestions();
            });
        
        })
      
    });
  });
}

const update_role = () => {

  db.getEmployees().then((results) => {

      const employeeQuestion = UpdateEmployeeRoleQuestions[0];
      results.forEach((employee) => {
        employeeQuestion.choices.push({
          value: employee.id,
          name: employee.name
        });
      });

      inquirer
        .prompt(UpdateEmployeeRoleQuestions)
        .then((response) => {
          db.updateEmployeeRole(response).then((results) => {
              console.log('\n', results, '\n');
              doMenuQuestions();
                      });
           
                 })
          });
       
        }

doMenuQuestions();
