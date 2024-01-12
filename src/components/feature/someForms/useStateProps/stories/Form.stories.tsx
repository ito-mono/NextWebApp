import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { FormItemProps, NumberInputProps, TextInputProps } from '..';
import { Form, FormProps } from '..';

import { useMonitor } from '@/components/Utility/Monitor';
import { Container } from '@/components/base';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'SomeForms/useStateProps/Form',
  component: Form,
};
export default meta;

// Storyの定義
type Story = StoryObj<FormProps>;

export const Basic: Story = {
  args: {},
  render: function Render({ ...args }) {
    const [str, setStr] = useState('value');
    const [num, setNum] = useState(0);

    const strInputProps: TextInputProps = { value: str, setValue: setStr };
    const numInputProps: NumberInputProps = { value: num, setValue: setNum, min: 100, max: 999 };

    const formItemProps: FormItemProps[] = [];
    formItemProps.push({ label: 'string', inputProps: strInputProps });
    formItemProps.push({ label: 'number', inputProps: numInputProps });
    return <Form formItemsProps={formItemProps} {...args}></Form>;
  },
};

export const Monitor: Story = {
  args: {},
  render: function Render({ ...args }) {
    const { monitor, ...setters } = useMonitor();

    const widthInputProps: NumberInputProps = {
      value: monitor.width,
      setValue: setters.setWidth,
    };
    const heightInputProps: NumberInputProps = {
      value: monitor.height,
      setValue: setters.setHeight,
    };
    const inchInputProps: NumberInputProps = {
      value: monitor.inch,
      setValue: setters.setInch,
    };

    const formItemProps: FormItemProps[] = [];
    formItemProps.push({ label: 'width', inputProps: widthInputProps });
    formItemProps.push({ label: 'height', inputProps: heightInputProps });
    formItemProps.push({ label: 'inch', inputProps: inchInputProps });
    return (
      <>
        <Form formItemsProps={formItemProps} {...args}></Form>
        <Container>
          <p>以下デバッグ情報</p>
          <p>幅: {monitor.width}</p>
          <p>高さ: {monitor.height}</p>
          <p>インチ: {monitor.inch}</p>
        </Container>
      </>
    );
  },
};
