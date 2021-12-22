import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
	static defaultProps = {
		country: "in",
		pageSize: 8,
		apiKey: "d5de28191fc24439b9abfb8b8b4810d8",
		category: "general",
	};
	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		apiKey: PropTypes.string,
		category: PropTypes.string,
	};
	constructor() {
		super();
		this.state = {
			articles: [],
			loading: false,
			page: 1,
		};
	}
	async componentDidMount() {
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}
	handleNextClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
			this.state.page + 1
		}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();

		this.setState({
			page: this.state.page + 1,
			articles: parsedData.articles,
			loading: false,
		});
	};
	handlePrevClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
			this.state.page - 1
		}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			page: this.state.page - 1,
			articles: parsedData.articles,
			loading: false,
		});
	};
	render() {
		return (
			<div className="container my-3">
				<h1 className="text-center" style={{ margin: "35px 0" }}>
					NewsApp - Top News Headlines
				</h1>
				{this.state.loading && <Spinner />}
				<div className="row align-item-center">
					{!this.state.loading &&
						this.state.articles.map((ele) => {
							return (
								<div key={ele.url} className=" col-xl-3 col-md-4 col-sm-1">
									<NewsItem
										title={ele.title ? ele.title.slice(0, 45) : ""}
										description={
											ele.description ? ele.description.slice(0, 88) : ""
										}
										imageUrl={ele.urlToImage}
										newsUrl={ele.url}
										author={ele.author}
										date={ele.publishedAt}
										source={ele.source.name}
									/>
								</div>
							);
						})}
				</div>
				<div className="container d-flex justify-content-between">
					<button
						disabled={this.state.page <= 1}
						type="button"
						className="btn btn-dark"
						onClick={this.handlePrevClick}
					>
						&larr; Previous
					</button>
					<button
						disabled={
							this.state.page + 1 >
							Math.ceil(this.state.totalResults / this.props.pageSize)
						}
						type="button"
						className="btn btn-dark"
						onClick={this.handleNextClick}
					>
						Next &rarr;
					</button>
				</div>
			</div>
		);
	}
}
