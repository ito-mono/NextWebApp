import { Context } from 'react';

import { FormItem, FormItemProps } from '.';

import { FlexDirections } from '@/components/Utility/TailwindUtility';
import { Container } from '@/components/base';

export type FormProps = {
  context?: Context<any>;
  direction?: keyof typeof FlexDirections;
  formItemsProps?: FormItemProps[];
};

export function Form({ context, direction = 'col', formItemsProps, ...props }: FormProps) {
  console.log(context);

  // MEMO: keyにindexを指定するのはアンチパターンだが、フォームの項目自体は静的なので問題はない
  const itemNodes = formItemsProps?.map((itemProps, index) => {
    return <FormItem key={index} {...itemProps}></FormItem>;
  });

  return (
    <Container isFlex flexDirection={direction}>
      {itemNodes}
    </Container>
  );
}
