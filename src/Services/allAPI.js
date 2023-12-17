import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"

// Register
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/user/register`,reqBody,"")
}