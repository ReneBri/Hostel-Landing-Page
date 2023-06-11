import styles from "./Footer.module.css";

import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className={styles.footerContainer}>
				<p>© Copyright Queen Victoria Hotel 2023</p>
			</div>
		</footer>
	);
};

export default Footer;
