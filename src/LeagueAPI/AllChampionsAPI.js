import { Spinner } from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import "../ChampionCards/ChampionCards.css";

export const AllChampionsAPI = ({ championsInfo, error, isLoading }) => {
	if (error) {
		return <p>{error}</p>;
	}
	if (isLoading) {
		return <Spinner className={"loader"} />;
	}

	return (
		<div className='Champion__cards__container'>
			<ul className='Cards'>
				{championsInfo.map((card) => {
					return (
						<li key={card.id} className='One__card'>
							<div className='Champ__img__container'>
								<div className='OneChamp__card'>
									<Link to={`/${card.id}`}>
										<img
											src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${card.id}_0.jpg`}
											alt={`Champion - ${card.name}`}
										/>
										<span>{card.name}</span>
									</Link>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
