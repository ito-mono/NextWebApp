/**
 * 一般的なパターンのフォーム
 * 親でstateを定義し、それをinputに渡す
 * そのため引数が増える。また入力項目が増えれば増えるほど管理が煩雑になる
 */

import { FormItem, FormItemProps } from '.';

import { FlexDirections } from '@/components/Utility/TailwindUtility';
import { Container } from '@/components/base';

export type FormProps = {
  direction?: keyof typeof FlexDirections;
  formItemsProps?: FormItemProps[];
};

export function Form({ direction = 'col', formItemsProps, ...props }: FormProps) {
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
