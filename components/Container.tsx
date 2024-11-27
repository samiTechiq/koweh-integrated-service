import React from "react";

interface Props {
	children: React.ReactNode;
	className?: string;
}
const Container = ({ children, className }: Props) => {
	return (
		<div className={`mx-auto px-6 md:px-20 ${className}`}>{children}</div>
	);
};

export default Container;
