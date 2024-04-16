

import { useState ,useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { month: "مهر", sales: 1000 },
  { month: "آبان", sales: 1500 },
  { month: "آذر", sales: 2000 },
  { month: "دی", sales: 1200 },
  { month: "بهمن", sales: 1800 },
  { month: "اسفند", sales: 2500 },
];

export default function ChartComponent() {
  const [dataFetch , setDataFetch] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      setDataFetch(response.data);
      console.log("مقدار  چارت" , response.data);
      //dataFetch = response.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "",
        data: salesData.map((data) => data.sales),
        borderColor: "#12A519",
        borderWidth: 3,
        pointBorderColor: "#12A519",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: false,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#ffb000");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
      {
        label: "Line 2",
        data: [2000, 1000, 600, 500, 1450, 1505, 2300],
        fill: false,
        borderColor: "#D6D475",
        tension: 0.1
      }
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 12,
            family: 'vazir'
          },
        },
      },
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 10,
            weight: "bold",
            family: "vazir",
          },
        },
        title: {
          display: false,
          text: "",
          padding: {
            bottom: 1,
          },
          font: {
            size: 10,
            family: "vazir",
          },
        },
        min: 50,
      },
      x: {
        ticks: {
          font: {
            size: 10,
            weight: "bold",
            family: "vazir",
          },
        },
        title: {
          display: false,
          text: "",
          padding: {
            top: 10,
          },
          font: {
            size: 10,
            family: "vazir",
          },
        },
      },
    },
  };
  const containerStyle = {
    width: "100%", // Set the width to 100%
    height: "100%",
    padding: "20px",
    cursor: "pointer",
  };

  return (
    <>
      
  
      
   

      <div className="w-full relative">
        <div className="absolute left-1/2 translate-x-[-50%] top-[-10px] bg-white px-2 rounded-lg border-b text-[#708188]">بازدید خدمات</div>
        <Line data={data} options={options} style={containerStyle}></Line>
      </div>
    
    </>
  );
}
