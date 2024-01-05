'use client';

import { useState } from 'react';

import { Container, FlexItem, Label, NumberInput } from '@/components/base';

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
    <Container isFlex flexDirection='col'>
      <Container isFlex flexDirection='row'>
        <FlexItem>
          <Label>幅</Label>
        </FlexItem>
        <FlexItem>
          <NumberInput value={width} setValue={setWidth}></NumberInput>
        </FlexItem>
      </Container>
      <Container isFlex flexDirection='row'>
        <FlexItem>
          <Label>高さ</Label>
        </FlexItem>
        <FlexItem>
          <NumberInput value={height} setValue={setHeight}></NumberInput>
        </FlexItem>
      </Container>
    </Container>
  );
}
