import React, { useEffect, useState } from 'react'
import { CreateNewPlaceFormKey } from '../createNewPlaceFormSchema'
import { Controller, useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'
import { useAppSelector } from 'redux/store'
import { findAddressByCoordinates } from 'utils/findAddressByCoordinates'

const TITLE = 'Address:'

const AddressField = () => {
	const { control, setValue } = useFormContext()
	const [location, setLocation] = useState<string | undefined>()

	const currentCoordinatesPlace = useAppSelector(
		(state) => state.currentCoordinatesPlace.coordinates.coordinates
	);

	useEffect(() => {
		if (currentCoordinatesPlace) {
			console.log({ currentCoordinatesPlace });

			findAddressByCoordinates(currentCoordinatesPlace as number[]).then((address) => {
				console.log(address);

				setLocation(address)
				setValue(CreateNewPlaceFormKey.ADDRESS, address)
			})
		}
	}, [currentCoordinatesPlace, setValue])

	return (
		<div>
			<Controller
				name={CreateNewPlaceFormKey.ADDRESS}
				control={control}
				render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
					<div className='w-full px-2 flex flex-col justify-start items-start'>
						<label className="block text-gray-700 text-sm font-bold mb-2">{TITLE}</label>
						<TextField
							className='w-full'
							variant="outlined"
							value={location || value || ''}
							onChange={(e) => {
								onChange(e)
								setLocation(e.target.value)
							}}
							onBlur={onBlur}
							name={name}
							inputRef={ref}
						/>
						{error && (
							<span className='text-red-500'>{error.message}</span>
						)}
					</div>
				)}
			/>
		</div>
	)
}

export default AddressField
