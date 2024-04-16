

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
  { month: "1403/01/01", sales: 1000 },
  { month: "1403/01/02", sales: 100 },
  { month: "1403/01/03", sales: 1500 },
  { month: "1403/01/04", sales: 400 },
  { month: "1403/01/05", sales: 100 },
  { month: "1403/01/06", sales: 2000 },
  { month: "1403/01/07", sales: 100 },
  { month: "1403/01/08", sales: 1000 },
  { month: "1403/01/09", sales: 400 },
  { month: "1403/01/10", sales: 900 },
  { month: "1403/01/11", sales: 100 },
  { month: "1403/01/12", sales: 1000 },
  { month: "1403/01/13", sales: 2000 },
  { month: "1403/01/14", sales: 500 },
  { month: "1403/01/15", sales: 100 },
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
        borderColor: "#006ce7",
        borderWidth: 3,
        pointBorderColor: "#006ce7",
        pointBorderWidth: 3,
        tension: 0.1,
        fill: false,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#006ce7");
          gradient.addColorStop(1, "#006ce7");
          return gradient;
        },
      },
      
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
        <div className="absolute right-8 top-[-10px] bg-white px-2 rounded-lg  text-[#708188]">آمار بازدید </div>
        <Line data={data} options={options} style={containerStyle}></Line>
      </div>
    
    </>
  );
}
