import React from "react";
import Container from "./Container";
import { BadgeCheck } from "lucide-react";

const ContactCard = () => {
	return (
		<div className="mx-auto my-20 bg-zinc-100 md:h-[500px]">
			<Container>
				<div className="grid grid-cols-12 gap-8 md:gap-4">
					<div className="col-span-12 md:col-span-7 h-full">
						<h2 className="text-xl uppercase font-extrabold my-6 text-primary">
							Contact us
						</h2>
						<h1 className="text-3xl text-zinc-950 font-extrabold mb-6">
							Request A Free Quote
						</h1>
						<ul className="space-y-2">
							<h1 className="text-zinc-950 font-semibold text-lg">
								Simple and Direct:
							</h1>
							<li className="flex items-center gap-x-4">
								<BadgeCheck className="text-primary" />
								<p className="text-zinc-800 font-medium text-lg">
									Need a price estimate? Request a free quote
									today.
								</p>
							</li>
							<h1 className="text-zinc-950 font-semibold text-lg">
								Highlighting the Benefit:
							</h1>
							<li className="flex items-center gap-x-4">
								<BadgeCheck className="text-primary" />
								<p className="text-zinc-800 font-medium text-lg">
									Get personalized pricing without any
									obligation. Request a free quote now.
								</p>
							</li>
							<h1 className="text-zinc-950 font-semibold text-lg">
								Creating Urgency:
							</h1>
							<li className="flex items-center gap-x-4">
								<BadgeCheck className="text-primary" />
								<p className="text-zinc-800 font-medium text-lg">
									Don't miss out on our special offers!
									Request a free quote to learn more.
								</p>
							</li>
							<h1 className="text-zinc-950 font-semibold text-lg">
								Focusing on Customer Service:
							</h1>
							<li className="flex items-center gap-x-4">
								<BadgeCheck className="text-primary" />
								<p className="text-zinc-800 font-medium text-lg">
									Our team is ready to assist you. Request a
									free quote to start your project.
								</p>
							</li>
							<h1 className="text-zinc-950 font-semibold text-lg">
								For a Tech-Related Service:
							</h1>
							<li className="flex items-center gap-x-4">
								<BadgeCheck className="text-primary" />
								<p className="text-zinc-800 font-medium text-lg">
									Curious about the cost of your next project?
									Request a free quote.
								</p>
							</li>
						</ul>
					</div>
					<div className="col-span-12 md:col-span-5 h-[500px] w-full bg-primary">
						<div className="p-6 md:p-16 space-y-6">
							<input
								type="text"
								className="bg-white px-4 py-3 w-full outline-none rounded-md text-gray-400"
								placeholder="Your Name"
							/>
							<input
								type="text"
								className="bg-white px-4 py-3 w-full outline-none rounded-md text-gray-400"
								placeholder="Your Email"
							/>
							<select
								className="custom-select-control px-4 border-0 outline-none text-gray-400 rounded-md"
								style={{ height: "49px" }}
							>
								<option value="">select service</option>
								<option value="1">Banner</option>
								<option value="1">Brand Identity</option>
								<option value="1">Brocure</option>
								<option value="1">Catalogue</option>
								<option value="1">Certificate</option>
								<option value="1">Complementary Card</option>
								<option value="1">Flyer</option>
								<option value="1">Id card</option>
								<option value="1">Logo</option>
								<option value="1">Wedding card</option>
							</select>
							<textarea
								className="w-full outline-none px-4 py-4 rounded-md text-gray-400"
								rows={3}
								placeholder="Your Message"
							></textarea>
							<button className="py-4 bg-dark text-white w-full uppercase font-semibold text-lg rounded-md">
								send message
							</button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ContactCard;
