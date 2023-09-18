import React from "react";
import { Spinner } from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import "../ChamapionsList/ChamapionsList.css";

interface ChampionInfo {
  id: string;
  name: string;
}

interface ChampionsListProps {
  championsInfo: ChampionInfo[];
  error: string | null;
  isLoading: boolean;
  query: string;
}

export const ChampionsList: React.FC<ChampionsListProps> = ({
  championsInfo,
  error,
  isLoading,
  query,
}) => {
  if (error) {
    return <p>{error}</p>;
  }
  if (isLoading) {
    return <Spinner className={"loader"} />;
  }

  return (
    <main className="champions-list-container">
      <ul className="champions-cards-list">
        {championsInfo.length === 0 ? (
          <p className="not-found">Champion {query} not found...</p>
        ) : (
          championsInfo.map((card) => {
            return (
              <li key={card.id} className="one-card-container">
                <div className="card-img-container">
                  <Link to={`/${card.id}`}>
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${card.id}_0.jpg`}
                      alt={`Champion - ${card.name}`}
                    />
                  </Link>
                  <span>{card.name}</span>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </main>
  );
};
