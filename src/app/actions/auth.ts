import axios from "axios";
import api from "./api";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const QUERY_AUTH = {
    SIGNIN : "/users/login",
}


 const signIn = async (email: string, password: string) => {
    try {
        const response = await axios.post(BASE_URL + QUERY_AUTH.SIGNIN, { email, password });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}



