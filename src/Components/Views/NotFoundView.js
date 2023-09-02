import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundView.css";

export const NotFoundView = () => {
	return (
		<div className='NotFound__Container'>
			<h2>Page not found</h2>
			<p>
				We're sorry, the page you requested could not be found. Please go back
				to the <Link className="Home__link" to={`/`}>HOME PAGE</Link>
			</p>
		</div>
	);
};
