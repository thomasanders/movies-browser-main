import MovieBaner from "./MovieBaner";
import MovieTileDetails from "./MovieTileDetails";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { MovieWrapper, Title } from "./styled";
import { GridWrapper } from "../../common/GridWrapper/styled";
import { usePopularMovie } from "./usePopularMovie";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import PersonTile from "../../common/PersonTile";
import { useParams } from "react-router-dom";
import { useCredits } from "./useCredits";
import { PeopleGrid } from "../../common/PersonTile/styled";

const Movie = () => {
    const { id } = useParams();
    const movieId = id;

    const { popularMovie, loading, error } = usePopularMovie(movieId);
    const { credits } = useCredits(movieId);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    try {
        const cast = credits.cast;
        const crew = credits.crew;

        return (
            <MovieWrapper>
                <MovieBaner
                    key={popularMovie.backdrop_path}
                    baner={popularMovie.backdrop_path}
                    title={popularMovie.title}
                    rating={popularMovie.vote_average}
                    votes={popularMovie.vote_count}
                />
                <GlobalWrapper>
                    <MovieTileDetails
                        key={popularMovie.id}
                        poster={popularMovie.poster_path}
                        title={popularMovie.title}
                        year={popularMovie.release_date}
                        production={popularMovie.production_countries.map(
                            country => country.name
                        )}
                        release={popularMovie.release_date}
                        genre={popularMovie.genres.map(
                            genre => genre.name
                        )}
                        rating={popularMovie.vote_average}
                        votes={popularMovie.vote_count}
                        overview={popularMovie.overview}
                    />
                    <Title>Cast</Title>
                </GlobalWrapper>
                <GridWrapper>
                    <PeopleGrid>
                        {cast.map((castPerson) => (
                            <PersonTile
                                key={castPerson.id}
                                id={castPerson.id}
                                poster={castPerson.profile_path}
                                name={castPerson.name}
                                character={castPerson.character}
                            />
                        ))}
                    </PeopleGrid>
                </GridWrapper>
                <GlobalWrapper>
                    <Title>Crew</Title>
                </GlobalWrapper>
                <GridWrapper>
                    <PeopleGrid>
                        {crew.map((crewPerson) => (
                            <PersonTile
                                key={crewPerson.credit_id}
                                id={crewPerson.id}
                                poster={crewPerson.profile_path}
                                name={crewPerson.name}
                                character={crewPerson.job}
                            />
                        ))}
                    </PeopleGrid>
                </GridWrapper>
            </MovieWrapper>
        )
    } catch {
        return ""
    }
};

export default Movie;