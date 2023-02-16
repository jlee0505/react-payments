const CardOwnerInput = () => {
  return (
    <div className="input-container">
      <div className="input-title-box">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span className="input-title">0 / 30</span>
      </div>
      <input
        type="text"
        className="input-basic input-bigger-text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </div>
  );
};

export default CardOwnerInput;