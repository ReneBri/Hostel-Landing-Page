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
import img11 from "../../../media/images/QVH-image11.jpg";
import img12 from "../../../media/images/QVH-image12.jpg";
import img13 from "../../../media/images/QVH-image13.jpg";
import img14 from "../../../media/images/QVH-image14.jpg";
import img15 from "../../../media/images/QVH-image15.jpg";
import img16 from "../../../media/images/QVH-image16.jpg";
import img17 from "../../../media/images/QVH-image17.jpg";
import img18 from "../../../media/images/QVH-image18.jpg";
import img19 from "../../../media/images/QVH-image19.jpg";
import img20 from "../../../media/images/QVH-image20.jpg";
import img21 from "../../../media/images/QVH-image21.jpg";
import img22 from "../../../media/images/QVH-image22.jpg";
import img23 from "../../../media/images/QVH-image23.jpg";
import img24 from "../../../media/images/QVH-image24.jpg";

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

						<div className={styles.singleImageContainer}>
							<img
								src={img11}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(9)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img12}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(10)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img13}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(11)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img14}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(12)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img15}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(13)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img16}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(14)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img17}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(15)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img18}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(16)}
							/>
						</div>

						<div className={styles.singleImageContainer}>
							<img
								src={img19}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(17)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img20}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(18)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img21}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(19)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img22}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(20)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img23}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(21)}
							/>
						</div>
						<div className={styles.singleImageContainer}>
							<img
								src={img24}
								alt="pic of interior of hostel"
								onClick={() => handleShowImageModal(22)}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageGallery;
