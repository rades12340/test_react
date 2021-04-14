import React, { useRef, useState } from "react";
import cards, { CardInterface } from "../data/cards";
import CardView from "../Fragments/CardView";
import Form from "../Fragments/Form";
import { useHistory, useParams } from "react-router-dom";
import date from "date-and-time";

interface AddCardProps {
  data: CardInterface;
}

const AddCard: React.FC<AddCardProps> = ({ data }) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  let cardNameClick = useRef<HTMLInputElement>(null);
  let expDateClick = useRef<HTMLInputElement>(null);
  let cardNumberClick = useRef<HTMLInputElement>(null);
  let accNumberClick = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<CardInterface>(data);

  const [logo, setLogo] = useState<string>("/images/master_card.png");
  const onCardNameClick = () => {
    cardNameClick.current!.focus();
  };
  const onExpDateClick = () => {
    expDateClick.current!.focus();
  };
  const onCardNumberClick = () => {
    cardNumberClick.current!.focus();
  };
  const onAccNumberClick = () => {
    accNumberClick.current!.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cards.searchCard(id)) {
      cards.updateCard(id, values);
    } else {
      cards.addCard(values);
    }

    setValues({
      cardNumber: "",
      cardHolder: "",
      accNumber: "",
      expDate: date.format(new Date(Date.now()), "YYYY-MM-DD"),
    });

    history.push("/cards");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "cardNumber") {
      e.target.value.startsWith("4")
        ? setLogo("/images/visa.png")
        : setLogo("/images/master_card.png");
    }
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Form
        cardNameClick={cardNameClick}
        expDateClick={expDateClick}
        cardNumberClick={cardNumberClick}
        accNumberClick={accNumberClick}
        setValues={setValues}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
      />
      <CardView
        logo={logo}
        values={values}
        onCardNameClick={onCardNameClick}
        onExpDateClick={onExpDateClick}
        onCardNumberClick={onCardNumberClick}
        onAccNumberClick={onAccNumberClick}
      />
    </div>
  );
};

export default AddCard;
