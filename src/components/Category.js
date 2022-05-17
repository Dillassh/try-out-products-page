import React, { useState } from "react";
import ApiData from "./ApiData";
import "./Category.css";

const Category = () => {
	const [data, setData] = useState(ApiData);
	const filterResult = (catItem) => {
		const result = ApiData.filter((curData) => {
			return curData.category === catItem;
		});
		setData(result);
	};

	return (
		<>
			<h1 className='text-center text-info'>Let's shop</h1>
			<div className='container-fluid mx-2'>
				<div className='row mt-5 mx-2'>
					<div className='col-md-3'>
						<button
							className='btn btn-warning w-100 mb-4'
							onClick={() => filterResult("men's clothing")}>
							Men
						</button>
						<button
							className='btn btn-warning w-100 mb-4'
							onClick={() => filterResult("women's clothing")}>
							Women's clothing
						</button>
						<button
							className='btn btn-warning w-100 mb-4'
							onClick={() => filterResult("electronics")}>
							Electronics
						</button>
						<button
							className='btn btn-warning w-100 mb-4'
							onClick={() => filterResult("jewerly")}>
							Jewerly
						</button>
						<button
							className='btn btn-warning w-100 mb-4'
							onClick={() => setData(ApiData)}>
							All
						</button>
					</div>
					<div className='col-md-9'>
						<div className='row'>
							{data.map((values) => {
								const { id, title, price, image, category } = values;
								return (
									<>
										<div className='col-md-4 mb-4' key={id}>
											<div className='card'>
												<img src={image} className='card-img-top' alt='...' />
												<div className='card-body'>
													<h5 className='card-title'>{title}</h5>
													<p>{price}$ </p>
													<p className='card-text'>{category}</p>
													<button className='btn btn-dark'>
														Add to Wishlist!
													</button>
												</div>
											</div>
										</div>
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Category;
