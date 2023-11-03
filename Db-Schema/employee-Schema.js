import {mongoose} from "mongoose"

// Define the schema
const employeeSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },

  address:  {
    type: String,
    // required: true,
  },

  hire_date: {
    type: Date,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

// Create a model using the schema
const employeeSchemaDB = mongoose.model('Employee', employeeSchema);
export default employeeSchemaDB;
