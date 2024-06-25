"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  ArrowDownUp,
  BadgeDollarSign,
  HandCoins,
  Handshake,
  Newspaper,
  User,
} from "lucide-react";
import AreaChartComponent from "./AreaChartComponent";

interface Card {
  id: number;
  title: string;
  amount: string;
}

interface CardProps {
  cards: Card[];
}

const CardDashboard: React.FC<CardProps> = ({ cards }) => {
  const [activeCard, setActiveCard] = useState<number | null>(1);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [chartTitle, setChartTitle] = useState("Doanh thu");
  const updateChartTitle = (title: string) => {
    setChartTitle(title);
  };

  const handleCardClick = (id: number) => {
    setActiveCard(id);
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

  const renderIcon = (id: number, isActive: boolean) => {
    const iconColor = isActive
      ? cardStyles.active.iconColor
      : cardStyles.default.iconColor;
    switch (id) {
      case 1:
        return <BadgeDollarSign size="28" color={iconColor} />;
      case 2:
        return <HandCoins size="28" color={iconColor} />;
      case 3:
        return <User size="28" color={iconColor} />;
      case 4:
        return <Handshake size="28" color={iconColor} />;
      case 5:
        return <ArrowDownUp size="28" color={iconColor} />;
      case 6:
        return <Newspaper size="28" color={iconColor} />;
      default:
        return <BadgeDollarSign size="28" color={iconColor} />;
    }
  };

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
  const currentChartData = chartDataOptions[filterDays[activeItemIndex].title];

  console.log(currentChartData);

  return (
    <>
      {cards.map((card: any) => {
        const isActive = activeCard === card.id;
        return (
          <Card
            key={card.id}
            className={` border rounded-2xl cursor-pointer ${
              activeCard === card.id ? "bg-red-400" : "bg-white"
            }`}
            onClick={() => {
              handleCardClick(card.id);
              updateChartTitle(card.title);
            }}
          >
            <CardHeader>
              <div className="flex justify-between">
                <p
                  className={`text-xl font-medium ${
                    activeCard === card.id ? "text-white" : "text-black"
                  } `}
                >
                  {card.title}
                </p>
                {renderIcon(card.id, isActive)}
              </div>
            </CardHeader>
            <CardContent>
              <p
                className={`text-2xl pt-2 font-semibold ${
                  activeCard === card.id ? "text-white" : "text-black"
                } `}
              >
                {card.amount}
              </p>
            </CardContent>
          </Card>
        );
      })}

      {activeCard && (
        <>
          <div className="flex justify-around m-4 w-[80vw]">
            <div className="p-4 flex flex-col bg-slate-200 min-w-full border rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl text-black font-semibold">
                  Biểu đồ thống kê
                </p>
                <div className="flex items-center space-x-3">
                  <p className="text-black font-semibold">Lọc theo:</p>
                  {filterDays.map((filterDay, index) => {
                    const isActive = index === activeItemIndex;
                    const style = isActive
                      ? "px-4 py-2 bg-red-400 border-2 border-gray-300 rounded-lg text-white"
                      : "px-4 py-2 bg-slate-300 broder rounded-lg";
                    return (
                      <button
                        key={index}
                        className={style}
                        onClick={() => {
                          setActiveItemIndex(index);
                          console.log("index", index);
                        }}
                      >
                        {filterDay.title}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border border-slate-500 bg-white rounded-xl h-[400px]">
                <p className="text-xl text-black font-semibold">{chartTitle}</p>
                <AreaChartComponent
                  chartType={chartTitle}
                  sortBy={activeItemIndex}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {/* <div className="flex justify-around m-4">
        <div className="p-4 flex flex-col bg-slate-200 min-w-full border rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl text-black font-semibold">Biểu đồ thống kê</p>
            <div className="flex items-center space-x-3">
              <p className="text-black font-semibold">Lọc theo:</p>
              {filterDays.map((filterDay, index) => {
                const isActive = index === activeItemIndex;
                const style = isActive
                  ? "px-4 py-2 bg-red-400 border-2 border-gray-300 rounded-lg text-white"
                  : "px-4 py-2 bg-slate-300 broder rounded-lg";
                return (
                  <button
                    key={index}
                    className={style}
                    onClick={() => setActiveItemIndex(index)}
                  >
                    {filterDay.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-slate-500 bg-white rounded-xl h-[400px]">
            <p className="text-xl text-black font-semibold">{chartTitle}</p>
            <AreaChartComponent chartData={currentChartData} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CardDashboard;
