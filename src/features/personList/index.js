import Header from "../../common/Header";
import { StyledHeader } from "./styled";
import { PeopleGrid } from "../../common/PersonTile/styled";
import PersonTile from "../../common/PersonTile";
import Pagination from "../../common/Pagination";
import {
	decrementPage,
    goToTheFirstPage,
    goToTheLastPage,
	incrementPage,
	selectPage,
    setCurrentPage
} from "../../common/Pagination/paginationSlice";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { usePopularPeople } from "./usePopularPeople";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import { useDispatch, useSelector } from "react-redux";
import { GridWrapper } from "../../common/GridWrapper/styled";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PopularPeople = () => {
    const location = useLocation();
    const { popularPeople, loading, error } = usePopularPeople();
    const dispatch = useDispatch();
    const page = useSelector(selectPage);

    const searchParams = new URLSearchParams(location.search).get("page");
	let pageToSet = searchParams ? parseInt(searchParams) : 1;

    useEffect(() => {
        dispatch(setCurrentPage(pageToSet))
    }, [pageToSet, location.pathname]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    try {
        const people = popularPeople.results;

        return (
            <>
                <GlobalWrapper>
                    <StyledHeader>
                        <Header text="Popular people" />
                    </StyledHeader>
                </GlobalWrapper>
                <GridWrapper>
                    <PeopleGrid>
                        {people.map((person) => (
                            <PersonTile
                                key={person.id}
                                id={person.id}
                                name={person.name}
                                poster={person.profile_path}
                            />
                        ))}
                    </PeopleGrid>
                </GridWrapper>
                <Pagination
                    page={page}
                    onFirst={() => dispatch(goToTheFirstPage())}
                    onPrev={() => dispatch(decrementPage())}
                    onNext={() => dispatch(incrementPage())}
                    onLast={() => dispatch(goToTheLastPage(500))}
                    totalPages={500}
                />
            </>
        )

    } catch {
        return "";
    }
};

export default PopularPeople;