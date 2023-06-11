import styles from "./ImageModal.module.css";

import React from "react";

import left from "../../../media/icons/left.svg";
import right from "../../../media/icons/right.svg";
import close from "../../../media/icons/close.svg";

import img1 from "../../../media/images/QVH-image1.jpeg";
import img2 from "../../../media/images/QVH-image2.jpeg";
import img3 from "../../../media/images/QVH-image3.jpeg";
import img4 from "../../../media/images/QVH-image4.jpeg";
import img5 from "../../../media/images/QVH-image5.jpeg";
import img6 from "../../../media/images/QVH-image6.jpeg";
import img7 from "../../../media/images/QVH-image7.jpeg";
import img8 from "../../../media/images/QVH-image8.jpeg";

const ImageModal = ({imageNumber, setImageNumber, setShowImageModal}) => {
	console.log(imageNumber);

	const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8];

	let imageToShow = imageArray[imageNumber - 1];

	const handleIncrementImageNumber = () => {
		setImageNumber((prevNumber) => {
			if (+prevNumber > imageArray.length - 1) {
				return 1;
			} else if (+prevNumber < 1) {
				return +imageArray.length;
			} else {
				return +prevNumber + 1;
			}
		});
	};

	const handleDecrementImageNumber = (instruction) => {
		setImageNumber((prevNumber) => {
			if (+prevNumber > imageArray.length) {
				return 1;
			} else if (+prevNumber === 1) {
				return +imageArray.length;
			} else {
				return +prevNumber - 1;
			}
		});
	};

	return (
		<>
			<div className={styles.imageModalBackdrop}>
				<span className={styles.left} onClick={handleDecrementImageNumber}>
					<img src={left} alt="navigate left" />
				</span>
				<img className={styles.modalImage} src={imageToShow} alt="chosen one" />
				<span className={styles.right} onClick={handleIncrementImageNumber}>
					<img src={right} alt="navigate right" />
				</span>
				<span className={styles.exit} onClick={() => setShowImageModal(false)}>
					<img src={close} alt="exit images" />
				</span>
			</div>
		</>
	);
};

export default ImageModal;
