import { Router } from "express";
import EmployeeClass from "../moduls/employee-module.js"


const Employee = new EmployeeClass()

const Route = Router()

Route.post('/insert',async (req, res)=>{

    try {
        const isInseted = await Employee.insertdata(req.body)
    res.send(isInseted)
    } catch (error) {
        res.status(500).json({sms: "data not inserted", error :error }) 
    }
    
})



Route.get('/get', async(req, res)=>{
    try {
        
        const data = await Employee.getAlldata()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({sms: "data not get", error :error }) 
    }
  
})

Route.post("/department", async(req, res) =>{
try {
    const {department} = req.body;
    if(!department){
        res.status(404).json({sms: "please provid proper department"})
        return; 
    }
    const Department = await Employee.filterByDepartment(department)
    res.status(200).json(Department)
    
} catch (error) {
    res.status(500).json({sms: "somthing is wrong", error :error }) 
}

 
})

Route.post("/salary", async(req, res) =>{

    try {
        const {method} = req.body;
    if(method == 0){
        res.status(404).json({sms: "please provid proper value"})
        return;
    }
    const entreys = await Employee.SortBySalary(method)
    res.status(200).json(entreys)
        
    } catch (error) {
        res.status(500).json({sms: "somthing is wrong", error :error }) 
    }

    
})

Route.post("/name", async(req, res) =>{

    try {
        const {method, name} = req.body;
   if(!method && ! name){
    res.status(404).json({sms: "please provid proper name and method"})
        return;
   }
    const entreys = await Employee.SearchByName(method,name)
    res.status(200).json(entreys)
        
    } catch (error) {
        res.status(500).json({sms: "somthing is wrong", error :error }) 
    }

    
})

export default Route;