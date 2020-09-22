import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:4000/login";

class LoginSrvice {

    checkLogin(username,password){
        const user = {
            uname : username,
            pass : password
        }
        //return axios.get(EMPLOYEE_API_BASE_URL + username + "/" + password );
        return axios.post(EMPLOYEE_API_BASE_URL, user); 
    }
    
}

export default new LoginSrvice();