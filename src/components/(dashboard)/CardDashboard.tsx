"use client";
import React, { useEffect, useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { getYearlyStatistics } from "@/app/actions/statistics";

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
  const [chartData, setChartData] = useState<any[]>([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [chartTitle, setChartTitle] = useState("Doanh thu");
  const [openDialog, setOpenDialog] = useState(false);
  const [activeChartType, setActiveChartType] = useState("year");
  const [startDate, setStartDate] = React.useState(
    new Date(new Date().setFullYear(new Date().getFullYear() - 1))
  );
  const [endDate, setEndDate] = React.useState(new Date());
  const updateChartTitle = (title: string) => {
    setChartTitle(title);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
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
    // { title: "Chọn ngày" },
  ];

  return (
    <>
      {cards.map((card: any) => {
        const isActive = activeCard === card.id;
        return (
          <Card
            key={card.id}
            className={` border rounded-2xl cursor-pointer ${
              activeCard === card?.id ? "bg-red-400" : "bg-white"
            }`}
            onClick={() => {
              handleCardClick(card?.id);
              updateChartTitle(card?.title);
            }}
          >
            <CardHeader>
              <div className="flex justify-between">
                <p
                  className={`text-xl font-medium ${
                    activeCard === card?.id ? "text-white" : "text-black"
                  } `}
                >
                  {card?.title}
                </p>
                {renderIcon(card?.id, isActive)}
              </div>
            </CardHeader>
            <CardContent>
              <p
                className={`text-2xl pt-2 font-semibold ${
                  activeCard === card?.id ? "text-white" : "text-black"
                } `}
              >
                {card?.amount}
              </p>
            </CardContent>
          </Card>
        );
      })}

      {activeCard && (
        <>
          <div className="flex justify-around w-[80vw]">
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
                          if (index === 0) {
                            setActiveChartType("year");
                            const endDate = new Date();
                            const startDate = new Date();
                            startDate.setFullYear(startDate.getFullYear() - 1);
                            setStartDate(startDate);
                            setEndDate(endDate);
                          }
                          if (index === 1) {
                            setActiveChartType("month");
                            const endDate = new Date();
                            const startDate = new Date();
                            startDate.setMonth(startDate.getMonth() - 1);
                            setStartDate(startDate);
                            setEndDate(endDate);
                          }
                          if (index === 2) {
                            setActiveChartType("7day");
                            const endDate = new Date();
                            const startDate = new Date();
                            startDate.setDate(startDate.getDate() - 7);
                            setStartDate(startDate);
                            setEndDate(endDate);
                          }
                        }}
                      >
                        {filterDay.title}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center border border-slate-500 bg-white rounded-xl h-[400px]">
                <p className="text-xl text-black font-semibold">{chartTitle}</p>
                <AreaChartComponent
                  chartType={chartTitle}
                  sortBy={activeItemIndex}
                  startDate={startDate}
                  endDate={endDate}
                  type={activeChartType}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {/* <Dialog open={openDialog} onOpenChange={handleDialogClose}>
        <DialogContent className="w-[80%]">
          <DialogHeader>
            <DialogTitle>Chọn ngày</DialogTitle>
          </DialogHeader>
          <div className="flex flex-row"></div>

          <DialogFooter>
            <Button
              onClick={() => {
                setOpenDialog(false);
                console.log("start date", startDate);
              }}
            >
              Xác nhận
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}

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
