import "ol/ol.css";
import "rlayers/control/layers.css";

import { fromLonLat } from "ol/proj";
import { RControl, RMap, ROSMWebGL } from "rlayers";
import CreatePlaceLayer from "./layers/createPlaceLayer/createPlaceLayer";
import UsersLocationLayer from "./layers/placesLayer/placesLayer";
import { useLocation } from "react-router-dom";
import { PathName } from "models/enums/pathName";



const ISRAEL_CENTER_COORDS = fromLonLat([35.0818155, 31.4117257]);
const ISRAEL_DEFAULT_ZOOM = 6.8;

interface Props {
	width: string
	height: string
}
const Map = ({ height, width }: Props) => {
	const currentPath = useLocation();

	return (
		<RMap
			width={width}
			height={height}
			initial={{
				center: ISRAEL_CENTER_COORDS,
				zoom: ISRAEL_DEFAULT_ZOOM,
			}}
			noDefaultControls
			className="h-full"
		>
			<ROSMWebGL />
			<RControl.RScaleLine />
			<RControl.RZoom />
			<RControl.RZoomSlider />
			{currentPath.pathname === PathName.CREATE_NEW_PLACE_FORM ? <CreatePlaceLayer /> : <UsersLocationLayer />}

		</RMap>
	);
}
export default Map