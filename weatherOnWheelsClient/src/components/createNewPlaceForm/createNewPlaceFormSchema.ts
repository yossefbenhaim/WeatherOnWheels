import z from 'zod';

export enum CreateNewPlaceFormKey {
    NAME = 'name',
    PLACE_TYPE = 'placeType',
    ADDRESS = 'address',
}

const CreateNewPlaceSchema = z.object({
    [CreateNewPlaceFormKey.NAME]: z.string().max(25).min(2),
    [CreateNewPlaceFormKey.PLACE_TYPE]: z.string(),
    [CreateNewPlaceFormKey.ADDRESS]: z.string(),
});

export type CreateNewPlaceType = z.infer<typeof CreateNewPlaceSchema>;
export default CreateNewPlaceSchema;
