const inquirer = require('inquirer');
const connection = require('./connection');

function getAllDepartments() {
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    console.table(results); 
    mainMenu();
  });
}

function getAllRoles() {
  connection.query('SELECT * FROM role', (err, results) => {
    if (err) throw err;
    console.table(results); 
    mainMenu();
  });
}

function getAllEmployees() {
  connection.query('SELECT * FROM employee', (err, results) => {
    if (err) throw err;
    console.table(results); 
    mainMenu();
  });
}

function mainMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Exit'
        ]
      }
    ])
    .then(answer => {
      switch (answer.action) {
        case 'View all departments':
          getAllDepartments();
          break;
        case 'View all roles':
          getAllRoles();
          break;
        case 'View all employees':
          getAllEmployees();
          break;
        case 'Exit':
          console.log('Goodbye!');
          connection.end();
          break;
      }
    });
}

mainMenu();
