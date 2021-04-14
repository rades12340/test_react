import date from "date-and-time";
import React from "react";
import { CardInterface } from "../data/cards";

interface FormProps {
  values: CardInterface;
  setValues(values: CardInterface): void;
  cardNameClick: React.RefObject<HTMLElement>;
  expDateClick: React.RefObject<HTMLElement>;
  cardNumberClick: React.RefObject<HTMLElement>;
  accNumberClick: React.RefObject<HTMLElement>;
  handleSubmit: (e: React.SyntheticEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = ({
  cardNameClick,
  expDateClick,
  cardNumberClick,
  accNumberClick,
  handleSubmit,
  handleChange,
  values,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardNumber">Card Number</label>{" "}
        <input
          name="cardNumber"
          type="text"
          maxLength={16}
          value={values.cardNumber}
          onChange={handleChange}
          ref={cardNumberClick as React.RefObject<HTMLInputElement>}
        />
      </div>

      <div>
        <label htmlFor="cardHolder">Card Holder</label>
        <input
          type="text"
          name="cardHolder"
          value={values.cardHolder}
          onChange={handleChange}
          ref={cardNameClick as React.RefObject<HTMLInputElement>}
        />
      </div>
      <div>
        <label htmlFor="accNumber">Account Number</label>
        <input
          type="text"
          name="accNumber"
          value={values.accNumber}
          onChange={handleChange}
          ref={accNumberClick as React.RefObject<HTMLInputElement>}
        />
      </div>
      <div>
        <label htmlFor="expDate">Expires on</label>
        <input
          type="date"
          name="expDate"
          value={
            values.expDate
              ? date.format(new Date(values.expDate), "YYYY-MM-DD")
              : date.format(new Date(Date.now()), "YYYY-MM-DD")
          }
          onChange={handleChange}
          ref={expDateClick as React.RefObject<HTMLInputElement>}
        />
      </div>

      <button type="submit">Save</button>
    </form>
  );
};
export default Form;
