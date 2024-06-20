// apiService.ts
const fetchStatisticsSummary = async () => {
  try {
    const response = await fetch("https://exe2013cbilliardapi.azurewebsites.net/api/v1.0/statistics/summary");
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      totalActiveClubs: data.totalActiveClubs,
      totalActiveUsers: data.totalActiveUsers,
      totalRevenue: data.totalRevenue,
      totalActiveTransactions: data.totalActiveTransactions,
    };
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error; // Re-throw để có thể xử lý lỗi ở nơi gọi hàm này
  }
};

export { fetchStatisticsSummary };