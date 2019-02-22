import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Authenication from './authenication/authenication';
import DailyTestData from './dailyTestData/dailyTestData';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/test-data" component={DailyTestData} exact />
					<Route path="/" component={Authenication} exact />
				</Switch>
			</BrowserRouter>
			
		)
	}
}