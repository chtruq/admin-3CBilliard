import api from "./api"

const QUERY_ORDERS = {
    GET_ORDERS: "/bills/search "
}


export async function getBills(page: number, perpage: number) {
    try{
        const response = await api.get(`/bills/search?pageIndex=${page}&pageSize=${perpage}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
