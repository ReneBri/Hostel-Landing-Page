import styles from "./Card.module.css";

import React from "react";

const Card = ({children, backgroundImg}) => {
	const classes = backgroundImg ? `${styles.card} ${styles.cardWithBackground}` : styles.card;
	return (
		<div className={classes} style={{backgroundImage: `url(${backgroundImg})`}}>
			{children}
		</div>
	);
};

export default Card;
