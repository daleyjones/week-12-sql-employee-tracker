require('dotenv').config();
const inquirer = require('inquirer');
const { MainMenuQuestions,AddDepartmentQuestions,AddRoleQuestions,AddEmployeeQuestions,UpdateEmployeeRoleQuestions,
  UpdateEmployeeManagerQuestions,
  ViewEmployeesByManagerQuestions,
  ViewEmployeesByDepartmentQuestions,
  DeleteDepartmentQuestions,
  DeleteRoleQuestions,
  DeleteEmployeeQuestions } = require('./questions');
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
      } else if (option === 'update_employee_manager') {
        update_employee_manager();
      } else if (option === 'view_employees_by_manager') {
        view_employees_by_manager();
      } else if (option === 'view_employees_by_department') {
        view_employees_by_department();
      } else if (option === 'delete_department') {
        delete_department();
      } else if (option === 'delete_role') {
        delete_role();
      } else if (option === 'delete_employee') {
        delete_employee();
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
    
      const roleQuestion = AddEmployeeQuestions[1];
      results.forEach((role) => {

        const role_summary = `${role.title} (${role.department_name}) ${role.salary}`;
        roleQuestion.choices.push({
          value: role.id,
          name: role_summary
        });
      });
 db.getEmployees().then((results) => {

      const managerQuestion = AddEmployeeQuestions[2];
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

    const roleQuestion = UpdateEmployeeRoleQuestions[1]; 
    results.forEach((role) => {
      roleQuestion.choices.push({
        value: role.id,
        name: role.title
      });
    });

    inquirer.prompt(UpdateEmployeeRoleQuestions).then((response) => {
      db.getRoles(response).then((results) => {
        console.log('\n', results, '\n');
        doMenuQuestions();
      });
    });
  });
};


const update_employee_manager = () => {
  db.getEmployees().then((results) => {

    const employeeQuestion = UpdateEmployeeManagerQuestions[0];

    results.forEach((employee) => {
      employeeQuestion.choices.push({
        value: employee.id,
        name: employee.name
      });
    });

    const managerQuestion = UpdateEmployeeManagerQuestions[1];
    results.forEach((manager) => {
      managerQuestion.choices.push({
        value: manager.id,
        name: manager.name
      });
    });

    inquirer.prompt(UpdateEmployeeManagerQuestions).then((response) => {
      db.updateEmployeeManager(response).then((results) => {
        console.log('\n', results, '\n');
        doMenuQuestions();
      });
    });
  });
};

const view_employees_by_manager = () => {
  db.getEmployees().then((results) => {
    const managerQuestion = ViewEmployeesByManagerQuestions[0];

    results.forEach((manager) => {
      managerQuestion.choices.push({
        value: manager.id,
        name: manager.name
      });
    });

    inquirer.prompt(ViewEmployeesByManagerQuestions).then((response) => {
      const { manager_id } = response;
      db.getEmployeesByManager(manager_id).then((employees) => {
        if (employees.length === 0) {
          console.log('No employees found for the selected manager.');
        } else {
          console.table(employees);
        }
        doMenuQuestions();
      }).catch((error) => {
        console.error('Error retrieving employees:', error);
        doMenuQuestions();
      });
    });
  });
};


const view_employees_by_department = () => {
  db.getDepartments().then((results) => {
    const departmentQuestion = ViewEmployeesByDepartmentQuestions[0]; 

    results.forEach((department) => {
      departmentQuestion.choices.push({
        value: department.id,
        name: department.name
      });
    });

    inquirer.prompt(ViewEmployeesByDepartmentQuestions).then((response) => {
      const { department_id } = response;
      db.getEmployeesByDepartment(department_id).then((employees) => {
        console.table(employees);
        doMenuQuestions();
      });
    });
  });
};


const delete_department = () => {
  db.getDepartments().then((results) => {
    const departmentQuestion = DeleteDepartmentQuestions[0];
    results.forEach((department) => {
      departmentQuestion.choices.push({
        value: department.id,
        name: department.name
      });
    });

    inquirer.prompt(DeleteDepartmentQuestions).then((response) => {
      const { department_id } = response;
      db.deleteDepartment(department_id).then((results) => {
        console.log('\n', results, '\n');
        doMenuQuestions();
      });
    });
  });
};

const delete_role = () => {
  db.getRoles().then((results) => {
    const roleQuestion = DeleteRoleQuestions[0];
    results.forEach((role) => {
      roleQuestion.choices.push({
        value: role.id,
        name: role.title
      });
    });

    inquirer.prompt(DeleteRoleQuestions).then((response) => {
      const { role_id } = response;
      db.deleteRole(role_id).then((results) => {
        console.log('\n', results, '\n');
        doMenuQuestions();
      });
    });
  });
};

const delete_employee = () => {
  db.getEmployees().then((results) => {
    const employeeQuestion = DeleteEmployeeQuestions[0];
    results.forEach((employee) => {
      employeeQuestion.choices.push({
        value: employee.id,
        name: employee.name
      });
    });

    inquirer.prompt(DeleteEmployeeQuestions).then((response) => {
      const { employee_id } = response;
      db.deleteEmployee(employee_id).then((results) => {
        console.log('\n', results, '\n');
        doMenuQuestions();
      });
    });
  });
};

doMenuQuestions();

