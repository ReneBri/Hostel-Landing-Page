import styles from "./About.module.css";

import React from "react";
import Card from "../../../components/UI/card/Card";

const About = () => {
	return (
		<section>
			<div className="content-wrapper">
				<Card>
					<h3>About Us</h3>
					<div className={styles.paragraphWrapper}>
						<p>
							<strong>Queen Victoria Hostel</strong> is located directly opposite
							Queen Victoria Market and within the free tram zone. We have a pub bar
							downstairs serving cheap beers, wine and cocktails for everyone!{" "}
							<strong>
								Close to Southern Cross Station, Marvel Stadium, Flagstaff Garden,
								Melbourne Central, State Library Of Victoria, Melbourne Museum.
							</strong>
						</p>
						<p>
							We offer dormitory style rooms as well as{" "}
							<strong>twin and double rooms</strong>. All our rooms have
							<strong> air-conditioning</strong>. Access to the hostel is secured with
							electronic locks allowing guests to enter and exit the building easily.
							<strong> Free wi-fi is provided for all guests!</strong>
						</p>
						<p>
							<strong>Check in between 13:00-22:00</strong> (If you with wish you
							check in after 22:00, you must organise this with the hostel by calling
							+61472506174) - <strong>Check out by 11:00am</strong>
						</p>
						<p>
							<strong>Cancellation Policy:</strong> 24 hours notice must be given to
							cancel a booking. Failure to comply with this will result in the cost of
							one night's accommodation being debited from the credit card.
						</p>
						<p>
							All guests must have a{" "}
							<strong>VALID DRIVERS LICENCE OR PASSPORT</strong> at the time of
							check-in. If you do not have these your booking will be cancelled and
							you will not be allowed to check in. We require a key deposit of $50
							(cash or card) PER person for the stay and a copy of photo ID (which can
							be a valid drivers licence, key pass or passport). The deposit will stay
							with us for the duration of your stay and refunded when guests leave the
							facility in good condition.
						</p>
						<p>
							<strong>Please note the following:</strong>
						</p>
						<ul>
							<li>
								<b>-</b> You must have an international passport to stay. The
								recommended age for travellers are 18 to 40.
							</li>
							<li>
								<b>-</b> Our accommodation is on level 1 and is accessible via
								stairs only.
							</li>
							<li>
								<b>-</b> Payment of outstanding balance is required one day in
								advance.
							</li>
						</ul>
					</div>
				</Card>
			</div>
		</section>
	);
};

export default About;
