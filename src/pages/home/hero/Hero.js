import styles from "./Hero.module.css";

import React from "react";

import heroImage from "../../../media/images/QVH-hero.jpeg";

const Hero = () => {
	return (
		<main>
			<div className={styles.heroContainer} style={{backgroundImage: `url(${heroImage})`}}>
				<h1>Queen Victoria Hostel</h1>
				<div className={styles.taglineWrapper}>
					<p>Cafe</p>
					<p>•</p>
					<p>Hostel</p>
					<p>•</p>
					<p>Pub</p>
				</div>
			</div>
		</main>
	);
};

export default Hero;
