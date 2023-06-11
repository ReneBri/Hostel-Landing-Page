import styles from "./Contact.module.css";

import React from "react";
import Card from "../../../components/UI/card/Card";

const Contact = () => {
	return (
		<section>
			<div className="content-wrapper">
				<h3>Contact or Book Now</h3>
				<div className={styles.contactContentWrapper}>
					<Card>
						<h4>Phone & Email</h4>
						<ul>
							<li>+61 472 506 174</li>
							<li>contact@queenvichostel.com</li>
						</ul>
					</Card>
					<Card>
						<h4>Hostel World</h4>
						<p>Book through Hostel World</p>
					</Card>
					<Card>
						<h4>Booking.com</h4>
						<p>Book through Booking.com</p>
					</Card>
				</div>
				<div className={styles.mapWrapper}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.3343939081647!2d144.9531332124324!3d-37.80563577186076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4fec8febbf%3A0x14496728462937f0!2sQueen%20Victoria%20Hostel!5e0!3m2!1sen!2sde!4v1686512290867!5m2!1sen!2sde"
						width="600"
						title="Unique"
						height="450"
						style={{border: 0}}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
					<div className={styles.mapTextContentContainer}>
						<h4>Our Facilities Include:</h4>
						<div className={styles.listWrapper}>
							<div className={styles.listItems}>
								<ul>
									<li>
										<b>Free</b>
									</li>
									<li>Linen Included</li>
									<li>Free City Maps</li>
									<li>Free WIFI</li>
									<li>Free Internet Access</li>
								</ul>
							</div>
							<div className={styles.listItems}>
								<ul>
									<li>
										<b>General</b>
									</li>
									<li>Security Lockers</li>
									<li>Key Card Access</li>
									<li>Breakfast Not Included</li>
									<li>Air Conditioning</li>
									<li>Hot Showers</li>
									<li>Fridge/Freezer</li>
									<li>Utensils</li>
									<li>Hair Dryers</li>
									<li>Microwave</li>
									<li>Washing Machine</li>
								</ul>
							</div>
							<div className={styles.listItems}>
								<ul>
									<li>
										<b>Services</b>
									</li>
									<li>Internet access</li>
									<li>Laundry Facilities</li>
									<li>Towels for hire</li>
									<li>Luggage Storage</li>
									<li>Postal Service</li>
									<li>Express check-in / out</li>
									<li>Reception (limited hours)</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
