import React from "react";
import { CardInterface } from "../data/cards";
import date from "date-and-time";

interface CardViewProps {
  logo?: string;
  values: CardInterface;
  onCardNameClick?: () => void;
  onExpDateClick?: () => void;
  onCardNumberClick?: () => void;
  onAccNumberClick?: () => void;
  editCard?: (e: React.MouseEvent) => void;
  onClick?: () => void;
}

const CardView: React.FC<CardViewProps> = ({
  logo,
  values,
  onCardNameClick,
  onExpDateClick,
  onCardNumberClick,
  onAccNumberClick,
}) => {
  return (
    <div className="card">
      <div className="card_elements">
        <img className="chip" src="/images/chip.png" alt="chip" />
        <h1 onClick={onCardNumberClick}>{values.cardNumber}</h1>
        <div className="card_details">
          <div className="card_data">
            <p className="exp_date" onClick={onExpDateClick}>
              <span>exp</span>
              {`${date.format(new Date(values.expDate), "MM/YY")}`}
            </p>
            <p className="card_holder_name" onClick={onCardNameClick}>
              {values.cardHolder}
            </p>
            <p className="acc_number" onClick={onAccNumberClick}>
              {values.accNumber}
            </p>
          </div>
          <img
            src={
              logo
                ? logo
                : values.cardNumber.startsWith("4")
                ? "/images/visa.png"
                : "/images/master_card.png"
            }
            alt="master_card"
          />
        </div>
      </div>
    </div>
  );
};

export default CardView;
