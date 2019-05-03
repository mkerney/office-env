import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Authenication from './authenication/authenication';
import DailyTestData from '../containers/testData/testData';

class App extends Component {

	componentDidMount() {
		this.props.checkForToken()
	}

	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route path="/test-data" component={DailyTestData} exact />
					<Route path="/" component={Authenication} />
				</Switch>
				{this.props.isSignedIn && window.location.pathname === '/' ? <Redirect push to="/test-data" /> : null}
			</React.Fragment>
		)
	}
}

export default App