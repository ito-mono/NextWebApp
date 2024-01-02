'use client';

import { useState } from 'react';
import { NumberInput } from '@/components/base';

export type WindowSizeInputFormProps = {};

export function WindowSizeInputForm() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (width <= 0 || height <= 0) {
      setIsError(true);
      setErrorMessage('正の値を入力してください');
      return;
    }
    setIsSubmit(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <NumberInput label='Width' value='0' onChange={setWidth}></NumberInput>
        </div>
        <button type='submit'>設定</button>
      </form>
      {isError && <p>{errorMessage}</p>}
    </div>
  );
}
