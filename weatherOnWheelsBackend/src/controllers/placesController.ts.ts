import { Request, Response } from 'express';

import PlacesModels from '../models/placesModels';
import shortid from 'shortid';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

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
            coordinates: place.coordinates,
            placeType: place.placeType,
        });

        await newPlace.save();

        res.status(201).json(newPlace);
    } catch (error) {
        console.error('Error creating place:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

export const getAllPlaces = async (req: Request, res: Response) => {
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

export const getWeather = async (req: Request, res: Response) => {
    const { coord } = req.body;

    const LAT = coord[0];
    const LON = coord[1];
    const API_KEY = process.env.API_KEY;

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`
        );

        res.status(200).json({
            message: 'Fetched all places',
            data: response.data,
        });
    } catch (err) {
        console.log('Error get weather', err);
    }
};
