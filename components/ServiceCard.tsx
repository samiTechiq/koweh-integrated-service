import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};
interface Service {
	src: string;
	caption: string;
}

const ServiceCard = (props: Props) => {
	const services: Service[] = [
		{ src: "/services/banner.jpg", caption: "Banner Design" },
		{ src: "/services/brand-identity.jpg", caption: "Brand Identity" },
		{ src: "/services/brocure.jpg", caption: "Brocure" },
		{ src: "/services/catalogue.jpg", caption: "Catalogue Design" },
		{ src: "/services/certificate.jpg", caption: "Certificate Design" },
		{
			src: "/services/complementary-card.jpg",
			caption: "Complementary Card",
		},
		{ src: "/services/flyer-design.jpg", caption: "Flyer Design" },
		{ src: "/services/id-card.jpg", caption: "ID Card Design" },
		{ src: "/services/logo-design.jpg", caption: "Logo Design" },
		{ src: "/services/tshirt-design.jpg", caption: "T-shirt design" },
		{
			src: "/services/wedding-invitation.jpg",
			caption: "Wedding Invitation",
		},
		{ src: "/services/wedding-jotter.jpg", caption: "Wedding Jotter" },
	];
	return (
		<div className="w-full mb-5">
			<h2 className="text-xl font-extrabold uppercase mb-6 text-center text-primary">
				Our Services
			</h2>
			<div className="grid md:grid-cols-4 gap-x-4 gap-y-6 grid-cols-1">
				{services.map((service) => (
					<div key={service.src} className="bg-zinc-100 rounded-md">
						<img
							src={service.src}
							className="h-[350px] w-full rounded-t-md"
							alt={service.caption}
						/>
						<div className="p-2">
							<h4 className="text-zinc-500 my-4 text-lg font-medium">
								{service.caption}
							</h4>
							<Link
								href={"/"}
								className="bg-primary text-white px-4 py-2 font-semibold hover:bg-deepPrimary rounded-md transition-colors"
							>
								Get A Quote
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ServiceCard;
