"use server"

import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const QUERY_STATISTICS = {
    GET_STATISTICS: "/statistics",
}

const QUERY_DATE = {
    GET_SUMMARY: "/summary",
    GET_DAILY: "/daily",
    GET_MONTHLY: "/monthly",
    GET_YEARLY: "/yearly",
}

export async function getStatisticsSummary() {
    try {
        const response = await axios.get(BASE_URL + QUERY_STATISTICS.GET_STATISTICS + QUERY_DATE.GET_SUMMARY);
        return response.data;
    } catch (error: any) {
        console.error(error);
    }
}

export async function getDailyStatistics(startDate: Date, endDate: Date) {
    try {
        const response = await axios.post(BASE_URL + QUERY_STATISTICS.GET_STATISTICS + QUERY_DATE.GET_DAILY, 
            {
                startDate: startDate,
                endDate: endDate
            }
        );
        return response.data;
    } catch (error: any) {
        console.error(error);
    }
}

export async function getMonthlyStatistics(startDate: Date, endDate: Date) {
    try {
        const response = await axios.post(BASE_URL + QUERY_STATISTICS.GET_STATISTICS + QUERY_DATE.GET_MONTHLY, 
            {
                startDate: startDate,
                endDate: endDate
            }
        );
        return response.data;
    } catch (error: any) {
        console.error(error);
    }
}

export async function getYearlyStatistics(startDate: Date, endDate: Date) {
    try {
        const response = await axios.post(BASE_URL + QUERY_STATISTICS.GET_STATISTICS + QUERY_DATE.GET_YEARLY, 
            {
                startDate: startDate,
                endDate: endDate
            }
        );
        return response.data;
    } catch (error: any) {
        console.error(error);
    }
}