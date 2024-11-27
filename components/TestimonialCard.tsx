import { Testimonial } from "@/utils/types";

import Image from "next/image";

interface TestimonialProps {
	testimonial: Testimonial;
	isActive: boolean;
}

const TestimonialCard = ({ testimonial, isActive }: TestimonialProps) => {
	return (
		<div
			className={`testimonial ${
				isActive ? "bg-white" : "bg-gray-100"
			} p-6 rounded-lg shadow-md`}
		>
			<Image
				src={testimonial.image}
				alt={testimonial.name}
				width={100}
				height={100}
				className="rounded-full mx-auto mb-4"
			/>
			<h3 className="text-lg font-bold text-center">
				{testimonial.name}
			</h3>
			<p className="text-sm text-gray-500 text-center">
				{testimonial.profession}
			</p>
			<p className="text-gray-700 mt-4">{testimonial.testimonial}</p>
		</div>
	);
};

export default TestimonialCard;
