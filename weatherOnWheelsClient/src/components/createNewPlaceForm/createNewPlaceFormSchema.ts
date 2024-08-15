import { Places } from 'models/enums/places';
import z from 'zod';

export enum CreateNewPlaceFormKey {
    NAME = 'name',
    TYPE_PLACE = 'typePlace',
    ADDRESS = 'address',
}

const CreateNewPlaceSchema = z.object({
    [CreateNewPlaceFormKey.NAME]: z.string().max(25).min(2),
    [CreateNewPlaceFormKey.TYPE_PLACE]: z.string(),
    [CreateNewPlaceFormKey.ADDRESS]: z.string(),
});

export type CreateNewPlaceType = z.infer<typeof CreateNewPlaceSchema>;
export default CreateNewPlaceSchema;
