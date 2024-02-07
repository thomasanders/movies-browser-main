import noPoster from "../../../images/no-poster.svg"
import {
    Container,
    MovieDataContainer,
    Poster,
    Title,
    Year,
    MovieDate,
    MovieDateText,
    GenreTags,
    Tag,
    Stats,
    RatingIcon,
    Rating,
    RatingMax,
    Votes,
    DescriptionText,
} from "./styled";
import { useState, useEffect } from "react";
import { imageURL } from "../../../common/API/APIData";

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
};

const MovieTileDetails = ({ poster, title, year, production, release, genre, rating, votes, overview }) => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1140);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1140);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <Container>
            {poster ? (
                <Poster src={imageURL + "w342" + poster} alt="Poster" />
            ) : (
                <Poster src={noPoster} alt="Logo" />
            )}
            <MovieDataContainer>
                <Title>{title ? title : "Unknown title"}</Title>
                <Year>{year ? (new Date(year).getFullYear()) : ""}</Year>
                <MovieDate>
                    <MovieDateText>Production: </MovieDateText>
                    {production ? (production.join(", ")) : "Unknown"}
                </MovieDate>
                <MovieDate>
                    <MovieDateText>Release date: </MovieDateText>
                    {release ? new Date(release).toLocaleDateString(undefined, {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    }) : "Unknown"}
                </MovieDate>
                <GenreTags>
                    {genre ? (
                        genre.map((genreName, index) => (
                            <Tag key={index}>{genreName}</Tag>
                        ))
                    ) : ""}
                </GenreTags>
                <Stats>
                    {votes ? (
                        <>
                            <RatingIcon />
                            <Rating>{rating ? rating.toFixed(1).replace(".", ",") : "0"}</Rating>
                            <RatingMax>/ 10</RatingMax>
                            <Votes>{formatNumber(votes) + " votes"}</Votes>
                        </>
                    ) : (
                        "No votes yet"
                    )}
                </Stats>
                {isWideScreen && <DescriptionText>{overview}</DescriptionText>}
            </MovieDataContainer>
            {!isWideScreen && <DescriptionText>{overview}</DescriptionText>}
        </Container>
    );
}

export default MovieTileDetails;