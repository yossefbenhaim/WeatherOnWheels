import { Request, Response } from 'express';

import PlacesModels from '../models/placesModels';
import shortid from 'shortid';

export const createPlaces = async (req: Request, res: Response) => {
    try {
        const { place } = req.body;

        if (!place) {
            return res.status(400).json({ message: 'Full PLACE is required' });
        }

        const id = shortid.generate();

        const newPlace = new PlacesModels({
            id: id,
            name: place.name,
            address: place.address,
            placeType: place.placeType,
        });

        await newPlace.save();

        res.status(201).json(newPlace);
    } catch (error) {
        console.error('Error creating place:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

export const getAllShortcutUrl = async (req: Request, res: Response) => {
    try {
        const places = await PlacesModels.find();

        res.status(200).json({
            message: 'Fetched all places',
            data: places,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
