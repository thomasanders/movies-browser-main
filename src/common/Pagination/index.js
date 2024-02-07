import { useState, useEffect } from "react";
import {
    Wrapper,
    PrevVector,
    NextVector,
    First,
    Previous,
    Next,
    Last,
    PageNumberContainer,
    Page,
    PageNumber,
    Of,
    PagesAmount,
} from "./styled";
import { useLocation } from "react-router-dom";

const Pagination = ({ onFirst, onPrev, page, onNext, onLast, totalPages }) => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 767);
    const location = useLocation();

    useEffect(() => {
        let newUrl;
        
        if (location.pathname.includes("search")) {
            const query = new URLSearchParams(location.search).get("query");
            newUrl = `/movies-browser/#${location.pathname}?query=${query}&page=${page}`;
        } else {
            newUrl = `/movies-browser/#${location.pathname}?page=${page}`;
        }
    
        window.history.pushState({ page }, "", newUrl);
    }, [page, location.pathname, location.search]);
    

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 767);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    return (
        <Wrapper>
            {page === 1 ? (
                <>
                    <First disabled={true}>
                        <PrevVector disabled={true}/>
                        {isWideScreen ? null : <PrevVector disabled={true}/>}
                        {isWideScreen ? "First" : null}
                    </First>
                    <Previous disabled={true}>
                        <PrevVector disabled={true}/>
                        {isWideScreen ? "Previous" : null}
                    </Previous>
                </>
            ) : (
                <>
                    <First onClick={onFirst}>
                        <PrevVector />
                        {isWideScreen ? null : <PrevVector />}
                        {isWideScreen ? "First" : null}

                    </First>
                    <Previous onClick={onPrev}>
                        <PrevVector />
                        {isWideScreen ? "Previous" : null}
                    </Previous>
                </>
            )}

            <PageNumberContainer>
                <Page>Page</Page>
                <PageNumber>{page}</PageNumber>
                <Of>of</Of>
                <PagesAmount>{totalPages}</PagesAmount>
            </PageNumberContainer>

            {page === parseInt(totalPages) ? (
                <>
                    <Next disabled={true}>
                        {isWideScreen ? "Next" : null}
                        <NextVector disabled={true}/>
                    </Next>
                    <Last disabled={true}>
                        {isWideScreen ? "Last" : null}
                        {isWideScreen ? null : <NextVector disabled={true}/>}
                        <NextVector disabled={true}/>
                    </Last>
                </>
            ) : (
                <>
                    <Next onClick={onNext}>
                        {isWideScreen ? "Next" : null}
                        <NextVector />
                    </Next>
                    <Last onClick={onLast}>
                        {isWideScreen ? "Last" : null}
                        {isWideScreen ? null : <NextVector />}
                        <NextVector />
                    </Last>
                </>
            )}
        </Wrapper>
    );
}

export default Pagination;
