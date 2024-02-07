import PersonTile from "./PersonTile";
import { NameContainer } from "./styled";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { useParams } from "react-router-dom";
import { usePopularPerson } from "./usePopularPerson";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import { usePersonCredits } from "./usePersonCredits";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { useGenres } from "../../common/useGenres";
import { MovieWrapper } from "../moviePage/styled";

const Person = () => {
    const { id } = useParams();
    const personId = id;
    const { genres } = useGenres();

    const { popularPerson, loading, error } = usePopularPerson(personId);
    const { personCredits } = usePersonCredits(personId);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    try {
        const cast = personCredits.cast;
        const crew = personCredits.crew;
        const crewLength = crew.length;
        const castlength = cast.length;

        return (
            <GlobalWrapper>
                <PersonTile
                    key={popularPerson.id}
                    poster={popularPerson.profile_path}
                    name={popularPerson.name}
                    birthDate={popularPerson.birthday}
                    birthPlace={popularPerson.place_of_birth}
                    description={popularPerson.biography}
                />
                <NameContainer>{castlength > 0 ? `Movies - cast (${cast.length})` : ""}</NameContainer>
                <MoviesGrid>
                    {cast.map((castMovie) => (
                        <MovieTile
                            key={castMovie.id}
                            id={castMovie.id}
                            poster={castMovie.poster_path}
                            title={castMovie.title}
                            character={castMovie.character}
                            yearInParentheses={castMovie.release_date}
                            genre={castMovie.genre_ids.map((id) =>
                                genres.genres.find((genre) =>
                                    genre.id === id).name
                            )}
                            rating={castMovie.vote_average}
                            votes={castMovie.vote_count}
                        />
                    ))}
                </MoviesGrid>
                <NameContainer>{crewLength > 0 ? `Movies - crew (${crewLength})`  : ""}</NameContainer>
                <MoviesGrid>
                    {crew.map((crewMovie) => (
                        <MovieTile
                            key={crewMovie.credit_id}
                            id={crewMovie.id}
                            poster={crewMovie.poster_path}
                            title={crewMovie.title}
                            character={crewMovie.job}
                            yearInParentheses={crewMovie.release_date}
                            genre={crewMovie.genre_ids.map((id) =>
                                genres.genres.find((genre) =>
                                    genre.id === id).name
                            )}
                            rating={crewMovie.vote_average}
                            votes={crewMovie.vote_count}
                        />
                    ))}
                </MoviesGrid>
                <MovieWrapper />
            </GlobalWrapper>
        )
    } catch {
        return ""
    }
};

export default Person;