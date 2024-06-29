"use server"

import axios from 'axios';
import { revalidatePath } from 'next/cache';
import api from './api';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const QUERY_CLUB = {
    GET_CLUBS: "/bidaclubs/search",
    ACCEPT_CLUB: "/bidaclubs/activate",
    REJECT_CLUB: "/bidaclubs/reject",
}

export const getClubs = async (page: number, perpage: number, status: string) => {
    try {
        const response = await api.get(QUERY_CLUB.GET_CLUBS + `?pageIndex=${page}&pageSize=${perpage}&status=${status}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteClub = async (id: number) => {
    try {
        const response = await api.put(`/bidaclubs/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function acceptClub(id: number) {
    try {
        const response = await axios.put(BASE_URL + QUERY_CLUB.ACCEPT_CLUB + `/${id}`, {
            note: "Câu lạc bộ được chấp nhận"
        });
        return response.data;
    } catch (error: any) {
        console.error(error);
    }
}

export async function rejectClub(id: number, note: string) {
    try {
        const response = await axios.put(BASE_URL + QUERY_CLUB.REJECT_CLUB + `/${id}`, { note });
        revalidatePath('/billiard_club/club-approval');
        return response.data;
    } catch (error: any) {
        console.error(error);
    }
}

