import { useState } from 'react';
import Input from '../../../base/atoms/Input';

export type WindowSizeInputFormProps = {};

export default function WindowSizeInputForm() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (width <= 0 || height <= 0) {
      setIsError(true);
      setErrorMessage('正の値を入力してください');
      return;
    }
    setIsSubmit(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input label='Width' value='a'></Input>
        </div>
        <button type='submit'>設定</button>
      </form>
      {isError && <p>{errorMessage}</p>}
    </div>
  );
}
