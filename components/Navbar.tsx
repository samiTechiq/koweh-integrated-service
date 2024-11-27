import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	const links = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Service", href: "/service" },
	];
	return (
		<header className="flex items-center sticky top-0 z-50 justify-between px-6 md:px-20 h-20 bg-white border-b border-gray-50">
			<Link
				href={"/"}
				className="text-2xl block md:hidden md:text-3xl text-zinc-950 font-bold hover:text-zinc-800 transition-colors"
			>
				Koweh Integrated
			</Link>
			<Link
				href={"/"}
				className="text-2xl hidden md:block md:text-3xl text-zinc-950 font-bold hover:text-zinc-800 transition-colors"
			>
				Koweh Integrated Service
			</Link>
			<div className="block md:hidden">
				<Menu />
			</div>

			<div className="hidden md:block">
				<div className="flex items-center justify-between gap-x-10">
					<ul className="flex items-center justify-between gap-x-6">
						{links.map((link) => (
							<li key={link.href}>
								<Link
									className="text-lg font-semibold text-zinc-500 hover:text-zinc-800 transition-colors"
									href={link.href}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<Link
						href={"/"}
						className="bg-primary text-white px-4 py-2 font-semibold hover:bg-deepPrimary rounded-md transition-colors"
					>
						Get A Quote
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
