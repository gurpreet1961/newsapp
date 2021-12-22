import React, { Component } from "react";

export default class NewsItem extends Component {
	render() {
		let { title, description, imageUrl, newsUrl, author, date, source } =
			this.props;
		return (
			<div className="my-3">
				<div className="card">
					<img
						src={
							imageUrl
								? imageUrl
								: "https://cdn.pixabay.com/photo/2017/06/26/19/32/news-2444888_960_720.jpg"
						}
						style={{
							float: "left",
							width: "295px",
							objectFit: "cover",
							height: "200px",
						}}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">
							{title}...{" "}
							<span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
								{source}
							</span>
						</h5>
						<p className="card-text">{description}</p>
						<p className="card-text">
							<small className="text-muted">
								By {!author ? "Unknown" : author} on
								{new Date(date).toGMTString()}
							</small>
						</p>
						<a
							rel="noreferrer"
							href={newsUrl}
							target="_blank"
							className="btn btn-sm btn-dark"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		);
	}
}
