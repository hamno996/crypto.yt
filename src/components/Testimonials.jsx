import React from "react";

// import data
import { testimonials } from "../data";
// import components
import ClientSlider from "../components/ClientSlider";

const Testimonials = () => {
	const { title, clients } = testimonials;

	return (
		<section className="section">
			<div className="container mx-auto">
				<h2 className="title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto">
					{title}
				</h2>
				<div>
					<ClientSlider clients={clients} />
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
