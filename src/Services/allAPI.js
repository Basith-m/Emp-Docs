import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"

// Register
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/user/register`,reqBody,"")
}
// login
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/user/login`,reqBody,"")
}
// add employee
export const addEmployeeAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/employee/add`,reqBody,reqHeader)
}
// get all employee - with search key as query parameter
export const allEmployeeAPI = async (searchKey,firm,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/employees/all?search=${searchKey}&firm=${firm}`,"",reqHeader)
} 
// get a single employee
export const getAEmployeeAPI = async (empId,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/employees/${empId}`,"",reqHeader)
}
// edit employee details
export const editEmployeeAPI = async (empId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/employees/edit/${empId}`,reqBody,reqHeader)
}
// delete employee
export const deleteEmployeeAPI = async (empId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/employees/remove/${empId}`,{},reqHeader)
}