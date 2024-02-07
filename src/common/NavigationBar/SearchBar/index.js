import {
	StyledSearchBar,
	Input,
	Icon,
} from "./styled";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { goToTheFirstPage } from "../../Pagination/paginationSlice";

const SearchBar = () => {
	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();
	const moviesPage = location.pathname.includes("/movies");
	const query = (new URLSearchParams(location.search)).get("query");

	const onInputChange = ({ target }) => {
		const searchParams = new URLSearchParams(location.search);

		if (target.value.trim() === "") {
			searchParams.delete("query");
			dispatch(goToTheFirstPage());

			if (location.pathname.match(/\/(movies|people)\/\d+/)) {
				const newPath = location.pathname.replace(
					/\/(movies|people)\/\d+$/, `/${moviesPage ? "movies" : "people"}/search`
				);
				history.push(`${newPath}?${searchParams.toString()}`);
			} else {
				const newPath = location.pathname.replace(/\/search$/, "");
				history.push(`${newPath}?${searchParams.toString()}`);
			}
		} else {
			searchParams.set("query", target.value);
			dispatch(goToTheFirstPage());

			if (location.pathname.match(/\/(movies|people)\/\d+/)) {
				const newPath = location.pathname.replace(
					/\/(movies|people)\/\d+$/, `/${moviesPage ? "movies" : "people"}/search`
				);
				history.push(`${newPath}?${searchParams.toString()}`);
			} else {
				const newPath = `${location.pathname.replace(/\/search$/, "")}/search`;
				history.push(`${newPath}?${searchParams.toString()}`);
			}
		}
	};

	return (
		<StyledSearchBar>
			<Icon />
			<Input
				placeholder={
					moviesPage ? "Search for movies..." : "Search for people..."
				}
				value={query || ""}
				onChange={onInputChange}
			/>
		</StyledSearchBar>
	)
};

export default SearchBar;