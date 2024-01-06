import { Dispatch, SetStateAction } from 'react';

import { FlexDirections, Justifies } from '@/components/Utility/TailwindUtility';
import {
  Container,
  FlexItem,
  Label,
  NumberInput,
  NumberInputProps,
  TextInput,
  TextInputProps,
} from '@/components/base';

export type FormItemProps = {
  label: React.ReactNode;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  inputProps?: TextInputProps | NumberInputProps;
  direction?: keyof typeof FlexDirections;
  justify?: keyof typeof Justifies;
};

export function FormItem({ label, direction = 'row', justify = 'start', ...props }: FormItemProps) {
  let input;

  // 値の型に基づいて異なるインプットを表示
  if (typeof props.value === 'string') {
    input = <TextInput {...props}></TextInput>;
  } else if (typeof props.value === 'number') {
    input = <NumberInput {...props}></NumberInput>;
  }

  return (
    <Container isFlex flexDirection={direction} justify={justify}>
      <FlexItem>
        <Label>{label}</Label>
      </FlexItem>
      <FlexItem>{input}</FlexItem>
    </Container>
  );
}
