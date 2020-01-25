import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Home from './pages/Home'

function Application() {
  return (
    <div>
      <Switch>
				<Route exact path="/">
					<Route exact path="/" component={Home} />
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
