import React from "react";
import Image from "next/image";
import Container from "./Container";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

const WhyUsCard = () => {
	return (
		<div className="mx-auto my-20 bg-zinc-100 md:h-[600px]">
			<Container>
				<div className="grid grid-cols-12 gap-8 md:gap-4">
					<div className="col-span-12 md:col-span-6">
						<Image
							src={"/common/why-us.jpg"}
							priority
							height={600}
							width={500}
							alt="why-us"
							className="w-full rounded-none"
						/>
					</div>
					<div className="col-span-12 md:col-span-6">
						<h2 className="text-xl uppercase font-extrabold my-6 text-primary">
							Why Choose Us
						</h2>
						<h1 className="text-3xl text-zinc-950 font-extrabold mb-8">
							Faster, Safe and Trusted IT Services
						</h1>
						<p className="text-lg text-zinc-500 mb-8">
							Experience IT services that prioritize speed,
							security, and reliability. Our team of experts
							delivers cutting-edge solutions tailored to your
							unique needs. From lightning-fast network speeds to
							robust cybersecurity measures, we ensure your
							technology operates seamlessly and securely. Trust
							us to protect your digital assets and optimize your
							business operations.
						</p>
						<ul className="space-y-3 my-6">
							<li className="flex items-center gap-x-4">
								<CircleCheck className="text-primary" />
								<p className="font-medium text-lg text-zinc-950">
									Best In Industry
								</p>
							</li>
							<li className="flex items-center gap-x-4">
								<CircleCheck className="text-primary" />
								<p className="font-medium text-lg text-zinc-950">
									Emergency Services
								</p>
							</li>
							<li className="flex items-center gap-x-4">
								<CircleCheck className="text-primary" />
								<p className="font-medium text-lg text-zinc-950">
									24/7 Customer Support
								</p>
							</li>
						</ul>
						<div className="my-12">
							<Link
								href={"/"}
								className="bg-primary text-white px-5 py-3 font-semibold hover:bg-deepPrimary rounded-md transition-colors"
							>
								LEARN MORE
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default WhyUsCard;
