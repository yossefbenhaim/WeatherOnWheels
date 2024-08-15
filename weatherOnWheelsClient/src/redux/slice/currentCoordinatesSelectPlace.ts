import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlicesNames } from 'models/enums/slicesNames';
import { CurrentCoordinatesPlace } from 'models/interfaces/currentCoordinatesSelectPlace';

interface currentCoordinatesSelectPlace {
    coordinates: CurrentCoordinatesPlace;
}

const initialState: currentCoordinatesSelectPlace = {
    coordinates: { coordinates: [35.0818155, 31.4117257] },
};

const CurrentCoordinatesSelectPlace = createSlice({
    name: SlicesNames.CURRENT_COORDINATES_PLACE,
    initialState,
    reducers: {
        setCoordinates(state, action: PayloadAction<CurrentCoordinatesPlace>) {
            state.coordinates = action.payload;
        },

        restCoordinates() {
            return initialState;
        },
    },
});

export const { setCoordinates, restCoordinates } =
    CurrentCoordinatesSelectPlace.actions;
export default CurrentCoordinatesSelectPlace.reducer;
