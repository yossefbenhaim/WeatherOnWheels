import { Schema, model } from 'mongoose';

export interface Place {
    id: string;
    name: string;
    placeType: string;
    coordinates: number[];
}

const placesSchema = new Schema<Place>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, maxlength: 25 },
    placeType: { type: String, required: true },
    coordinates: { type: [Number], required: true },
});

const PlacesType = model<Place>('PlacesModel', placesSchema);

export default PlacesType;
