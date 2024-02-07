import { useState, useEffect } from "react";
import { fetchAPI } from "../../common/API/fetchAPI";
import { URL, key } from "../../common/API/APIData";

export const usePopularMovie = (movieId) => {
	const [popularMovie, setPopularMovie] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const fetchingURL = `${URL}/movie/${movieId}?api_key=${key}&language=en-US&`

	useEffect(() => {
		const getPopularMovie = async () => {
			try {
				const response = await fetchAPI(fetchingURL);
				setPopularMovie(response);
				setLoading(false);
			} catch (error) {
				setError("Error while fetching the data")
				setLoading(false);
			}
		};
		getPopularMovie();
	}, [movieId]);

	return { popularMovie, loading, error };
};
