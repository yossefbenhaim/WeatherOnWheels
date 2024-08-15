import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PathName } from "models/enums/pathName"

import Library from "./library/library"
import CreateNewPlaceForm from "./createNewPlaceForm/createNewPlaceForm"
import PlacesOnMap from "./placesOnMap/placesOnMap"


const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={PathName.HOME} element={<Library />}>
					<Route path={PathName.CREATE_NEW_PLACE_FORM} element={<CreateNewPlaceForm />} />
					<Route path={PathName.PLACES_ON_MAP} element={<PlacesOnMap />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
