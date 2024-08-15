import React from 'react'

interface Props {
	isLoading: boolean
}
const SubmitButton = ({ isLoading }: Props) => {

	return (
		<div>
			<button
				type='submit'
				className='w-[70px] bg-green-300 hover:bg-green-500 rounded-lg border-black border-[1px]' disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Create'}
			</button>
		</div>)
}

export default SubmitButton