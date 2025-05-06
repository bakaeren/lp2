const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  department: {
    type: String,
    required: [true, 'Please add a department'],
    trim: true
  },
  designation: {
    type: String,
    required: [true, 'Please add a designation'],
    trim: true
  },
  salary: {
    type: Number,
    required: [true, 'Please add a salary']
  },
  joiningDate: {
    type: Date,
    required: [true, 'Please add a joining date'],
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
