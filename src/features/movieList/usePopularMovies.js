import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { popularMoviesURL } from "../../common/API/APIData";
import { fetchAPI } from "../../common/API/fetchAPI";

export const usePopularMovies = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const page = useSelector(state => state.pagination.page);
	const fetchingURL = `${popularMoviesURL}&page=${page}`;

	useEffect(() => {
		const getPopularMovies = async () => {
			try {
				setLoading(true);
				const response = await fetchAPI(fetchingURL);
				setPopularMovies(response);
			} catch (error) {
				setError("Error while fetching data from external API", error);
			} finally {
				setLoading(false);
			}
		};

		getPopularMovies();
	}, [fetchingURL]);

	return { popularMovies, loading, error };
};
