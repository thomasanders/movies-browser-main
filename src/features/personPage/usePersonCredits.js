import { useState, useEffect } from "react";
import { URL, key } from "../../common/API/APIData";
import { fetchAPI } from "../../common/API/fetchAPI";

export const usePersonCredits = (personId) => {
    const [personCredits, setPersonCredits] = useState(null);
    const fetchingURL = `${URL}/person/${personId}/movie_credits?api_key=${key}&language=en-US`;

    useEffect(() => {
        const getPersonCredits = async () => {
            try {
                const response = await fetchAPI(fetchingURL);
                setPersonCredits(response);
            } catch (error) {
                console.error("Error while fetching credits data");
            }
        };
        getPersonCredits();
    }, [personId]);

    return { personCredits };
};