import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { CreateNewPlaceFormKey } from '../createNewPlaceFormSchema'

const TITLE = 'Name:'

const NameField = () => {
	const { control } = useFormContext()

	return (
		<Controller
			name={CreateNewPlaceFormKey.NAME}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<div className='w-full px-2 flex flex-col justify-start items-start'>
					<label className="block text-gray-700 text-sm font-bold mb-2">{TITLE}</label>
					<TextField
						className=' w-full ]'
						variant="outlined"
						{...field}
					/>
					{error && (
						<span className='text-red-500'>{error.message}</span>
					)}
				</div>
			)}
		/>)
}

export default NameField