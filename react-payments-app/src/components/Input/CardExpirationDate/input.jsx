const CardExpirationDateInput = () => {
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input className="input-basic w-50" type="text" placeholder="MM" />
        /<input className="input-basic w-50" type="text" placeholder="YY" />
      </div>
    </div>
  );
};

export default CardExpirationDateInput;