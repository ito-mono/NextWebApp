'use client';

import { useState } from 'react';

import { WindowSizeInputForm, WindowSizeInputFormProps } from '.';

import { Container, FlexItem } from '@/components/base';

export type HeaderProps = {};

export function Header() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [inch, setInch] = useState(0);

  const formProps: WindowSizeInputFormProps = {
    width: width,
    setWidth: setWidth,
    height: height,
    setHeight: setHeight,
    inch: inch,
    setInch: setInch,
  };

  return (
    <header>
      <Container isFlex width='full'>
        <FlexItem>
          <h1>視力検査</h1>
        </FlexItem>

        <FlexItem>
          <WindowSizeInputForm {...formProps}></WindowSizeInputForm>
        </FlexItem>
      </Container>
    </header>
  );
}
