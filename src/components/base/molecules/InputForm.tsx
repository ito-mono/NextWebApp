import { FormItem, FormItemProps } from '.';

import { FlexDirections } from '@/components/Utility/TailwindUtility';
import { Container } from '@/components/base';

export type InputFormProps = {
  direction?: keyof typeof FlexDirections;
  formItemsProps?: FormItemProps[];
};

export function InputForm({ direction = 'col', formItemsProps, ...props }: InputFormProps) {
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
