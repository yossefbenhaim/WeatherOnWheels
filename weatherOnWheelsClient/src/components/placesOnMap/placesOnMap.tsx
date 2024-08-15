import axios from 'axios';
import { Map } from 'components/map';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setPlaces } from 'redux/slice/playces';

const PlacesOnMap = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:5000/api/urls/getShortenedUrl');
				dispatch(setPlaces(response.data.data));
			} catch (error) {
				if (axios.isAxiosError(error)) {
					console.error('AxiosError:', error.response?.data || error.message);
				} else {
					console.error('Unexpected Error:', error);
				}
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<Map height='100vh' width='100vw' />
		</div>
	)
}

export default PlacesOnMap