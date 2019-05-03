import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '../store'
import Authenication from './authenication/authenication';
import DailyTestData from './dailyTestData/dailyTestData';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route path="/test-data" component={DailyTestData} exact />
						<Route path="/" component={Authenication} />
					</Switch>
				</BrowserRouter>
			</Provider>
			
		)
	}
}