import Brands from "./components/Brands";
import Cta from "./components/Cta";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Pricing from "./components/Pricing";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";

function App() {
	return (
		<div className="overflow-hidden">
			<Header />
			<Hero />
			<Overview />
			<Brands />
			<Feature1 />
			<Feature2 />
			<Feature3 />
			<Product />
			<Pricing />
			<Testimonials />
			<Cta />
			<Footer />
		</div>
	);
}

export default App;
