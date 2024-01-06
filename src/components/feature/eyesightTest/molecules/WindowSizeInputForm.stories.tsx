import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { WindowSizeInputForm, WindowSizeInputFormProps } from './WindowSizeInputForm';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'EyesightTest/WindowSizeInputForm',
  component: WindowSizeInputForm,
};
export default meta;

// Storyの定義
type Story = StoryObj<WindowSizeInputFormProps>;

export const Basic: Story = {
  args: {},
  render: function Render({ ...args }) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [inch, setInch] = useState(0);

    const props: WindowSizeInputFormProps = {
      width: width,
      setWidth: setWidth,
      height: height,
      setHeight: setHeight,
      inch: inch,
      setInch: setInch,
    };

    return <WindowSizeInputForm {...props} {...args}></WindowSizeInputForm>;
  },
};
