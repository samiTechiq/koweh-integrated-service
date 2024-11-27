import Image from "next/image";
import React from "react";

const AboutCard = () => {
	return (
		<div className="mx-auto my-20">
			<div className="grid grid-cols-12 gap-8 md:gap-4">
				<div className="col-span-12 md:col-span-6">
					<Image
						src={"/common/about-us.jpg"}
						priority
						height={600}
						width={500}
						alt="about-us"
						className="w-full rounded-md"
					/>
				</div>

				<div className="col-span-12 md:col-span-6">
					<div className="container mx-auto">
						<h2 className="text-xl font-extrabold uppercase mb-6 text-primary">
							About Us
						</h2>
						<h1 className="text-3xl text-zinc-950 font-extrabold mb-8">
							Koweh Integreted Service LTD
						</h1>
						<p className="text-lg text-zinc-700 mb-8">
							we are dynamic company dedicated to empowering
							individuals and businesses alike. We offer a wide
							range of services to help you achieve your goals.
							From crafting stunning brand identities to
							developing robust web applications, we've got you
							covered.
						</p>
						<p className="text-lg text-zinc-700 mb-8">
							Our Services include and not limited to Digital
							Marketing, Web, Cloud Computing, Design Services,
							Training & Education
						</p>

						<p className="text-lg text-zinc-700 mt-8">
							Whether you're an aspiring entrepreneur or an
							established business, we're here to help you
							succeed. Let's work together to bring your vision to
							life.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutCard;
