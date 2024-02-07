import { useDispatch } from "react-redux";
import { goToTheFirstPage } from "../../Pagination/paginationSlice";
import {
	StyledNavigation,
	Header,
	Logo,
	Caption,
	List,
	PageLink,
} from "./styled";

const Navigation = () => {
	const dispatch = useDispatch();

	const resetPageState = () => {
		dispatch(goToTheFirstPage());
	};

	return (
		<StyledNavigation>
			<Header to="/">
				<Logo onClick={resetPageState} />
				<Caption onClick={resetPageState}>
					Movies Browser
				</Caption>
			</Header>
			<List>
				<li>
					<PageLink to="/movies" onClick={resetPageState}>
						Movies
					</PageLink>
				</li>
				<li>
					<PageLink to="/people" onClick={resetPageState}>
						People
					</PageLink>
				</li>
			</List>
		</StyledNavigation>
	);
};

export default Navigation;