import { useState } from "react";

import CardNumbersInput from "./CardNumbers/input";
import CardExpirationDateInput from "./CardExpirationDate/input";
import CardOwnerInput from "./CardOwner/input";
import CardCVCInput from "./CardSecurityCode/input";
import CardPasswordInput from "./CardPassword/input";

const CardForm = ({ handleSubmit }) => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [expirationDate, setExpirationDate] = useState(["", ""]);
  const [error, setError] = useState("");

  const handleCardNumbersChange = (cardNumbers, error) => {
    setCardNumbers(cardNumbers);
    setError(error);
  };

  const handleExpirationDateChange = (expirationDate, error) => {
    setExpirationDate(expirationDate);
    setError(error);
  };

  return (
    <>
      <div id="card-form" className="w-100">
        <form onSubmit={handleSubmit}>
          <CardNumbersInput onChange={handleCardNumbersChange} />
          <CardExpirationDateInput onChange={handleExpirationDateChange} />
          <CardOwnerInput />
          <CardCVCInput />
          <CardPasswordInput />
        </form>
        <div id="card-form-label" style={{ color: "red" }}>
          {error}
        </div>
      </div>
    </>
  );
};

export default CardForm;
