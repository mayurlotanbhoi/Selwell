import employeeSchema from "../Db-Schema/employee-Schema.js";

class Employee{

    constructor() {
        this.EmployeeDB = employeeSchema;
    }
  async  getAlldata(){
    try {
        const data = await this.EmployeeDB.find();
    return data
    } catch (error) {
        throw new Error(error)
         return
    }
    
    }

   async insertdata(data){
    try {
        const isadd = await this.EmployeeDB.create(data);
       console.log(isadd)
       return isadd
    } catch (error) {
         throw new Error(error)
         return
    }
       
    }

   async filterByDepartment(department){
    try {
        const data = await this.EmployeeDB.find({department})
        return data;
    } catch (error) {
        throw new Error(error)
        return 
    }
        
    }

    async SortBySalary(sortDirection) {

        try {
            const data = await this.EmployeeDB.find().sort({ salary: sortDirection });
        return data;
        } catch (error) {
            throw new Error(error)
        return 
        }

        
      }

      async SearchByName( method,name) {

    //     "first_name": "Jane",
    // "last_name": "Smith",
    try {
        let data = [];
        if(method == "first_name"){
         data = await this.EmployeeDB.find({"first_name":name})
        
      }else if(method == "last_name"){
         data = await this.EmployeeDB.find({"last_name":name})
      }

      if(data.length > 0){
        return data
      }

      return {sms :"data not found"}
        
    } catch (error) {
        throw new Error(error)
        return 
    }
    
      
    }
}

export default Employee;