"use client";
import { SkipBack, SkipForward } from "lucide-react";
import { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Slide {
	src: string;
	caption: string;
}

const Slider: FC = () => {
	const slides: Slide[] = [
		{
			src: "/images/slide1.jpg",
			caption: "We Provide the best IT service in town",
		},
		{ src: "/images/slide2.jpg", caption: "Quality printing, no fluff" },
		{
			src: "/images/slide3.jpg",
			caption: "We give you value for your money",
		},
	];

	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	const handlePrevSlide = (): void => {
		if (isAnimating) return; // Prevent overlap animations
		setIsAnimating(true);
		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === 0 ? slides.length - 1 : prevIndex - 1
			);
			setIsAnimating(false);
		}, 500); // Animation duration
	};

	const handleNextSlide = (): void => {
		if (isAnimating) return; // Prevent overlap animations
		setIsAnimating(true);
		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === slides.length - 1 ? 0 : prevIndex + 1
			);
			setIsAnimating(false);
		}, 500); // Animation duration
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNextSlide();
		}, 5000); // Change slide every 1 minute

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);

	return (
		<div className="relative w-full mx-auto overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px]">
			{/* Slides */}
			<div className="relative w-full h-full">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-500 ${
							currentIndex === index
								? "opacity-100 z-10"
								: "opacity-0 z-0 pointer-events-none"
						}`}
					>
						{/* Background Image */}
						<Image
							src={slide.src}
							width={500}
							height={500}
							alt={`Slide ${index + 1}`}
							className="w-full h-full object-cover"
						/>
						{/* Full Overlay */}
						<div className="absolute inset-0 bg-black bg-opacity-40"></div>
						{/* Text Overlay */}
						<div className="absolute inset-0 flex items-center justify-center z-20">
							<p className="text-lg sm:text-2xl lg:text-3xl text-white font-extrabold px-4 text-center">
								{slide.caption}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Navigation Buttons */}
			<button
				onClick={handlePrevSlide}
				className="absolute top-1/2 left-4 hidden md:block transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-30 sm:p-3"
				aria-label="Previous Slide"
			>
				<SkipBack />
			</button>
			<button
				onClick={handleNextSlide}
				className="absolute top-1/2 right-4 hidden md:block transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-30 sm:p-3"
				aria-label="Next Slide"
			>
				<SkipForward />
			</button>

			{/* Dot Indicators */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => {
							if (isAnimating) return; // Prevent overlap animations
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
