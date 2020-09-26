import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://nodejsdemo-env.eba-3mypinq9.ap-south-1.elasticbeanstalk.com/login";
//const EMPLOYEE_API_BASE_URL_API = "https://pj3enwgn25.execute-api.ap-south-1.amazonaws.com/login";
//const EMPLOYEE_API_BASE_URL = "/login";

class LoginSrvice {

    checkLogin(username,password){
        const user = {
            uname : username,
            pass : password
        }
        return axios.post(EMPLOYEE_API_BASE_URL, user);
       
         /* return axios({
            method: 'POST',
            url: '/login',
            data: user
         }); */  
    }
    
}

export default new LoginSrvice();