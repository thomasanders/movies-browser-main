import { useState, useEffect } from "react";
import { genresURL } from "./API/APIData";
import { fetchAPI } from "./API/fetchAPI";

export const useGenres = () => {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		const getGenres = async () => {
			try {
				const response = await fetchAPI(genresURL);
				setGenres(response);
			} catch (error) {
				console.error(error);
			}
		};
		getGenres();
	}, []);

	return { genres };
};
