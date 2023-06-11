import styles from "./ImageGallery.module.css";

import React from "react";

import img1 from "../../../media/images/QVH-image1.jpeg";
import img2 from "../../../media/images/QVH-image2.jpeg";
import img3 from "../../../media/images/QVH-image3.jpeg";
import img4 from "../../../media/images/QVH-image4.jpeg";
import img5 from "../../../media/images/QVH-image5.jpeg";
import img6 from "../../../media/images/QVH-image6.jpeg";
import img7 from "../../../media/images/QVH-image7.jpeg";
import img8 from "../../../media/images/QVH-image8.jpeg";

const ImageGallery = ({handleShowImageModal}) => {
	return (
		<section>
			<div className={styles.imageGalleryBackground}>
				<div className="content-wrapper">
					<h3>Gallery</h3>
					<div className={styles.imageGalleryContainer}>
						<div className={styles.singleImageContainer}>
							<img
								src={img1}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(1)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img2}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(2)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img3}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(3)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img4}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(4)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img5}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(5)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img6}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(6)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img7}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(7)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img8}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(8)}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageGallery;
