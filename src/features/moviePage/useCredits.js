import { useState, useEffect } from "react";
import { fetchAPI } from "../../common/API/fetchAPI";
import { URL, key } from "../../common/API/APIData";

export const useCredits = (movieId) => {
	const [credits, setCredits] = useState(null);
	const fetchingURL = `${URL}/movie/${movieId}/credits?api_key=${key}&language=en-US&`

	useEffect(() => {
		const getCredits = async () => {
			try {
				const response = await fetchAPI(fetchingURL);
				setCredits(response);
			} catch {
				console.error("Error while fetching credits data");
			}
		};
		getCredits();
	}, [movieId]);

	return { credits };
};
