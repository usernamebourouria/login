import React, { useState, useEffect } from "react"
import Percentage from '../svg/pourcentage.js'

const Trubidite = () =>{
	const [isData, setIsData] = useState(false)
	const [turbidite, setTurbidite] = useState('0')
	useEffect(()=>{
		const fetch_ = async()=>{
			const response = await fetch('http://localhost:8000/api/fetchAll')
			const json = await response.json()
			const {data} = json
			const turbi = data.pop()
			setTurbidite(turbi.turbidite)
			setIsData(true)
		}
		setInterval(fetch_, 5000)
	}, [])
	return (
	<>
		<Percentage percent={isData ? turbidite : 0} width={10}></Percentage>
	</>
	)
}

export default Trubidite