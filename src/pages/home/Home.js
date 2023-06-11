import styles from "./Home.module.css";

import React, {useState} from "react";
import ReactDOM from "react-dom";

import Hero from "./hero/Hero";
import About from "./about/About";
import ImageGallery from "./image-gallery/ImageGallery";
import ImageModal from "../../components/UI/modal/ImageModal";
import Contact from "./contact/Contact";

const Home = () => {
	const [showImageModal, setShowImageModal] = useState(false);
	const [imageNumber, setImageNumber] = useState(null);

	const handleShowImageModal = (selectedImage) => {
		setShowImageModal(true);
		setImageNumber(selectedImage);
	};
	return (
		<div className={styles.contentWrapper}>
			<Hero />
			<About />
			<ImageGallery handleShowImageModal={handleShowImageModal} />
			{showImageModal &&
				ReactDOM.createPortal(
					<ImageModal
						imageNumber={imageNumber}
						setImageNumber={setImageNumber}
						setShowImageModal={setShowImageModal}
					/>,
					document.getElementById("modal-root")
				)}
			<Contact />
		</div>
	);
};

export default Home;
