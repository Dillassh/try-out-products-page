import React, { useState, useEffect } from "react";

import "./Category.css";
import Search from "./Search";

const Category = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(null);
	const [inputValue, setInputValue] = useState("");

	const getProducts = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const productsFromAPI = await response.json();
		setData(productsFromAPI);
		setFilter(productsFromAPI);
	};

	useEffect(() => {
		getProducts(setData);
	}, []);

	const filterResult = (catItem) => {
		const result = filter.filter((item) => {
			return item.category === catItem;
		});
		setData(result);
		result.filter(inputValue);
	};

	const onSearch = (input) => {
		setInputValue(input);
	};

	console.log(inputValue);

	const filterByInput = (arrayProducts, value) => {
		if (value === null) return arrayProducts;
		return arrayProducts.filter((product) => {
			return product.title.toLowerCase().includes(value.toLowerCase());
		});
	};

	const ShowProducts = ({ products }) => {
		return (
			<>
				<h1 className='text-center text-info'>Let's shop</h1>
				<div className='container-fluid mx-2'>
					<div className='row mt-5 mx-2'>
						<div className='col-md-3'>
							<button
								className='btn btn-success w-100 mb-4'
								onClick={() => filterResult("men's clothing")}>
								Men
							</button>
							<button
								className='btn btn-success w-100 mb-4'
								onClick={() => filterResult("women's clothing")}>
								Women's clothing
							</button>
							<button
								className='btn btn-success w-100 mb-4'
								onClick={() => filterResult("electronics")}>
								Electronics
							</button>
							<button
								className='btn btn-success w-100 mb-4'
								onClick={() => filterResult("jewelery")}>
								Jewerly
							</button>
							<button
								className='btn btn-success w-100 mb-4'
								onClick={getProducts}>
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
	return (
		<>
			<Search handleSearch={onSearch} />
			{filter ? (
				<ShowProducts products={filterByInput(filter, inputValue)} />
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};

export default Category;
