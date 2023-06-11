import styles from "./Navbar.module.css";
import logo from "../../../media/images/QVH-logo.jpeg";

import React from "react";

const Navbar = () => {
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
						<li>ABOUT US</li>
						<li>GALLERY</li>
						<li>CONTACT US</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
