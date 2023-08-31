import React from "react";
import "./Nav.css";
import { data } from "./data";

// const data = ["Wszystkie", "Zabójcy", "Wojownicy", "Magowie", "Strzelcy", "Wspierający", "Obrońcy"]

interface Props {
	onSelectCategory(el: string): string;
}

export const Navigation = ({ onSelectCategory }: Props): JSX.Element => {
	return (
		<div className='Nav__container'>
			<label className='Champions__list'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='Search__icon'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>
				Szukaj
			</label>
			<ul className='Nav__Bar'>
				{data.map((el) => (
					<li onClick={() => onSelectCategory(el.key)} key={el.key}>
						{el.name}
					</li>
				))}
			</ul>
			<div className='Level__Dif'>Wszystkie poziomy trudości</div>
		</div>
	);
};


