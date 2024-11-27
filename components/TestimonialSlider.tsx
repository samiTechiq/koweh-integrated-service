"use client";
import { Quote } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Testimonial {
	picture: string;
	name: string;
	profession: string;
	thought: string;
}

const testimonials: Testimonial[] = [
	{
		picture: "/testimony/customer1.jpg",
		name: "John Doe",
		profession: "Software Engineer",
		thought: "This service is amazing! Highly recommended.",
	},
	{
		picture: "/testimony/customer2.jpg",
		name: "Jane Smith",
		profession: "Product Manager",
		thought: "The quality exceeded my expectations. Awesome!",
	},
	{
		picture: "/testimony/customer3.jpg",
		name: "Emily Johnson",
		profession: "Graphic Designer",
		thought: "Great experience, I am very satisfied with the results.",
	},
	{
		picture: "/testimony/customer4.jpg",
		name: "Michael Brown",
		profession: "Data Analyst",
		thought: "The team was incredibly supportive throughout.",
	},
	{
		picture: "/testimony/customer5.jpg",
		name: "Sarah Wilson",
		profession: "Digital Marketer",
		thought: "I highly recommend this platform. Excellent results!",
	},
];

const TestimonialSlider: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalSlides = testimonials.length;

	const getVisibleSlides = () => {
		// Get three slides: current, next, and previous
		return [
			testimonials[(currentIndex - 1 + totalSlides) % totalSlides],
			testimonials[currentIndex % totalSlides],
			testimonials[(currentIndex + 1) % totalSlides],
		];
	};

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 5000); // Auto-slide every 5 seconds
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col items-center w-full mx-auto overflow-hidden">
			<h2 className="text-xl font-extrabold uppercase mb-6 text-center text-primary">
				Testimonial
			</h2>
			<h1 className="text-3xl text-zinc-950 font-extrabold mb-8">
				What Our Client Say
			</h1>
			<div className="relative flex justify-center items-center w-full">
				<div className="flex w-full">
					{getVisibleSlides().map((testimonial, index) => (
						<div
							key={index}
							className={`w-full sm:w-1/3 flex-shrink-0 p-4 transition-transform duration-500 ${
								index === 1
									? "opacity-100 scale-100"
									: "opacity-50 scale-90"
							}`}
						>
							<div className="shadow-md bg-zinc-100 relative rounded-lg p-6 text-center">
								<img
									src={testimonial.picture}
									alt={testimonial.name}
									className="w-20 h-20 mx-auto rounded-full border-2 border-gray-300 mb-4"
								/>
								<h3 className="text-lg font-bold">
									{testimonial.name}
								</h3>
								<p className="text-sm text-gray-500">
									{testimonial.profession}
								</p>
								<blockquote className="text-gray-600 mt-4 italic">
									"{testimonial.thought}"
								</blockquote>
								<Quote
									className="absolute top-0 right-0 text-primary"
									size={40}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-center items-center mt-4">
				{testimonials.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
							currentIndex % totalSlides === index
								? "bg-primary"
								: "bg-gray-300"
						}`}
						onClick={() => setCurrentIndex(index)}
					></button>
				))}
			</div>
		</div>
	);
};

export default TestimonialSlider;
