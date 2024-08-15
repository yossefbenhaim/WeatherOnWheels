import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlicesNames } from 'models/enums/slicesNames';
import { CurrentCoordinatesPlace } from 'models/interfaces/currentCoordinatesSelectPlace';
import { Place } from 'models/interfaces/place';

interface currentCoordinatesSelectPlace {
    places: Place[];
}

const initialState: currentCoordinatesSelectPlace = {
    places: [],
};

const Places = createSlice({
    name: SlicesNames.PLACES,
    initialState,
    reducers: {
        setPlaces(state, action: PayloadAction<Place[]>) {
            state.places = action.payload;
        },

        addPlace(state, action: PayloadAction<Place>) {
            state.places.push(action.payload);
        },
    },
});

export const { addPlace, setPlaces } = Places.actions;
export default Places.reducer;
