import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { URL, key, language } from "../../common/API/APIData";
import { fetchAPI } from "../../common/API/fetchAPI";

export const useSearchResults = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const location = useLocation();
	const query = (new URLSearchParams(location.search)).get("query")
	const page = useSelector(state => state.pagination.page);	
	const moviesPage = location.pathname.includes("/movies");
	const movieOrPerson = moviesPage ? "movie" : "person";	
	const fetchingURL =
		`${URL}/search/${movieOrPerson}?api_key=${key}&query=${query}&page=${page}&language=en-US`;
	
		useEffect(() => {
		const getSearchResults = async () => {
			try {
				setLoading(true);
				const response = await fetchAPI(fetchingURL);
				setSearchResults(response);
			} catch (error) {
				setError("Error while fetching data from external API", error);
			} finally {
				setLoading(false);
			}
		};

		getSearchResults();
	}, [query, page, moviesPage]);

	return { searchResults, loading, error };
};
