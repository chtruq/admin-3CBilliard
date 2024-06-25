import api from "./api";

const QUERY_STATISTIC = {
    GET_STATISTIC_SUMMARY: "/statistics/summary",
    GET_TOTAL_REVENUE: "/statistics/total-revenue",
    GET_TOTAL_ACTIVE_CLUBS: "/statistics/total-active-clubs",
    GET_TOTAL_ACTIVE_USERS: "/statistics/total-active-users",
    GET_TOTAL_ACTIVE_TRANSACTIONS: "/statistics/total-active-transactions"
}


const getStatisticSummary = async () => {
    try{
        const response = await api.get(QUERY_STATISTIC.GET_STATISTIC_SUMMARY);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
async function getStatisticData(statisticType: string) {
    let endpoint;
    switch (statisticType) {
        case 'totalRevenue':
            endpoint = QUERY_STATISTIC.GET_TOTAL_REVENUE;
            break;
        case 'totalActiveClubs':
            endpoint = QUERY_STATISTIC.GET_TOTAL_ACTIVE_CLUBS;
            break;
        case 'totalActiveUsers':
            endpoint = QUERY_STATISTIC.GET_TOTAL_ACTIVE_USERS;
            break;
        case 'totalActiveTransactions':
            endpoint = QUERY_STATISTIC.GET_TOTAL_ACTIVE_TRANSACTIONS;
            break;
        default:
            throw new Error('Invalid statistic type');
    }

    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export { getStatisticSummary, getStatisticData};