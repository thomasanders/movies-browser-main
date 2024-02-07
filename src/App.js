import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./common/NavigationBar";
import PopularMovies from "./features/movieList";
import PopularPeople from "./features/personList";
import Person from "./features/personPage";
import Movie from "./features/moviePage";
import SearchResults from "./features/searchResults";

function App() {
	return (
		<HashRouter>
			<NavigationBar />
			<Switch>
				<Route exact path="/movies" component={PopularMovies} />
				<Route exact path="/people" component={PopularPeople} />
				<Route path="/movies/search" component={SearchResults} />
				<Route path="/people/search" component={SearchResults} />
				<Route path="/movies/:id" component={Movie} />
				<Route path="/people/:id" component={Person} />
				<Route path="/">
					<Redirect to="/movies" />
				</Route>
			</Switch>
		</HashRouter>
	);
};

export default App;
