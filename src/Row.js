import React, { useState, useEffect } from 'react';

function Row({ title }) {
	const [movies, setMovies] = useState([]);

	// A snippet of code which runs based on a specific condition
	useEffect(() => {
		// if brackets blank, run once at load
	}, []);

	return (
		<div>
			<h2>{title}</h2>

			{/* container -> posters */}
		</div>
	);
}

export default Row;
