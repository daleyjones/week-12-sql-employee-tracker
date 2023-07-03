
INSERT INTO department (id, name) VALUES (1, 'Marketing');
INSERT INTO department (id, name) VALUES (2, 'Research and Development');
INSERT INTO department (id, name) VALUES (3, 'Finance');
INSERT INTO department (id, name) VALUES (4, 'Legal');

INSERT INTO role (id, title, salary, department_id) VALUES (1, 'Marketing Manager', 120000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'Sales Representative', 80000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Software Engineer', 150000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (4, 'QA Analyst', 90000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (5, 'Financial Analyst', 100000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (6, 'Legal Counsel', 120000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (7, 'Paralegal', 70000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'John', 'Doe', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Jane', 'Smith', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Michael', 'Johnson', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Emily', 'Brown', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'David', 'Taylor', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Sarah', 'Anderson', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Matthew', 'Clark', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Olivia', 'Allen', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (9, 'Daniel', 'Walker', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (10, 'Sophia', 'Young', 1, NULL);
