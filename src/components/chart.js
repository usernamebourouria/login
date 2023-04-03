import { useState } from "react";
// import "../App.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
function Chart() {
  const [showMonth, setShowMonth] = useState(false)
  const [showDay, setShowDay] = useState(true)
  const [showWeek, setShowWeek] = useState(false)
  const [showYear, setShowYear] = useState(false)
  const toggle = (x) => {
    if (x === 1) {
      setShowWeek(true)
      setShowMonth(false)
      setShowYear(false)
      setShowDay(false)
    }
    else if (x === 2) {
      setShowMonth(true)
      setShowWeek(false)
      setShowYear(false)
      setShowDay(false)
    }
    else if (x === 3) {
      setShowYear(true)
      setShowMonth(false)
      setShowWeek(false)
      setShowDay(false)
    }
    else if (x === 4) {
      setShowDay(true)
      setShowYear(false)
      setShowMonth(false)
      setShowWeek(false)
    }
  }
  
  const [dataYear, setDataYear] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: 'Temperature',
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        //backgroundColor: "#2e4355",
        borderColor: "rgb(53, 162, 235)",
        tension: 0.1,
        fill: false,
        pointStyle: "point",
        pointBorderColor: "red",
        pointBackgroundColor: "red",
        showLine: true,
      },
    ],
  })
  const [dataMonth, setDataMonth] = useState({
    labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
    datasets: [
      {
        label: 'Temperature',
        data: [2.88, 2, 3.5, 4.1],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        //backgroundColor: "#2e4355",
        borderColor: "rgb(53, 162, 235)",
        tension: 0.1,
        fill: false,
        pointStyle: "point",
        pointBorderColor: "red",
        pointBackgroundColor: "red",
        showLine: true,
      },
    ],
  })
  const [dataWeek, setDataWeek] = useState({
    labels: ['Sunday', 'Monday', 'Thusday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Temperature',
        data: [10, 20, 30, 42, 51, 91, 58],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        //backgroundColor: "#2e4355",
        borderColor: "rgb(53, 162, 235)",
        tension: 0.1,
        fill: false,
        pointStyle: "point",
        pointBorderColor: "red",
        pointBackgroundColor: "red",
        showLine: true,
      },
    ],

  });
  const [dataDay, setDataDay] = useState({
    labels: ['0H', '1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H', '14H', '15H', '16H', '17H', '18H', '19H', '20H', '22H', '23H'],
    datasets: [
      {
        label: 'Temperature',
        data: [10, 20, 30, 42, 51, 91, 58, 20, 30, 42, 51, 91, 58, 20, 30, 42, 51, 91, 58, 20, 30, 42, 51, 91, 58],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        //backgroundColor: "#2e4355",
        borderColor: "rgb(53, 162, 235)",
        tension: 0.1,
        fill: false,
        pointStyle: "point",
        pointBorderColor: "red",
        pointBackgroundColor: "red",
        showLine: true,

      },
    ],

  });

  return (
    <>
      <div>
        <button type="button" onClick={() => toggle(4)}>Day</button>
        <button type="button" onClick={() => toggle(1)}>Week</button>
        <button type="button" onClick={() => toggle(2)}>Month</button>
        <button type="button" onClick={() => toggle(3)}>Year</button>
      </div>
      <h2>temperature</h2>
      <Line data={(showMonth && dataMonth) || (showWeek && dataWeek) || (showDay && dataDay) || (showYear && dataYear)} className="graphcontainer"></Line>
    </>
  );
}

export default Chart;
