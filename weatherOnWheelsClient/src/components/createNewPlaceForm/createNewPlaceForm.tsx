import { Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import CreateNewPlaceSchema, { CreateNewPlaceFormKey, CreateNewPlaceType } from './createNewPlaceFormSchema';
import { Places } from 'models/enums/places';
import { TextField } from '@mui/material';
import NameField from './nameField/nameField';
import SelectPlace from './selectPlace/selectPlace';
import SubmitButton from './submitButton/submitButton';



const CreateNewPlaceForm = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');

	const methods = useForm<CreateNewPlaceType>({
		defaultValues: {

		},
		resolver: zodResolver(CreateNewPlaceSchema)
	});

	const { handleSubmit } = methods;

	const onSubmit = async (data: CreateNewPlaceType) => {
		console.log(data);

		setIsLoading(true);
		setSuccessMessage('');
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} className=" w-[30%] border-1 border-[1px] flex flex-col gap-2 text-black">
				<header className='text-2xl'>Create New Place</header>
				<div className=' h-full flex flex-col justify-center items-center  gap-4 py-3'>
					<NameField />
					<SelectPlace />
					<SubmitButton isLoading={isLoading} />
				</div>
				{successMessage && (
					<div className='text-green-500 mt-2'>
						{successMessage}
					</div>
				)}
			</form>
		</FormProvider >
	);
}

export default CreateNewPlaceForm;
