"use client";

import {
  getDailyStatistics,
  getMonthlyStatistics,
  getYearlyStatistics,
} from "@/app/actions/statistics";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartComponent = ({
  chartType,
  sortBy,
  startDate,
  endDate,
  type,
}: {
  chartType: string;
  sortBy: number;
  startDate: Date;
  endDate: Date;
  type: string;
}) => {
  // call API here

  const [chartData, setChartData] = useState([]);
  const [hoahong, setHoahong] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const formatDateToDDMM = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 because months are 0-indexed.
    return `${day}/${month}`;
  };

  const formatMonthYear = (month: string, year: string) => {
    return `${month}/${year}`;
  };

  const getChartYearlyData = async (startDate: Date, endDate: Date) => {
    try {
      setIsLoading(true);
      const data = await getMonthlyStatistics(startDate, endDate);
      setChartData(
        data.statistics.map((item: any) => ({
          date: formatMonthYear(item.month, item.year),
          totalRevenue: item.totalRevenue,
          userRegistrations: item.userRegistrations,
          bidaClubRegistrations: item.bidaClubRegistrations,
          transactions: item.transactions,
        }))
      );
      setHoahong(
        data.statistics.map((item: any) => ({
          hoahong: item.totalRevenue * 0.05,
          date: formatMonthYear(item.month, item.year),
        }))
      );
      console.log("data", chartData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getChartDailyData = async (startDate: Date, endDate: Date) => {
    try {
      setIsLoading(true);
      const data = await getDailyStatistics(startDate, endDate);
      setChartData(
        data.statistics.map((item: any) => ({
          date: formatDateToDDMM(new Date(item.date)),
          totalRevenue: item.totalRevenue,
          userRegistrations: item.userRegistrations,
          bidaClubRegistrations: item.bidaClubRegistrations,
          transactions: item.transactions,
        }))
      );
      // setHoahong(data.statistics.map((item: any) =>( item.totalRevenue * 0.05)));
      setHoahong(
        data.statistics.map((item: any) => ({
          hoahong: item.totalRevenue * 0.05,
          date: formatDateToDDMM(new Date(item.date)),
        }))
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getChartYearlyData(startDate, endDate);
  }, []);

  useEffect(() => {
    if (type === "year") {
      getChartYearlyData(startDate, endDate);
    } else if (type === "month") {
      getChartDailyData(startDate, endDate);
    } else if (type === "7day") {
      getChartDailyData(startDate, endDate);
    }
  }, [type]);

  // useEffect(() => {
  //   console.log("chartType", chartType);
  // }, [chartType]);

  useEffect(() => {
    console.log("chartData", chartData);
  }, [chartData]);

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center h-full">
          Đang tải...
        </div>
      )}
      {!isLoading && chartData.length === 0 && (
        <div className="flex items-center justify-center h-full">
          Không có dữ liệu
        </div>
      )}
      {!isLoading && chartData.length > 0 && (
        <ResponsiveContainer width={900} height="90%">
          <AreaChart
            width={400}
            height={400}
            data={chartType === "Hoa hồng (5%)" ? hoahong : chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey={
                (type === "year" && "date") ||
                (type === "month" && "date") ||
                (type === "7day" && "date") ||
                "underfine"
              }
              tickFormatter={(value) => {
                if (type === "year") {
                  return value;
                }
                if (type === "month") {
                  return value;
                }
                if (type === "7day") {
                  return value;
                }
                return value;
              }}
              // label={
              //   (type === "year" && "Năm") ||
              //   (type === "1month" && "Tháng") ||
              //   (type === "7day" && "Ngày") ||
              //   "underfine"
              // }
              // name={
              //   (type === "year" && "year") ||
              //   (type === "1month" && "month") ||
              //   (type === "7day" && "date") ||
              //   "underfine"
              // }
            />
            <YAxis
              dataKey={
                (chartType === "Tổng doanh thu" && "totalRevenue") ||
                (chartType === "Hoa hồng (5%)" && "hoahong") ||
                (chartType === "Người dùng" && "userRegistrations") ||
                (chartType === "Câu lạc bộ" && "bidaClubRegistrations") ||
                (chartType === "Giao dịch" && "transactions") ||
                "underfine"
              }
              // label={
              //   (chartType === "Tổng doanh thu" && "VND") ||
              //   (chartType === "Hoa hồng (5%)" && "VND") ||
              //   (chartType === "Người dùng" && "người") ||
              //   (chartType === "Câu lạc bộ" && "câu lạc bộ") ||
              //   (chartType === "Giao dịch" && "giao dịch") ||
              //   "underfine"
              // }
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={
                (chartType === "Tổng doanh thu" && `totalRevenue`) ||
                (chartType === "Hoa hồng (5%)" && `hoahong`) ||
                (chartType === "Người dùng" && "userRegistrations") ||
                (chartType === "Câu lạc bộ" && "bidaClubRegistrations") ||
                (chartType === "Giao dịch" && "transactions") ||
                "underfine"
              }
              stackId="1"
              stroke="#e12727"
              fill="#e12727"
              name={
                (chartType === "Tổng doanh thu" && "Tổng doanh thu") ||
                (chartType === "Hoa hồng (5%)" && "Hoa hồng (5%)") ||
                (chartType === "Người dùng" && "Người dùng") ||
                (chartType === "Câu lạc bộ" && "Câu lạc bộ") ||
                (chartType === "Giao dịch" && "Giao dịch") ||
                "underfine"
              }
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default AreaChartComponent;
