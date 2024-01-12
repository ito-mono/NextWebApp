/**
 * 非推奨
 * inputの中でuseStateを行うパターン
 * 親からinputにstateを渡す必要はないが、代わりにinputから親に更新を伝える為の関数を渡す必要がある
 * value, setValueを渡す必要がない分、引数は減る
 */

import { FormItem, FormItemProps, TextInput } from '.';

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
