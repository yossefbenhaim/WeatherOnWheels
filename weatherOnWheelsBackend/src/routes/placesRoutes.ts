import { Router } from 'express';
import {
    createPlaces,
    getAllPlaces,
    getWeather,
} from '../controllers/placesController.ts';

const router = Router();

router.post('/createPlaces', createPlaces);

router.post('/getWeather', getWeather);

router.get('/getPlaces', getAllPlaces);

export default router;
