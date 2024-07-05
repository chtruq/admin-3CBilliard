"use server"
import axios from "axios";
import api from "./api";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const QUERY_USERS = {
    GET_USERS: "/users/search"
}

const QUERY_AUTH = {
    SIGNIN : "/users/login",
}

const getUsers = async (page: number, perpage: number, search: string) => {
    try {
        const response = await api.get(QUERY_USERS.GET_USERS + `?pageNumber=${page}&pageSize=${perpage}&keyword=${search}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const signInTo3C = async (email: string, password: string) => {
    try {
        const response = await axios.post( BASE_URL + QUERY_AUTH.SIGNIN, { email, password });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}



export  { getUsers }