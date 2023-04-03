import React, {useState, useEffect} from 'react'

const Raw = () => {
  const [data, setData] = useState('')
  useEffect(()=>{
    const fetch_ = async () =>{
      const donnees = await fetch('http://localhost:8000/api/fetchAll')
      const json = await donnees.json()
      const {data} = json
      setData(data.pop())
    }
    setInterval(fetch_, 5000)
  }, [])
  return <div>
    <table>
      <tbody>
        <tr>
          <td>Temperature</td>
          <td>{data.temperature} C</td>
        </tr>
        <tr>
          <td>Turbidite</td> 
          <td>{data.turbidite} %</td>
        </tr>
        <tr>
          <td>SNR</td> 
          <td>{data.snr} Db</td>
        </tr>
        <tr>
          <td>RSSI</td> 
          <td>{data.rssi} DBm</td>
        </tr>

      </tbody>
    </table>
  </div>
  
}

export default Raw

