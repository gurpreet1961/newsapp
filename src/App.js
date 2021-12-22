import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
	pageSize = 8;
	render() {
		return (
			<>
				<Router>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<News
								key="general"
								country="in"
								apiKey="d5de28191fc24439b9abfb8b8b4810d8"
								pageSize={this.pageSize}
								category="general"
							/>
						</Route>
						<Route exact path="/business">
							<News
								key="business"
								country="in"
								apiKey="d5de28191fc24439b9abfb8b8b4810d8"
								pageSize={this.pageSize}
								category="business"
							/>
						</Route>
						<Route exact path="/entertainment">
							<News
								key="entertainment"
								country="in"
								apiKey="d5de28191fc24439b9abfb8b8b4810d8"
								pageSize={this.pageSize}
								category="entertainment"
							/>
						</Route>
						<Route exact path="/general">
							<News
								key="general"
								country="in"
								apiKey="d5de28191fc24439b9abfb8b8b4810d8"
								pageSize={this.pageSize}
								category="general"
							/>
						</Route>
						<Route exact path="/health">
							<News
								key="health"
								country="in"
								apiKey="d5de28191fc24439b9abfb8b8b4810d8"
								pageSize={this.pageSize}
								category="health"
							/>
						</Route>
						<Route exact path="/science">
							<News
								key="science"
								country="in"
								apiKey="d5de28191fc24439b9abfb8b8b4810d8"
								pageSize={this.pageSize}
								category="science"
							/>
						</Route>
						<Route exact path="/sports">
							<News
								key="sports"
								country="in"
								apiKey="d5de28191fc24439b9abfb8b8b4810d8"
								pageSize={this.pageSize}
								category="sports"
							/>
						</Route>
						<Route exact path="/technology">
							<News
								key="technology"
								country="in"
								apiKey="d5de28191fc24439b9abfb8b8b4810d8"
								pageSize={this.pageSize}
								category="technology"
							/>
						</Route>
					</Switch>
				</Router>
			</>
		);
	}
}
