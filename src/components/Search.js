import React, { useState } from "react";

function Search({ handleSearch }) {
	const [q, setQ] = useState("");

	return (
		<div>
			<input
				className=' mt-5'
				type='text'
				placeholder='Search...'
				onChange={(e) => {
					setQ(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					handleSearch(q);
				}}>
				Search
			</button>
		</div>
	);
}

export default Search;
