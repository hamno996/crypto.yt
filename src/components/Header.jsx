import React, { useState, useEffect } from "react";
// import data
import { header } from "../data";
// import icons
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
// import components
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const Header = () => {
	// mobile nav state
	const [mobileNav, setMobileNav] = useState(false);
	// header state
	const [isActive, setIsActive] = useState(false);
	// destructure header data
	const { logo, btnText } = header;

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
		});
	});
	return (
		<header
			className={`${
				isActive ? "lg:top-0 bg-white shadow-2xl" : "lg:top-[60px]"
			} py-6 lg:py-4 fixed w-full transition-all z-10`}>
			<div className="container mx-auto flex justify-between items-center">
				<a href="#">
					<img src={logo} alt="" />
				</a>
				<div className="hidden lg:flex">
					<Nav />
				</div>

				<button className="btn btn-sm btn-outline hidden lg:flex">
					{btnText}
				</button>
				<button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
					{mobileNav ? (
						<HiOutlineX className="text-3xl text-accent" />
					) : (
						<HiMenuAlt4 className="text-3xl text-accent" />
					)}
				</button>

				<div
					className={`${
						mobileNav ? "left-0" : "-left-full"
					} fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}>
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
