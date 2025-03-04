// src/Carousel.js
import React, { useState } from "react";

const Carousel = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="relative w-full max-w-lg mx-auto">
			{/* Image */}
			<div className="overflow-hidden rounded-lg">
				<img
					src={images[currentIndex]}
					alt={`Slide ${currentIndex + 1}`}
					className="w-full"
				/>
			</div>

			{/* Left Arrow */}
			<button
				onClick={goToPrevious}
				className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 text-white bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none"
				aria-label="Previous Slide"
			>
				&#10094;
			</button>

			{/* Right Arrow */}
			<button
				onClick={goToNext}
				className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 text-white bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none"
				aria-label="Next Slide"
			>
				&#10095;
			</button>

			{/* Indicators */}
			<div className="flex justify-center translate-y-[-25px]">
				{images.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setCurrentIndex(idx)}
						className={`mx-1 w-2 h-2 rounded-full ${
							idx === currentIndex ? "bg-gray-800" : "bg-gray-300"
						}`}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
