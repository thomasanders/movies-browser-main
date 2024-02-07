import Header from "../../common/Header";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { StyledHeader } from "./styled";
import { usePopularMovies } from "./usePopularMovies";
import { useGenres } from "../../common/useGenres";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import Pagination from "../../common/Pagination";
import {
	decrementPage,
	incrementPage,
	goToTheLastPage,
	goToTheFirstPage,
	selectPage,
	setCurrentPage
} from "../../common/Pagination/paginationSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PopularMovies = () => {
	const location = useLocation();
	const { popularMovies, loading, error } = usePopularMovies();
	const { genres } = useGenres();
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
		const movies = popularMovies.results;

		return (
			<GlobalWrapper>
				<StyledHeader>
					<Header text="Popular movies" />
				</StyledHeader>
				<MoviesGrid>
					{movies.map((movie) => (
						<MovieTile
							key={movie.id}
							id={movie.id}
							poster={movie.poster_path}
							title={movie.title}
							year={movie.release_date}
							genre={movie.genre_ids.map((id) =>
								genres.genres.find((genre) =>
									genre.id === id).name
							)}
							rating={movie.vote_average}
							votes={movie.vote_count}
						/>
					))}
				</MoviesGrid>
				<Pagination
					page={page}
					onPrev={() => dispatch(decrementPage())}
					onNext={() => dispatch(incrementPage())}
					onFirst={() => dispatch(goToTheFirstPage())}
					onLast={() => dispatch(goToTheLastPage(500))}
					totalPages={500}
				/>
			</GlobalWrapper>
		);
	} catch {
		return ""
	}
};

export default PopularMovies;