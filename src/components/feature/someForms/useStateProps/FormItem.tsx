import { Dispatch, SetStateAction } from 'react';

import { NumberInputProps, TextInputProps } from '.';

import { FlexDirections, Justifies } from '@/components/Utility/TailwindUtility';
import { Container, FlexItem, Label } from '@/components/base';

export type FormItemProps = {
  label: React.ReactNode;
  // value: any;
  // setValue: Dispatch<SetStateAction<any>>;
  inputProps: TextInputProps | NumberInputProps;
  direction?: keyof typeof FlexDirections;
  justify?: keyof typeof Justifies;
};

export function FormItem({
  label,
  inputProps,
  direction = 'row',
  justify = 'start',
  ...props
}: FormItemProps) {
  let input;

  // 値の型に基づいて異なるインプットを表示
  // if (typeof inputProps.value === 'string') {
  //   input = <TextInput {...(inputProps as TextInputProps)}></TextInput>;
  // } else if (typeof inputProps.value === 'number') {
  //   input = <NumberInput {...(inputProps as NumberInputProps)}></NumberInput>;
  // }

  return (
    <Container isFlex flexDirection={direction} justify={justify}>
      <FlexItem>
        <Label>{label}</Label>
      </FlexItem>
      <FlexItem>{input}</FlexItem>
    </Container>
  );
}
