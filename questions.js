const MainMenuQuestions = [

{

    type: 'list'
    name: 'option',
    message: 'What would you like to do?',
    choices: {
{ value: 'view_departments', name: "view all department"},
{ value: 'view_roles', name: "view all roles"},
{ value: 'view_employees', name: " view all employees},
{ value: 'add_deparment', name: " add a department"},
{value: ' add_role', name: "add a role"},
{ value: 'add_employee', name: "add an employee"},
{ vaule: 'update_role', name: "update an employee role"},


},
},
]


const AddDepartmentQuestions = [

{ 
type : 'input',
name: 'department_name',
message: 'Enter the name of the New Department...'
},
]

const AddRoleQuestions = [
{
type : 'input',
name: 'title',
message: ' Enter the Title of the New Role...'
},
{
    type: 'number', name: 'salary', message: 'Enter the Salary of the new role (must be numeric)...',
    validate: function (value) {
const value = !isNaN(parseInt(value));
return valid || " Please enter a number";
    }
},
{
    type: 'list',
    name: 'department_id',
    message: ' Select the Department for the Roll...',
    choice: {

    },
},
]

const AddEmployeeQuestions = [
{
    type: 'input',
    name: 'first_name',
    message: 'Enter First Name of the employee...',
},
{
    type: 'input',
    name: 'last_name',
    message: 'Enter Last Name of the employee..',

},
{
    type: 'list',
    name: 'manger_id',
    message: ' Select the Employee\'s Manager...',
    choices: {

    },
}





]

