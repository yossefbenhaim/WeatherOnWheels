import { Schema, model } from 'mongoose';

export interface Place {
    id: string;
    name: string;
    placeType: string;
    address: string;
}

const placesSchema = new Schema<Place>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    placeType: { type: String, required: true, unique: true },
    address: { type: String, required: true },
});

const PlacesType = model<Place>('PlacesModel', placesSchema);

export default PlacesType;
