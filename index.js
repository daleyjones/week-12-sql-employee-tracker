const inquirer = require ('inquirer');
const { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions } = require('./questions');
const { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions} = require (./EmployeeDatabase.js');


const db = new EmploymentDatabse ({

host: 'localHost',
User: 'root'
password: 'Daley281092!'
database: ' emploee_db'

});

db.connect();

const doMenuQuestions = () => {


inquirer
.promt . (MainMenuQuestions)
.then ((response)) => {


    switch (response.option){
        case ' view_departmnent':
            view_department();
            break;
            case 'view_roles();
            view_roles();
            break;
            case ' view_rolees'
            view_roles();
            break;
            case 'view_emploees'
            view_employees
            break;
            casee 'add_department';
            add_department();
            break;
            case 'add)_roles';
            add_role();
            break;
            case 'update_role';
            update_role();
            break;
    }
}



const view_departments = () => {




    
}