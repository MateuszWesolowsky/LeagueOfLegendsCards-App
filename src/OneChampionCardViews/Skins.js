import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Skins.css";

export const Skins = ({ singleChampionInfo }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timeRef = useRef(null);

	const goToNext = useCallback(() => {
		const isLastSlide = currentIndex === singleChampionInfo.skins.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}, [currentIndex, singleChampionInfo.skins]);

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	useEffect(() => {
		if (timeRef.current) {
			clearTimeout(timeRef.current);
		}
		timeRef.current = setTimeout(() => {
			goToNext();
		}, 3000);

		return () => clearTimeout(timeRef.current);
	}, [goToNext]);

	const goToPrev = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide
			? singleChampionInfo.skins.length - 1
			: currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className='Skins__container'>
			<h2>Dostępne skórki</h2>
			<div className='Slider__container'>
				<div className='Left__arrow__slide' onClick={goToPrev}>
					⇦
				</div>
				<div className='Right__arrow__slide' onClick={goToNext}>
					⇨
				</div>
				<div
					className='Skins__slider'
					style={{
						backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${singleChampionInfo.id}_${singleChampionInfo.skins[currentIndex].num}.jpg)`,
					}}><span className="Skin__name">{singleChampionInfo.skins[currentIndex].name}</span></div>
				<div className='Slide__thumb'>
					{singleChampionInfo.skins.map((slide, slideIndex) => {
						return (
							<div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
								<img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${singleChampionInfo.id}_${slide.num}.jpg`} alt="" />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
