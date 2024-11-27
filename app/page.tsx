import AboutCard from "@/components/AboutCard";
import ContactCard from "@/components/ContactCard";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Slider from "@/components/Slider";
import TestimonialSlider from "@/components/TestimonialSlider";
import WhyUsCard from "@/components/WhyUsCard";

export default function Home() {
	return (
		<>
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
		</>
	);
}
