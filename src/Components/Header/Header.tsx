import React, { useRef } from "react";
import "./Header.css";

export const Header: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null);

	const scrollToSection = () => {
		if (sectionRef.current) {
			sectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header>
			<div className='header-container'>
				<video
					src='https://www.leagueoflegends.com/static/what-is-league-of-legends-4e3d9714805dc82373c3a069ed9ec103.mp4'
					muted
					loop
					playsInline
					autoPlay></video>

				<div className='game-description'>
					<h2>CZYM JEST LEAGUE OF LEGENDS?</h2>
					<span>
						League of Legends to drużynowa gra strategiczna, w której dwie
						drużyny składające się z pięciu potężnych bohaterów walczą ze sobą,
						by zniszczyć bazę przeciwnika. Wybieraj spośród ponad 140 bohaterów,
						by przeprowadzać epickie zagrania, zabijać wrogów i niszczyć wieże,
						zmierzając po zwycięstwo.
					</span>
				</div>
				<div className='scroll-button'>
					<button onClick={scrollToSection}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Poznaj bohaterów
					</button>
				</div>
			</div>
			<div className='title' ref={sectionRef}>
				<h1 data-testid="header-title">
					Wybierz swojego <span>Bohatera</span>
				</h1>
				<p>
					Mając do wyboru ponad 140 bohaterów, z pewnością znajdziesz kogoś dla
					siebie. Do perfekcji opanuj któregoś z nich — albo wszystkich.
				</p>
			</div>
		</header>
	);
};
