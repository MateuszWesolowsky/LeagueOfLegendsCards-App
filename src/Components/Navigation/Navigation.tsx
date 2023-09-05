import React from "react";
import "./Nav.css";
import { data } from "./data";
import { useScreenDetector } from "../Hooks/useScreenDetector";

interface Props {
	onSelectCategory(el: string): string;
	selectedCategory: string;
	query: string;
	setQuery(query: string): void;
	level: string;
	setLevel(query: string): void;
}

export const Navigation = ({
	onSelectCategory,
	selectedCategory,
	query,
	setQuery,
	level,
	setLevel,
}: Props): JSX.Element => {
	const { isDesktop } = useScreenDetector();

	return (
		<div className='nav-container'>
			{isDesktop &&<svg
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
				</svg>}
				<input
					type='text'
					placeholder='Szukaj...'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>

			<ul className='nav-champions-list'>
				{isDesktop ? (
					data.map((el) => (
						<li onClick={() => onSelectCategory(el.key)} key={el.key}>
							{el.name}
						</li>
					))
				) : (
					<select
						value={selectedCategory}
						onChange={(e) => onSelectCategory(e.target.value)}>
						{data.map((el) => (
							<option key={el.key} value={el.key}>{el.name}</option>
						))}
					</select>
				)}
			</ul>
			<div className='nav-champions-level'>
				<select value={level} onChange={(e) => setLevel(e.target.value)}>
					<option value='Wszystkie poziomy trudości'>
					{isDesktop ? "Wszystkie poziomy trudności" : "Poziom trudności"}
					</option>
					<option value='Łatwy'>Łatwy</option>
					<option value='Średni'>Średni</option>
					<option value='Trudny'>Trudny</option>
				</select>
			</div>
		</div>
	);
};
