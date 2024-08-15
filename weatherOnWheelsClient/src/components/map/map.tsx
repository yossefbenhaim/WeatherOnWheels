import "ol/ol.css";
import "rlayers/control/layers.css";

import { fromLonLat } from "ol/proj";
import { RControl, RMap, ROSMWebGL } from "rlayers";



const ISRAEL_CENTER_COORDS = fromLonLat([35.0818155, 31.4117257]);
const ISRAEL_DEFAULT_ZOOM = 6.8;

const Map = () => {

	return (
		<RMap
			width={"100%"}
			height={"60vh"}
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
			{/* <UsersLocationLayer /> */}
		</RMap>
	);
}
export default Map