const MainMenuQuestions = [
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to do?',
      choices: [
        { value: 'view_departments', name: 'View all departments' },
        { value: 'view_roles', name: 'View all roles' },
        { value: 'view_employees', name: 'View all employees' },
        { value: 'add_department', name: 'Add a department' },
        { value: 'add_role', name: 'Add a role' },
        { value: 'add_employee', name: 'Add an employee' },
        { value: 'update_role', name: 'Update an employee role' }
      ]
    }
  ];
  
  const AddDepartmentQuestions = [
    {
      type: 'input',
      name: 'department_name',
      message: 'Enter the name of the new department...'
    }
  ];
  
  const AddRoleQuestions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the new role...'
    },
    {
      type: 'number',
      name: 'salary',
      message: 'Enter the salary of the new role (must be numeric)...',
      validate: function (value) {
        return !isNaN(parseInt(value)) || 'Please enter a number';
      }
    },
    {
      type: 'list',
      name: 'department_id',
      message: 'Select the department for the role...',
      choices: []
    }
  ];
  
  const AddEmployeeQuestions = [
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the first name of the employee...'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the last name of the employee...'
    },
    {
      type: 'list',
      name: 'manager_id',
      message: "Select the employee's manager...",
      choices: []
    }
  ];
  
  const UpdateEmployeeRoleQuestions = [
    {
      type: 'list',
      name: 'role_id',
      message: "Select the employee's new role...",
      choices: []
    }
  ];
  
  module.exports = {
    MainMenuQuestions,
    AddDepartmentQuestions,
    AddRoleQuestions,
    AddEmployeeQuestions,
    UpdateEmployeeRoleQuestions
  };
  