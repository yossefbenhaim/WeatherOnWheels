import { Router } from 'express';
import {
    createPlaces,
    getAllShortcutUrl,
} from '../controllers/placesController.ts';

const router = Router();

router.post('/createPlaces', createPlaces);

router.get('/getPlaces', getAllShortcutUrl);

export default router;
