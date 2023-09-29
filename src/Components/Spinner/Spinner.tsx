import React from "react";
import "./Spinner.css";

interface SpinnerProps {
	className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ className }) => {
	return <div className={className}></div>;
};
