import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import {
	StyledNavigationBar,
	Wrapper,
} from "./styled";

const NavigationBar = () => (
	<StyledNavigationBar>
		<Wrapper>
			<Navigation />
			<SearchBar />
		</Wrapper>
	</StyledNavigationBar>
);

export default NavigationBar