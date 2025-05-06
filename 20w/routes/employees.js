const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// @route   GET /api/employees
// @desc    Get all employees
// @access  Public
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/employees/:id
// @desc    Get employee by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    
    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/employees
// @desc    Add a new employee
// @access  Public
router.post('/', async (req, res) => {
  const { name, department, designation, salary, joiningDate } = req.body;
  
  try {
    const newEmployee = new Employee({
      name,
      department,
      designation,
      salary,
      joiningDate
    });
    
    const employee = await newEmployee.save();
    
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/employees/:id
// @desc    Update employee
// @access  Public
router.put('/:id', async (req, res) => {
  const { name, department, designation, salary, joiningDate } = req.body;
  
  // Build employee object
  const employeeFields = {};
  if (name) employeeFields.name = name;
  if (department) employeeFields.department = department;
  if (designation) employeeFields.designation = designation;
  if (salary) employeeFields.salary = salary;
  if (joiningDate) employeeFields.joiningDate = joiningDate;
  
  try {
    let employee = await Employee.findById(req.params.id);
    
    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    
    employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { $set: employeeFields },
      { new: true }
    );
    
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/employees/:id
// @desc    Delete employee
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    
    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    
    await Employee.findByIdAndRemove(req.params.id);
    
    res.json({ msg: 'Employee removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;