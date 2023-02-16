const CompanySelectionModal = () => {
  return (
    <div>
      <div class="app">
        <h2 class="page-title">{"<"} 카드 추가</h2>
        <div class="card-box">
          <div class="small-card">
            <div class="card-top">
              <span class="card-text">클린카드</span>
            </div>
            <div class="card-middle">
              <div class="small-card__chip"></div>
            </div>
            <div class="card-bottom">
              <div class="card-bottom__number">
                <span class="card-text">1111 - 2222 - oooo - oooo</span>
              </div>
              <div class="card-bottom__info">
                <span class="card-text">NAME</span>
                <span class="card-text">MM / YY</span>
              </div>
            </div>
          </div>
        </div>
        <div class="input-container">
          <span class="input-title">카드 번호</span>
          <div class="input-box">
            <input class="input-basic" type="text" value="1111" />
            <input class="input-basic" type="text" value="2222" />
            <input class="input-basic" type="password" value="1111" />
            <input class="input-basic" type="password" value="1111" />
          </div>
        </div>
        <div class="input-container">
          <span class="input-title">만료일</span>
          <div class="input-box w-50">
            <input class="input-basic" type="text" placeholder="MM" />
            <input class="input-basic" type="text" placeholder="YY" />
          </div>
        </div>
        <div class="input-container">
          <span class="input-title">카드 소유자 이름(선택)</span>
          <input
            type="text"
            class="input-basic"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </div>
        <div class="input-container">
          <span class="input-title">보안코드(CVC/CVV)</span>
          <input class="input-basic w-25" type="password" />
        </div>
        <div class="input-container">
          <span class="input-title">카드 비밀번호</span>
          <input class="input-basic w-15" type="password" />
          <input class="input-basic w-15" type="password" />
          <input class="input-basic w-15" type="password" />
          <input class="input-basic w-15" type="password" />
        </div>
        <div class="button-box">
          <span class="button-text">다음</span>
        </div>
      </div>
      <div class="modal-dimmed">
        <div class="modal">
          <div class="flex-center">
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
          </div>
          <div class="flex-center">
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySelectionModal;
