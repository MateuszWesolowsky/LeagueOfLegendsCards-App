import React from "react";
import "./SingleChampionHeader.css";
export const SingleChampionHeader = () => {
	return (
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
					League of Legends to drużynowa gra strategiczna, w której dwie drużyny
					składające się z pięciu potężnych bohaterów walczą ze sobą, by
					zniszczyć bazę przeciwnika. Wybieraj spośród ponad 140 bohaterów, by
					przeprowadzać epickie zagrania, zabijać wrogów i niszczyć wieże,
					zmierzając po zwycięstwo.
				</span>
			</div>
		</div>
	);
};
