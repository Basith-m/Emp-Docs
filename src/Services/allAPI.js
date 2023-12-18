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