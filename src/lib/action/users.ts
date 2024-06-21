import api from "./api";


const QUERY_USERS = {
    GET_USERS: "/users/search"
}

const getUsers = async (page: number, perpage: number) => {
    try {
        const response = await api.get(QUERY_USERS.GET_USERS + `?pageNumber=${page}&pageSize=${perpage}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export  { getUsers }