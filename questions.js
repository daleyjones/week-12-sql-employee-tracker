const MainMenuQuestions = [
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to do?',
      choices: [
        { value: 'view_departments', name: 'View all departments' },
        { value: 'view_roles', name: 'View all roles' },
        { value: 'view_employees', name: 'View all employees' },
        { value: 'view_employees_by_manager', name: 'View employees by manager' },
        { value: 'view_employees_by_department', name: 'View employees by department' },
        { value: 'add_department', name: 'Add a department' },
        { value: 'add_role', name: 'Add a role' },
        { value: 'add_employee', name: 'Add an employee' },
        { value: 'update_employee_manager', name: 'Update an employee manager' },
        { value: 'update_employee_role', name: 'Update an employee role' },
        { value: 'delete_department', name: 'Delete a department' },
        { value: 'delete_role', name: 'Delete a role' },
        { value: 'delete_employee', name: 'Delete an employee' },
      ],
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
      name: 'employee_id',
      message: "Select the employee's  to update...",
      choices: [],
    },
    {
      type: 'list',
      name: 'role_id',
      message: "Select the employee's new role...",
      choices: [],
    },
  ];
  const UpdateEmployeeManagerQuestions = [
    {
      type: 'list',
      name: 'employee_id',
      message: "Select the employee's ID to update...",
      choices: [],
    },
    {
      type: 'list',
      name: 'manager_id',
      message: "Select the employee's new manager...",
      choices: [], 
    },
  ];
  const ViewEmployeesByManagerQuestions = [
    {
      type: 'list',
      name: 'manager_id',
      message: 'Select the manager to view employees...',
      choices: [],
    },
  ];
  
  const ViewEmployeesByDepartmentQuestions = [
    {
      type: 'list',
      name: 'department_id',
      message: 'Select the department to view employees...',
      choices: [],
    },
  ];
  const DeleteDepartmentQuestions = [
    {
      type: 'list',
      name: 'department_id',
      message: 'Select the department to delete...',
      choices: [],
    },
  ];
  
  const DeleteRoleQuestions = [
    {
      type: 'list',
      name: 'role_id',
      message: 'Select the role to delete...',
      choices: [],
    },
  ];
  
  const DeleteEmployeeQuestions = [
    {
      type: 'list',
      name: 'employee_id',
      message: 'Select the employee to delete...',
      choices: [],
    },
  ];
  
  module.exports = {
    MainMenuQuestions,
    AddDepartmentQuestions,
    AddRoleQuestions,
    AddEmployeeQuestions,
    UpdateEmployeeRoleQuestions,
    UpdateEmployeeManagerQuestions,
    ViewEmployeesByManagerQuestions,
    ViewEmployeesByDepartmentQuestions,
    DeleteDepartmentQuestions,
    DeleteRoleQuestions,
    DeleteEmployeeQuestions,
  };
  ``
  
  