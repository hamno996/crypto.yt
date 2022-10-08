import React from "react";

import { product } from "../data";
// import components
import Cards from "./Cards";

const Product = () => {
	const { title, subtitle } = product;

	return (
		<section className="section">
			<div className="container mx-auto">
				<div className="flex flex-col items-center lg:flex-row mb-10 lg:mb-20">
					<h2 className="section-title">{title}</h2>
					<p className="lead lg:max-w-[350px]">{subtitle}</p>
				</div>
				<Cards />
			</div>
		</section>
	);
};

export default Product;
