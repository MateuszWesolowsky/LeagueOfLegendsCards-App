import React from "react";
import "./Nav.css";
import { data } from "./data";

interface Props {
	onSelectCategory(el: string): string;
	query: string;
	setQuery(query: string): void;
	level: string;
	setLevel(query: string): void;
}

export const Navigation = ({
	onSelectCategory,
	query,
	setQuery,
	level,
	setLevel,
}: Props): JSX.Element => {
	return (
		<div className='nav__container'>
			<label className='champions__list'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='search__icon'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>
				<input
					type='text'
					placeholder='Szukaj...'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</label>
			<ul className='nav__bar'>
				{data.map((el) => (
					<li onClick={() => onSelectCategory(el.key)} key={el.key}>
						{el.name}
					</li>
				))}
			</ul>
			<div className='level__dif'>
				<select value={level} onChange={(e) => setLevel(e.target.value)}>
					
					<option value='Wszystkie poziomy trudości'>Wszystkie poziomy trudości</option>
					<option value='Łatwy'>Łatwy</option>
					<option value='Średni'>Średni</option>
					<option value='Trudny'>Trudny</option>
				</select>
			</div>
		</div>
	);
};
