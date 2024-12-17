import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Dasnboard.css'; 

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [selectedRole, setSelectedRole] = useState('All');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5656/api/employees');
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);

    if (role === 'All') {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter(emp => emp.role.toLowerCase() === role.toLowerCase());
      setFilteredEmployees(filtered);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Employee Dashboard</h1>
      
      <div className="dashboard-filter">
        <label htmlFor="role">Filter by Role:</label>
        <select id="role" value={selectedRole} onChange={handleRoleChange}>
          <option value="All">All</option>
          <option value="HR">HR</option>
          <option value="Developer">Developer</option>
          <option value="Security Analyst">Security Analyst</option>
          <option value="Manager">Manager</option>
        </select>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Role</th>
            <th>Date of Joining</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <tr key={employee.employeeID}>
                <td>{employee.name}</td>
                <td>{employee.employeeID}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.department}</td>
                <td>{employee.role}</td>
                <td>{new Date(employee.dateOfJoining).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
      <a href="/" className='employeeForm'>Employee Form</a>
    </div>
  );
};

export default Dashboard;
