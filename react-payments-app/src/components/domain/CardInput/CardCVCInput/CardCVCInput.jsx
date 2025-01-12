import { useState } from 'react';

import Input from '../../../common/Input/Input';
import InputBox from '../../../common/Input/InputBox';
import { useCard } from '../../../../store/CardContext';
import { MAX_INPUT_LENGTH } from '../../../../constants/numbers';
import { CHANGE_CARD } from '../../../../constants/action';

const CardCVCInput = () => {
  const { cardInfo, changeCardInfo } = useCard();
  const [cardCVC, setCardCVC] = useState('');

  const isValidCVC = (value) => {
    if (Number.isNaN(+value)) {
      changeCardInfo(CHANGE_CARD.ERROR, '숫자만 입력주세요.');
      setCardCVC('');
      return;
    }
    changeCardInfo(CHANGE_CARD.ERROR, null);

    return true;
  };

  const handleCVCChange = (e) => {
    const { value } = e.target;
    setCardCVC(value);
    if (isValidCVC(value)) changeCardInfo(CHANGE_CARD.CVC, value);
  };

  return (
    <InputBox name='보안코드(CVC/CVV)'>
      <Input
        name='보안코드(CVC/CVV)'
        className='input-basic w-25'
        type='password'
        onChange={handleCVCChange}
        placeholder='***'
        maxLength={MAX_INPUT_LENGTH.CVC}
        required={true}
        value={cardCVC}
      />
    </InputBox>
  );
};

export default CardCVCInput;
