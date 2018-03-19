import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import File from './components/File';
import { Link } from 'react-router-dom';

class App extends Component {


	render() {

		return (
			<Router>
				<div>
				<Link to="/live">Live</Link>{''}{''}
				<Link to="/qa">QAE</Link>{''}{''}
				<Link to="/dg">Build Guide</Link>{''}{''}
				<Route
						exact
						path="/"
						render={() => <File env="live" />}
					/>

					<Route
						exact
						path="/live"
						render={() => <File env="live" />}
					/>

					<Route
						exact
						path="/qa"
						render={() => <File env="qa"/>}
					/>
					<Route
						exact
						path="/dg"
						render={() => <File env="dg"/>}
					/>
				</div>

			</Router>
		)

			
    }
}

export default App;