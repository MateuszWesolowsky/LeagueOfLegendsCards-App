import { Spinner } from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import "./ChamapionsList.css";

export const ChampionsList = ({ championsInfo, error, isLoading, query }) => {
	if (error) {
		return <p>{error}</p>;
	}
	if (isLoading) {
		return <Spinner className={"loader"} />;
	}

	return (
		<div className='Champion__cards__container'>
			<ul className='Cards'>
				{championsInfo.length === 0 ? (
					<p className='notFound'>Champion {query} not found...</p>
				) : (
					championsInfo.map((card) => {
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
					})
				)}
			</ul>
		</div>
	);
};
