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

	useEffect(() => {
		//@ts-ignore
		findAddressByCoordinates(coordinates as number[]).then((address) => {
			setLocation(address)
		})
	}, [coordinates])


	const handleExitCard = () => {
		setSelectedPlace(undefined)
	}

	return (
		<div className=''>
			<div className=''>
				<p  >
					{`${name}   😀`}
				</p>
				<button onClick={handleExitCard}>
					x
				</button>
			</div>
			<p className=''>
				{`${location}`}
			</p>
		</div>
	)
}

export default PopupCard