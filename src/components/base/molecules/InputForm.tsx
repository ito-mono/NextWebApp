import { FormItem, FormItemProps } from '.';

import { FlexDirections } from '@/components/Utility/TailwindUtility';
import { Container } from '@/components/base';

export type InputFormProps = {
  direction?: keyof typeof FlexDirections;
  formItemsProps?: FormItemProps[];
};

export function InputForm({ direction = 'col', formItemsProps, ...props }: InputFormProps) {
  const itemNodes: React.ReactNode[] = [];

  formItemsProps?.forEach((itemProps) => itemNodes.push(<FormItem {...itemProps}></FormItem>));

  return (
    <Container isFlex flexDirection={direction}>
      {itemNodes}
    </Container>
  );
}
