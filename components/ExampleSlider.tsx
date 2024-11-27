"use client";
import { SkipBack, SkipForward } from "lucide-react";
import { FC, useEffect, useState } from "react";

interface Slide {
	src: string;
	caption: string;
}

const Slider: FC = () => {
	const slides: Slide[] = [
		{
			src: "/images/slide1.jpg",
			caption: "We Provide the best ICT IT service in town",
		},
		{ src: "/images/slide2.jpg", caption: "Quality printing, no fluff" },
		{
			src: "/images/slide3.jpg",
			caption: "We give you value for your money",
		},
	];

	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	useEffect(() => {
		const interval = setInterval(() => {
			handleNextSlide();
		}, 5000); // Change slide every 3 seconds

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);

	const handlePrevSlide = (): void => {
		setIsAnimating(true);
		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === 0 ? slides.length - 1 : prevIndex - 1
			);
			setIsAnimating(false);
		}, 500); // Animation duration
	};

	const handleNextSlide = (): void => {
		setIsAnimating(true);
		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === slides.length - 1 ? 0 : prevIndex + 1
			);
			setIsAnimating(false);
		}, 500); // Animation duration
	};

	return (
		<div className="relative w-full mx-auto overflow-hidden h-[500px] mb-5">
			{/* Slides */}
			<div
				className="flex transition-transform duration-500"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{slides.map((slide, index) => (
					<div key={index} className="w-full flex-shrink-0 relative">
						{/* Background Image */}
						<img
							src={slide.src}
							alt={`Slide ${index + 1}`}
							className="w-full h-[500px] object-cover"
						/>
						{/* Full Overlay */}
						<div className="absolute inset-0 bg-black bg-opacity-40"></div>
						{/* Text Overlay with Animation */}
						<div
							className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
								isAnimating
									? "opacity-0 translate-y-5"
									: "opacity-100 translate-y-0"
							}`}
						>
							<p className="text-3xl text-white font-extrabold px-4 text-center">
								{slide.caption}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Navigation Buttons */}
			<button
				onClick={handlePrevSlide}
				className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-20"
				aria-label="Previous Slide"
			>
				<SkipBack />
			</button>
			<button
				onClick={handleNextSlide}
				className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-20"
				aria-label="Next Slide"
			>
				<SkipForward />
			</button>

			{/* Dot Indicators */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => {
							setIsAnimating(true);
							setTimeout(() => {
								setCurrentIndex(index);
								setIsAnimating(false);
							}, 500); // Animation duration
						}}
						className={`w-3 h-3 rounded-full ${
							index === currentIndex ? "bg-white" : "bg-gray-500"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					></button>
				))}
			</div>
		</div>
	);
};

export default Slider;
