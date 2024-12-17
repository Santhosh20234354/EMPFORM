const db = require('../config/db');

// Add new employee to database
const addEmployee = (employee, callback) => {
    const { name, employeeID, email, phone, department, dateOfJoining, role } = employee;

    const query = `INSERT INTO employees (name, employeeID, email, phone, department, dateOfJoining, role) ` +
                  `VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [name, employeeID, email, phone, department, dateOfJoining, role], callback);
};

// Check for duplicate employee (EmployeeID or Email)
const checkDuplicate = (employeeID, email, callback) => {
    const query = `SELECT * FROM employees WHERE employeeID = ? OR email = ?`;
    db.query(query, [employeeID, email], callback);
};

// Fetch all employees
const getAllEmployees = callback => {
    const query = `SELECT * FROM employees`;
    db.query(query, callback);
};

module.exports = { addEmployee, checkDuplicate, getAllEmployees };