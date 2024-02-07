import { useEffect, useState } from "react";
import { popularPeopleURL } from "../../common/API/APIData";
import { fetchAPI } from "../../common/API/fetchAPI";
import { useSelector } from "react-redux";

export const usePopularPeople = () => {
    const [popularPeople, setPopularPeople] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const page = useSelector(state => state.pagination.page);
    const fetchingURL = `${popularPeopleURL}&page=${page}`;

    useEffect(() => {
        const getPopularPeople = async () => {
            try {
                setLoading(true);
                const response = await fetchAPI(fetchingURL);
                setPopularPeople(response);
            } catch (error) {
                setError("Error while fetching data from external API", error);
            } finally {
                setLoading(false);
            }
        };

        getPopularPeople();
    }, [fetchingURL]);

    return { popularPeople, loading, error }
};