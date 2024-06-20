"use client"
import AreaChartComponent from "@/components/(dashboard)/AreaChartComponent";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BadgeDollarSign, HandCoins, User, Newspaper, ArrowDownUp, Handshake } from 'lucide-react'
import Card from "@/components/(dashboard)/Card";
import { fetchStatisticsSummary } from "@/components/(dashboard)/apiService";

function DashBoard() {
  const [statistics, setStatistics] = useState({
    totalActiveClubs: 0,
    totalActiveUsers: 0,
    totalRevenue: 0,
    totalActiveTransactions: 0,
  });

  // useEffect(() => {
  //   // Gọi hàm fetchStatisticsSummary và cập nhật state
  //   fetchStatisticsSummary()
  //     .then(data => {
  //       setStatistics(data);
  //     })
  //     .catch(error => console.error("Error fetching data: ", error));
  // }, []);
  useEffect(() => {
    fetch("https://exe2013cbilliardapi.azurewebsites.net/api/v1.0/statistics/summary")
      .then(response => response.json())
      .then(data => {
        setStatistics({
          totalActiveClubs: data.totalActiveClubs,
          totalActiveUsers: data.totalActiveUsers,
          totalRevenue: data.totalRevenue.toLocaleString("vi-VN", { style: "currency", currency: "VND" }),
          totalActiveTransactions: data.totalActiveTransactions,
        });
      })
      .catch(error => console.error("Error fetching data: ", error));
  }, []);
  useEffect(() => {
    console.log(statistics);
  }, [statistics]);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeNavIndex, setActiveNavIndex] = useState(0)
  const [chartTitle, setChartTitle] = useState("Doanh thu");
  const updateChartTitle = (title: string) => {
    setChartTitle(title);
  };

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
  const cards = [
    { title: "Doanh thu", amount: `${statistics.totalRevenue}`, icon: <BadgeDollarSign size='28' /> },
    { title: "Lợi nhuận (3%)", amount: `${(parseFloat(String(statistics.totalRevenue).replace(/\D/g, '')) * 0.03).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`, icon: <HandCoins size='28' /> },
    { title: "Người dùng", amount: `${statistics.totalActiveUsers}`, icon: <User size='28' /> },
    { title: "Câu lạc bộ", amount: `${statistics.totalActiveClubs}`, icon: <Handshake size='28' /> },
    { title: "Giao dịch", amount: `${statistics.totalActiveTransactions}`, icon: <ArrowDownUp size='28' /> },
    { title: "Tổng bài viết", amount: "#NA", icon: <Newspaper size='28' /> },
  ];

  const filterDays = [
    { title: "1 năm" },
    { title: "1 tháng" },
    { title: "7 ngày" },
  ];
  const chartDataOptions: { [key: string]: any[] } = {
    "7 ngày": [{name: "12", uv:"200"}, {name: "13", uv:"300"}, {name: "14", uv:"400"}, {name: "15", uv:"500"}, {name: "16", uv:"600"}, {name: "17", uv:"700"}, {name: "18", uv:"800"}],
    "1 tháng": [/* Dữ liệu cho 1 tháng */],
    "1 năm": [/* Dữ liệu cho 1 năm */],
  };
  const currentChartData = chartDataOptions[filterDays[activeItemIndex].title];


  return (
    <>
      {/* card */}
      <section>
        <div className="m-4 grid grid-cols-3 gap-4">
          {cards.map((card, index) => {
            const isActive = index === activeNavIndex;
            const style = isActive ? cardStyles.active : cardStyles.default;

            return (
              <Card
                key={index}
                title={card.title}
                amount={card.amount}
                icon={React.cloneElement(card.icon, { color: style.iconColor })}
                bgColor={style.bgColor}
                textColor={style.textColor}
                iconColor={style.iconColor}
                onClick={() => { updateChartTitle(card.title); setActiveNavIndex(index) }}
              />
            );
          })}
        </div>
      </section>

      {/* chart */}
      <div className="flex justify-around m-4">
        <div className="p-4 flex flex-col bg-slate-200 min-w-full border rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl text-black font-semibold">Biểu đồ thống kê</p>
            <div className="flex items-center space-x-3">
              <p className="text-black font-semibold">Lọc theo:</p>
              {filterDays.map((filterDay, index) => {
                const isActive = index === activeItemIndex;
                const style = isActive ? "px-4 py-2 bg-red-400 border-2 border-gray-300 rounded-lg text-white" : "px-4 py-2 bg-slate-300 broder rounded-lg"
                return (
                  <button key={index} className={style}
                    onClick={() => setActiveItemIndex(index)}
                  >{filterDay.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-slate-500 bg-white rounded-xl h-[400px]">
            <p className="text-xl text-black font-semibold">{chartTitle}</p>
            <AreaChartComponent  chartData={currentChartData}/>
          </div>
        </div>
      </div>

    </>
  );
}

export default DashBoard;
