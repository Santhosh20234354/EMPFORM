const express = require('express');
const router = express.Router();
const { addEmployee, getEmployees } = require('../controllers/employeeController');

router.post('/', addEmployee);
router.get('/', getEmployees);

// Fetch all employees directly
router.get('/', (req, res) => {
    const query = 'SELECT * FROM employees';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error fetching employees' });
        }
        res.status(200).json(results);
    });
});

module.exports = router;