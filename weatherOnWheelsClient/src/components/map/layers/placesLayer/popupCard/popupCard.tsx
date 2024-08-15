import axios from "axios";
import { Place } from "models/interfaces/place";
import { useEffect, useState } from "react"

import { findAddressByCoordinates } from "utils/findAddressByCoordinates";

interface Props {
	selectedPlace: Place | undefined,
	setSelectedPlace: React.Dispatch<React.SetStateAction<Place | undefined>>
}

const PopupCard: React.FC<Props> = (props) => {
	const { selectedPlace, setSelectedPlace } = props
	const { name, coordinates } = selectedPlace as Place

	const [location, setLocation] = useState<string>()
	const [temp, setTemp] = useState<string>('')



	useEffect(() => {
		//@ts-ignore
		findAddressByCoordinates(coordinates as number[]).then((address) => {
			setLocation(address)
		})

		const getWeather = async (coord: number[]) => {

			try {
				const response = await axios.post('http://localhost:5000/api/getWeather/', { coord });
				setTemp(response.data.data.main.temp)

			} catch (err) {
				console.log('Error get weather', err);
			}
		}

		getWeather(coordinates)

	}, [coordinates])


	const handleExitCard = () => {
		setSelectedPlace(undefined)
	}

	return (
		<div className='absolute z-20 ml-[100px] a w-[200px]  bg-white/60 backdrop-blur-sm rounded-xl p-3'>
			<div className='flex flex-row w-full justify-between'>
				<div>
					<p className="font-bold">
						name
					</p>
					<p  >
						{` ${name}   😀`}
					</p>
				</div>
				<button className="bg-black flex flex-row justify-center items-center rounded-3xl text-white h-[20px] w-[20px]" onClick={handleExitCard}>
					x
				</button>
			</div>
			<div>
				<p className="font-bold">
					address:
				</p>
				<p className=''>
					{`address: ${location}`}
				</p>
			</div>
			<div>
				<p className="font-bold">
					temp:
				</p>
				<p className=''>
					{`temp: ${temp ? temp : 'Error get weather'}`}
				</p>
			</div>
		</div>
	)
}

export default PopupCard