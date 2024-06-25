import axios from "axios";
import api from "./api";

const QUERY_CLUB = {
    GET_CLUBS: "/bidaclubs/search"
}


const getClubs = async (page: number, perpage: number, status: string) => {
    try {
        const response = await api.get(QUERY_CLUB.GET_CLUBS + `?pageIndex=${page}&pageSize=${perpage}&status=${status}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const deleteClub = async (id: number) => {
    try {
        const response = await api.put(`/bidaclubs/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// const activateClub = async (id: number) => {
//     try {
//         const response = await api.put(`/bidaclubs/activate/${id}`, {
//             note: "Câu lạc bộ được chấp nhận"
//         });
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// }




export { getClubs, deleteClub };