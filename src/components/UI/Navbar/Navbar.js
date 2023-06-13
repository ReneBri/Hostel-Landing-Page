import styles from "./Navbar.module.css";
import logo from "../../../media/images/QVH-logo.jpeg";

import React from "react";

const Navbar = () => {
	const scrollToAbout = () => {
		const section = document.querySelector("#about-anchor");
		section.scrollIntoView({behavior: "smooth", block: "start"});
	};
	const scrollToGallery = () => {
		const section = document.querySelector("#gallery-anchor");
		section.scrollIntoView({behavior: "smooth", block: "start"});
	};
	const scrollToContact = () => {
		const section = document.querySelector("#contact-anchor");
		section.scrollIntoView({behavior: "smooth", block: "start"});
	};
	return (
		<header>
			<nav>
				<div className={styles.navWrapper}>
					<img
						src={logo}
						alt="queen vidtoria hostel logo"
						className={styles.navbarLogo}
					/>
					<ul>
						<li onClick={scrollToAbout}>ABOUT US</li>
						<li onClick={scrollToGallery}>GALLERY</li>
						<li onClick={scrollToContact}>CONTACT US</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
