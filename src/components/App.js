import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import File from './releases/File';
import Guide from './Guide/Guide';
import Home from './Home';

class App extends Component {


	render() {

		return (
			<Router>

				<div>
					<Route
						exact
						path="/"
						render={() => <Home />}
					/>

					<Route
						exact
						path="/web"
						render={() => <Guide proj="web" />}
					/>

					<Route
						exact
						path="/web/:env"
						render={props => <File env={props.match.params.env} proj="web" />}
					/>

					<Route
						exact
						path="/backend"
						render={() => <Guide proj="backend"/>}
					/>

					<Route
						exact
						path="/backend/:env"
						render={props => <File proj="backend" env={props.match.params.env}/>}
					/>

					<Route
						exact
						path="/admin"
						render={() => <Guide proj="admin"/>}
					/>

					<Route
						exact
						path="/admin/:env"
						render={props => <File proj="admin" env={props.match.params.env}/>}
					/>
				</div>

			</Router>
		)

			
    }
}

export default App;