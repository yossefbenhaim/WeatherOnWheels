import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import CreateNewPlaceSchema, { CreateNewPlaceType } from './createNewPlaceFormSchema';
import NameField from './nameField/nameField';
import SelectPlace from './selectPlace/selectPlace';
import SubmitButton from './submitButton/submitButton';
import { Map } from 'components/map';
import AddressField from './addressField/addressField';

import axios from 'axios'
import { addPlace } from 'redux/slice/playces';
import { useAppSelector } from 'redux/store';

const CreateNewPlaceForm = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	const currentCoordinatesPlace = useAppSelector(
		(state) => state.currentCoordinatesPlace.coordinates.coordinates
	);

	const methods = useForm<CreateNewPlaceType>({
		defaultValues: {
			name: '',
			address: '',
			placeType: ''
		},
		resolver: zodResolver(CreateNewPlaceSchema)
	});

	const { handleSubmit, reset } = methods;

	const onSubmit = async (data: CreateNewPlaceType) => {
		console.log(data);

		const place = {
			name: data.name,
			placeType: data.placeType,
			coordinates: currentCoordinatesPlace
		}

		try {

			const response = await axios.post('http://localhost:5000/api/createPlaces/', { place });

			const { id, name, coordinates, placeType } = response.data

			dispatch(addPlace({
				id: id,
				name: name,
				placeType: placeType,
				coordinates: coordinates
			}));

			setSuccessMessage(' successfully create place!');

		} catch (error) {
			console.error('Error creating place:', error);

		} finally {
			setIsLoading(false);
			reset()
		}
	};

	return (
		<div className='flex flex-row gap-3 w-[50%] h-[80%] justify-center items-start border-black border-[1px] pt-2  pb-5 px-2'>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)} className=" h-full w-full border-1 border-[1px] flex flex-col gap-2 text-black">
					<header className='text-2xl'>Create New Place</header>
					<div className=' h-full flex flex-col justify-center items-center  gap-4 py-3'>
						<NameField />
						<SelectPlace />
						<AddressField />
						<SubmitButton isLoading={isLoading} />
					</div>
					{successMessage && (
						<div className='text-green-500 mt-2'>
							{successMessage}
						</div>
					)}
				</form>
			</FormProvider >
			<div className=' w-full h-full'>
				<Map
					width={"100%"}
					height={"85%"}
				/>
			</div>
		</div>
	);
}

export default CreateNewPlaceForm;
