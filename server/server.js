const express = require("express");
const connection = require("./connect");
const app = express();
const cors = require("cors");
console.log('running with react')

app.use('/api', cors())

// id 1 => current day, id 2 => current week, id 3 => current month, id 4 => current year
let sql = ''
app.get('/api/fetchTemp/:id', (req, res) => {
  const { id } = req.params
  switch (id) {
    case '1':
      // get the temp of the current day by interval of 1 hour
      sql = "Select HOUR(time) as hour, AVG(temperature) as temperature from aquaRob2 where date = DATE(now()) AND HOUR(time) BETWEEN 0 AND 1 OR HOUR(time) BETWEEN 2 AND 3 OR HOUR(time) BETWEEN 4 AND 5 OR HOUR(time) BETWEEN 6 AND 7 OR HOUR(time) BETWEEN 8 AND 9 OR HOUR(time) BETWEEN 10 AND 11 OR HOUR(time) BETWEEN 12 AND 13 GROUP By HOUR(time)"
      break;
    case '2':
      // get the avg temp on each day of the current week
      sql = "SELECT DATE_FORMAT(date, '%d') AS day, AVG(temperature) AS temperature FROM aquaRob2 WHERE WEEK(date) = WEEK(NOW()) AND YEAR(date) = YEAR(NOW()) GROUP BY DATE(date)"
      break;
    case '3':
      sql = "SELECT DATE_FORMAT(date, '%Y-%m') as month, FLOOR((DAY(date) - 1) / 7) + 1 as week_number,  AVG(temperature) as temperature FROM aquaRob2 WHERE MONTH(date) = MONTH(CURDATE()) GROUP BY  week_number HAVING week_number BETWEEN 1 AND 4"
      console.log('months')
      break;
    case '4':
      sql = "SELECT DATE_FORMAT(date, '%m') as month, AVG(temperature) as temperature FROM aquaRob2 WHERE YEAR(date) = YEAR(CURDATE()) GROUP BY month"
      console.log('years')
      break;
    default:
      break;
  }
  const Data = new Promise((resolve, rejects) => {
    connection.query(sql, (err, result) => {
      if (err) rejects(err);
      else resolve(result);
    });
  });
  const fetch = async () => {
    const data = await Data;
    if (data) return res.status(200).json({ success: true, data: data });
    else res.status(404).send("not found");

  };
  fetch()

});
app.get('/api/fetchAll', (req, res) => {
  const query = 'Select * from aquaRob2'
  const Data = new Promise((resolve, rejects) => {
    connection.query(query, (err, result) => {
      if (err) rejects(err)
      else resolve(result)
    })
  })
  const fetch = async () => {
    const data = await Data
    if (data) return res.status(200).json({ success: true, data: data })
  }
  fetch()
})

app.listen(8000);
