import React, { useRef } from "react";
import "./Header.css";

export const Header = () => {
	const sectionRef = useRef(null);

	const scrollToSection = () => {
		if (sectionRef.current) {
		  sectionRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	  };


	return (
		<header>
			<div className='Header__video__container'>
				<video
					className='Header__video'
					src='https://www.leagueoflegends.com/static/what-is-league-of-legends-4e3d9714805dc82373c3a069ed9ec103.mp4'
					muted
					loop
					playsInline
					autoPlay></video>

				<div className='Game__description'>
					<h2>CZYM JEST LEAGUE OF LEGENDS?</h2>
					<span className='Game__description__span'>
						League of Legends to drużynowa gra strategiczna, w której dwie
						drużyny składające się z pięciu potężnych bohaterów walczą ze sobą,
						by zniszczyć bazę przeciwnika. Wybieraj spośród ponad 140 bohaterów,
						by przeprowadzać epickie zagrania, zabijać wrogów i niszczyć wieże,
						zmierzając po zwycięstwo.
					</span>
				</div>
				<div className="Animated__button">
				<button onClick={scrollToSection}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Poznaj bohaterów
					</button>
				</div>
			</div>
			<div className='Header__title' ref={sectionRef}>
				<h1>
					Wybierz swojego <span>Bohatera</span>
				</h1>
				<p className='Title__Description'>
					Mając do wyboru ponad 140 bohaterów, z pewnością znajdziesz kogoś dla
					siebie. Do perfekcji opanuj któregoś z nich — albo wszystkich.
				</p>
			</div>
		</header>
	);
};
