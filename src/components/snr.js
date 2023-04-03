import React, { useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Line } from "react-chartjs-2"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "RSSI / SNR"
    }
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
}


export default function Snr() {
  const [showDay, setShowDay] = useState(true)
  const [showWeek, setShowWeek] = useState(false)
  const [showMonth, setShowMonth] = useState(false)
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
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "SNR",
        data: [1, 4, 5, 63, 3, 1, 3],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 1)",
        yAxisID: 'y'
      },
      {
        label: "RSSI",
        data: [1, 4, 5, 63, 3, 1, 3],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 1)",
        yAxisID: 'y1'
      }
    ]
  }
  )
  const [dataMonth, setDataMonth] = useState({
    labels: ["1st Week", "2nd Week", "3rd Week", "4th Week"],
    datasets: [
      {
        label: "SNR",
        data: [1, 4, 5, 63, 3, 1, 3],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 1)",
        yAxisID: 'y'
      },
      {
        label: "RSSI",
        data: [1, 4, 5, 63, 3, 1, 3],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 1)",
        yAxisID: 'y1'
      }
    ]
  }
  )
  const [dataWeek, setDataWeek] = useState({
    labels: ['Sunday', 'Monday', 'Thusday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: "SNR",
        data: [10, 20, 30, 42, 51, -91, 58],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 1)",
        yAxisID: 'y'
      },
      {
        label: "RSSI",
        data: [-10, -20, -30, -42, -51, -91, -58],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 1)",
        yAxisID: 'y1'
      }
    ]
  }
  )
  const [dataDay, setDataDay] = useState({
    labels: ['0H', '1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H', '14H', '15H', '16H', '17H', '18H', '19H', '20H', '22H', '23H'],
    datasets: [
      {
        label: "SNR",
        data: [10, -20, 30, -42, 51, 91, 58, 20, -30, -42, -51, 91, 58, 20, 30, 42, 51, 91, 58, 20, 30, 42, 51, 91, 58],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 1)",
        yAxisID: 'y'
      },
      {
        label: "RSSI",
        data: [-10, -20, -30, -42, -51, -91, -58, -20, -30, -42, -51, -91, -58, -20, -30, -42, -51, -91, -58, -20, -30, -42, -51, -91, -58],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 1)",
        yAxisID: 'y1'
      }
    ]
  }
  )


  return (
    <>
      <div className="btnRssi">
        <button type="button" onClick={() => toggle(4)}>Day</button>
        <button type="button" onClick={() => toggle(1)}>Week</button>
        <button type="button" onClick={() => toggle(2)}>Month</button>
        <button type="button" onClick={() => toggle(3)}>Year</button>
      </div>
      <Line options={options} data={(showYear && dataYear) || (showMonth && dataMonth) || (showWeek && dataWeek) || (showDay && dataDay)} />
    </>
  )
}

