import React, { useCallback, useEffect, useRef, useState } from "react";
import { useScreenDetector } from "../../Hooks/useScreenDetector";
import "./Skins.css";

export const Skins = ({ singleChampionInfo }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const { isDesktop } = useScreenDetector();

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
		<div className='skins-container'>
			<h2>Dostępne skórki</h2>
			<div className='skins-slider-container'>
				<div className='left-arrow' onClick={goToPrev}>
					⇦
				</div>
				<div className='right-arrow' onClick={goToNext}>
					⇨
				</div>
				<div
					className='skins-slider'
					style={{
						backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${singleChampionInfo.id}_${singleChampionInfo.skins[currentIndex].num}.jpg)`,
					}}>
					<span className='skin-name'>
						{singleChampionInfo.skins[currentIndex].name === "default"
							? singleChampionInfo.name
							: singleChampionInfo.skins[currentIndex].name}
					</span>
				</div>
			</div>
			{isDesktop && (
				<div className='slider-thumbs'>
					{singleChampionInfo.skins.map((slide, slideIndex) => {
						return (
							<div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
								<img className={`${slideIndex === currentIndex ? "shadow-img" : ""}`}
									src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${singleChampionInfo.id}_${slide.num}.jpg`}
									alt=''
								/>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
