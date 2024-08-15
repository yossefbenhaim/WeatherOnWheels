import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { useAppSelector } from "redux/store";
import { zoomInLocation } from "utils/zoomLocation";
import { RFeature, RFeatureUIEvent, RLayerCluster, RStyle } from "rlayers";

import locationIcon from '../../../../assets/location.svg'
import clusterStyle from "./plcesStyles";
import { useState } from "react";

import { Place } from "models/interfaces/place";
import PopupCard from "./popupCard/popupCard";


const Z_INDEX = 10
const DISTANCE = 50
const UsersLocationLayer = () => {
	const places = useAppSelector((state) => state.places.places);

	const [selectedPlace, setSelectedPlace] = useState<Place | undefined>(undefined);

	const handlePointerEnter = ({ map }: any) => {
		map.getViewport().style.cursor = "pointer";
	}

	const handlePointerLeave = ({ map }: any) => {
		map.getViewport().style.cursor = "";
	}

	const handleClickFeature = (event: any) => {
		const features = event.target.get("features");
		if (features.length > 1) {
			return zoomInLocation(event, 10)
		} else {
			const selectedPlaceId = event.target.get('features')[0]['values_']['id']
			setSelectedPlace(places.find((place) => place.id === selectedPlaceId));
			return zoomInLocation(event, 15)
		}

	}

	return (
		<div>
			<RLayerCluster
				zIndex={Z_INDEX}
				distance={DISTANCE}
				style={(feature) => clusterStyle(feature)}
				onPointerEnter={handlePointerEnter}
				onPointerLeave={handlePointerLeave}
				onClick={handleClickFeature}
			>
				<RStyle.RStyle>
					<RStyle.RIcon scale={0.8} src={locationIcon} />
					<RStyle.RStroke color={'#0000ff'} width={2} />
				</RStyle.RStyle>
				{places.map((place) => (
					<RFeature
						key={place.id}
						geometry={new Point(fromLonLat(place.coordinates as number[]))}
						properties={{ id: place.id }}
					>
					</RFeature>
				))}
			</RLayerCluster >
			{selectedPlace && <PopupCard selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />}

		</div>
	);
}

export default UsersLocationLayer;