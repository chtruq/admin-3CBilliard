import AreaChartComponent from "@/components/(dashboard)/AreaChartComponent";
import Link from "next/link";
import {
  BadgeDollarSign,
  HandCoins,
  User,
  Newspaper,
  ArrowDownUp,
  Handshake,
} from "lucide-react";
// import { fetchStatisticsSummary } from "@/components/(dashboard)/apiService";
// import { get } from "http";
import CardDashboard from "@/components/(dashboard)/CardDashboard";
import { getStatisticsSummary } from "@/app/actions/statistics";

const DashBoard = async () => {
  const statistics = await getStatisticsSummary();

  console.log(statistics);

  const cardStyles = {
    default: {
      bgColor: "bg-white",
      textColor: "text-black",
      iconColor: "black",
    },
    active: {
      bgColor: "bg-red-400",
      textColor: "text-white",
      iconColor: "white",
    },
  };
  const cardsData = [
    {
      id: 1,
      title: "Tổng doanh thu",
      amount: `${parseFloat(
        String(statistics?.totalRevenue).replace(/\D/g, "")
      ).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
    },
    {
      id: 2,
      title: "Hoa hồng (5%)",
      amount: `${(
        parseFloat(String(statistics?.totalRevenue).replace(/\D/g, "")) * 0.05
      ).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
    },
    {
      id: 3,
      title: "Người dùng",
      amount: `${statistics?.totalActiveUsers}`,
    },
    {
      id: 4,

      title: "Câu lạc bộ",
      amount: `${statistics?.totalActiveClubs}`,
    },
    {
      id: 5,

      title: "Giao dịch",
      amount: `${statistics?.totalActiveTransactions}`,
    },

    {
      id: 6,
      title: "Tổng bài viết",
      amount: "#NA",
    },
  ];

  const filterDays = [
    { title: "1 năm" },
    { title: "1 tháng" },
    { title: "7 ngày" },
  ];
  const chartDataOptions: { [key: string]: any[] } = {
    "7 ngày": [
      { name: "12", uv: "200" },
      { name: "13", uv: "300" },
      { name: "14", uv: "400" },
      { name: "15", uv: "500" },
      { name: "16", uv: "600" },
      { name: "17", uv: "700" },
      { name: "18", uv: "800" },
    ],
    "1 tháng": [
      /* Dữ liệu cho 1 tháng */
    ],
    "1 năm": [
      /* Dữ liệu cho 1 năm */
    ],
  };
  // const currentChartData = chartDataOptions[filterDays[activeItemIndex].title];

  return (
    <>
      <section>
        <div className="m-4 grid grid-cols-3 gap-4">
          <CardDashboard cards={cardsData} />
        </div>
      </section>
    </>
  );
};

export default DashBoard;
