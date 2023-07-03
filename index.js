const inquirer = require('inquirer');
const { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions } = require('./questions');
const { EmploymentDatabase } = require('./EmployeeDatabase');

const db = new EmploymentDatabase({
    host: 'localhost',
    user: 'root',
    password: 'Daley281092!',
    database: 'employee_db'
});

db.connect();

const doMenuQuestions = () => {
    inquirer
        .prompt(MainMenuQuestions)
        .then((response) => {
            switch (response.option) {
                case 'view_departments':
                    view_departments();
                    break;
                case 'view_roles':
                    view_roles();
                    break;
                case 'view_employees':
                    view_employees();
                    break;
                case 'add_department':
                    add_department();
                    break;
                case 'add_role':
                    add_role();
                    break;
                case 'add_employee':
                    add_employee();
                    break;
                case 'update_role':
                    update_role();
                    break;
                default:
                    console.log('Invalid option');
                    doMenuQuestions();
                    break;
            }
        });
};

const view_departments = () => {
    db.getDepartments().then((results) => {
        console.table(results);
        doMenuQuestions();
    });
};

const view_roles = () => {
    db.getRoles().then((results) => {
        console.table(results);
        doMenuQuestions();
    });
};

const view_employees = () => {
    db.getEmployees().then((results) => {
        console.table(results);
        doMenuQuestions();
    });
};

const add_department = () => {
    inquirer
        .prompt(AddDepartmentQuestions)
        .then((response) => {
            db.addDepartment(response).then((results) => {
                console.log('\n', results, '\n');
                doMenuQuestions();
            });
        });
};

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
                db.addRole(response).then((results) => {
                    console.log('\n', results, '\n');
                    doMenuQuestions();
                });
            });
    });
};

const add_employee = () => {
    db.getRoles().then((results) => {
        const roleQuestions = AddEmployeeQuestions[2];
        results.forEach((role) => {
            const role_summary = `${role.title} (${role.department_name}) ${role.salary}`;
            roleQuestions.choices.push({
                value: role.id,
                name: role_summary
            });
        });

        inquirer
            .prompt(AddEmployeeQuestions)
            .then((response) => {
                db.addEmployee(response).then((results) => {
                    console.log('\n', results, '\n');
                    doMenuQuestions();
                });
            });
    });
};

doMenuQuestions();
