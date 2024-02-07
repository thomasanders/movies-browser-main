import { useState, useEffect } from "react"
import { URL, key } from "../../common/API/APIData";
import { fetchAPI } from "../../common/API/fetchAPI";

export const usePopularPerson = (personId) => {
    const [popularPerson, setPopularPerson] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchingURL = `${URL}/person/${personId}?api_key=${key}&language=en-US`;

    useEffect(() => {
        const getPopularPerson = async () => {
            try {
                const response = await fetchAPI(fetchingURL);
                setPopularPerson(response);
                setLoading(false);
            } catch (error) {
                setError("Error while fetching the data");
                setLoading(false);
            }
        };
        getPopularPerson();
    }, [personId]);

    return { popularPerson, loading, error };
};