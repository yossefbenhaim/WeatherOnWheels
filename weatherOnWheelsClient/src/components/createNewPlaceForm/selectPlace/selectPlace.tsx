import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { CreateNewPlaceFormKey } from '../createNewPlaceFormSchema';
import { MenuItem, Select } from '@mui/material';
import { Places } from 'models/enums/places';



const SelectPlace = () => {
	const { control } = useFormContext()

	return (
		<Controller
			name={CreateNewPlaceFormKey.TYPE_PLACE}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<div className='w-full px-2 flex flex-col justify-start items-start'>
					<label className="block text-gray-700 text-sm font-bold mb-2">Select Place:</label>
					<Select
						variant="outlined"
						{...field}
						className={'w-full'}
						onChange={(event) => field.onChange(event.target.value)}
					>
						{Object.values(Places).map((place) => {
							return (
								<MenuItem
									key={place}
									value={place}
								>
									{place}
								</MenuItem>
							);
						})}
					</Select>
					{error && (
						<span className='text-red-500'>{error.message}</span>
					)}
				</div>
			)}
		/>
	)
}

export default SelectPlace