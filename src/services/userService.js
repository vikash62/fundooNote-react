import axios from "axios";

export function signUp(SignUpdata){
    console.log("services",SignUpdata);
    try {
        const response = axios.post(
            "http://localhost:8080/user/register",SignUpdata
        );
        return response;
    } catch (error) {
        return error;
    }
}

export function signIn(SignIndata){
    console.log("services",SignIndata);
    try {
        const response = axios.post(
            "http://localhost:8080/user/login",SignIndata
        );
        return response;
    } catch (error) {
        return error;
    }
}