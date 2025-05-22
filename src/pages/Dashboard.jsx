import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { StudentScoreRepository } from "../repository/StudentScoreRepository.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [firstChartData, setFirstChartData] = useState(null);
  const [secondChartData, setSecondChartData] = useState(null);
  const [thirdChartData, setThirdChartData] = useState(null);

  const fetchReportData = async () => {
    try {
      const res = await StudentScoreRepository.fetchSubjectReport();
      const dataResponse = res.data.data;
      if (dataResponse) {
        const levels = ["<4", "4-6", "6-8", ">=8"];

        //firstChart
        const firstSubjects = Object.keys(dataResponse).slice(0, 3);
        const firstDatasets = firstSubjects.map((subject, idx) => ({
          label: ["Toán", "Ngữ Văn", "Ngoại Ngữ"][idx],
          data: levels.map((level) => dataResponse[subject][level] ?? 0),
          borderColor: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"][
            idx % 5
          ],
          tension: 0.4,
          fill: false,
          pointBackgroundColor: "#1e40af",
        }));

        setFirstChartData({
          labels: levels,
          datasets: firstDatasets,
        });

        //secondChart
        const secondSubjects = Object.keys(dataResponse).slice(3, 6);
        const secondDatasets = secondSubjects.map((subject, idx) => ({
          label: ["Vật lí", "Hóa học", "Sinh học"][idx],
          data: levels.map((level) => dataResponse[subject][level] ?? 0),
          backgroundColor: ["#22c55e", "#3b82f6", "#ff6649"][idx],
          borderRadius: 5,
        }));

        setSecondChartData({
          labels: levels,
          datasets: secondDatasets,
        });

        //thirdChart
        const thirdSubjects = Object.keys(dataResponse).slice(6, 9);
        const thirdDatasets = thirdSubjects.map((subject, idx) => ({
          label: ["Lịch Sử", "Địa lí", "GDCD"][idx],
          data: levels.map((level) => dataResponse[subject][level] ?? 0),
          backgroundColor: ["#22c55e", "#3b82f6", "#ff6649"][idx],
          borderRadius: 5,
        }));

        setThirdChartData({
          labels: levels,
          datasets: thirdDatasets,
        });
      }
    } catch (error) {
      console.log("No data", error);
    }
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50000,
        },
      },
    },
  };

  useEffect(() => {
    fetchReportData();
  }, []);

  return (
    <div className="p-12 space-y-4">
      <h1 className="text-lg text-center font-semibold">
        THỐNG KÊ SỐ LƯỢNG HỌC SINH THEO CÁC MỨC ĐIỂM
      </h1>
      <div className="h-[25rem] bg-white shadow p-4 rounded-xl">
        {firstChartData ? (
          <Line data={firstChartData} options={options} />
        ) : (
          <p className="text-gray-500">Đang tải dữ liệu...</p>
        )}
      </div>
      <div className="md:flex md:gap-6">
        <div className="w-full h-[25rem] bg-white shadow p-4 rounded-xl mt-6">
          {secondChartData ? (
            <Bar data={secondChartData} options={options} />
          ) : (
            <p className="text-gray-500">Đang tải dữ liệu...</p>
          )}
        </div>
        <div className="w-full h-[25rem] bg-white shadow p-4 rounded-xl mt-6">
          {thirdChartData ? (
            <Bar data={thirdChartData} options={options} />
          ) : (
            <p className="text-gray-500">Đang tải dữ liệu...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
