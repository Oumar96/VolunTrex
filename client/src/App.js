import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Home from './pages/Home'
import Association from './pages/Association'
import Project from './pages/Project'

function Application() {
  return (
    <div>
      <Switch>
				<Route exact path="/">
					<Route exact path="/" component={Home} />
				</Route>
        <Route exact path="/Association">
					<Route exact path="/Association" component={Association} />
				</Route>
        <Route exact path="/Project">
					<Route exact path="/Project" component={Project} />
				</Route>
      </Switch>
    </div>
  );
}

export default function App() {
	return (
		<Router>
			<Application/>
		</Router>
	);
}
