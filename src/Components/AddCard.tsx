import React from "react";
import AddEditLayout from "./AddEditLayout";
import date from "date-and-time";

interface AddCardProps {}
const AddCard: React.FC<AddCardProps> = ({}) => {
  const data = {
    cardNumber: "",
    cardHolder: "",
    accNumber: "",
    expDate: date.format(new Date(Date.now()), "YYYY-MM-DD"),
  };
  return (
    <>
      <h1>Add Card</h1>
      <AddEditLayout data={data} />
    </>
  );
};

export default AddCard;
