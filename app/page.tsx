import AboutCard from "@/components/AboutCard";
import Banner from "@/components/Banner";
import ContactCard from "@/components/ContactCard";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Slider from "@/components/Slider";
import TestimonialSlider from "@/components/TestimonialSlider";
import WhyUsCard from "@/components/WhyUsCard";
import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<Navbar />
			<main>
				{/* <Banner /> */}
				<Slider />
				<Container>
					<AboutCard />
				</Container>
				<Container>
					<ServiceCard />
				</Container>
				<WhyUsCard />
				<TestimonialSlider />
				<ContactCard />
			</main>
		</div>
	);
}
