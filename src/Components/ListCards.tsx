import React from "react";
import { Link, useHistory } from "react-router-dom";
import cards from "../data/cards";
import CardView from "../Fragments/CardView";

interface ListCardsProps {}

const ListCards: React.FC<ListCardsProps> = ({}) => {
  return (
    <div className="list_cards">
      <div className="list_desc">
        <h1>Landing Page</h1>
        <Link to="/cards/add">
          <button>Add Card</button>
        </Link>
      </div>

      {cards.listCards().map((card) => (
        <Link to={`/cards/${card.id}/edit`} key={card.id}>
          <CardView values={card} key={card.id} />
        </Link>
      ))}
    </div>
  );
};

export default ListCards;
