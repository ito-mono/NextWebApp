import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { FormItemProps } from '.';
import { Form, FormProps } from '.';

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
    const [v1, set1] = useState(1);
    const [v2, set2] = useState(2);
    const [v3, set3] = useState(3);
    const [v4, set4] = useState(4);
    const [v5, set5] = useState(5);

    const formItemProps: FormItemProps[] = [];
    // formItemProps.push({ label: 'label1', value: v1, setValue: set1 });
    // formItemProps.push({ label: 'label2', value: v2, setValue: set2 });
    // formItemProps.push({ label: 'label3', value: v3, setValue: set3 });
    // formItemProps.push({ label: 'label4', value: v4, setValue: set4 });
    // formItemProps.push({ label: 'label5', value: v5, setValue: set5 });

    return <Form formItemsProps={formItemProps} {...args}></Form>;
  },
};

// export const NumberAndString: Story = {
//   args: {},
//   render: function Render({ ...args }) {
//     const [num, setNum] = useState(999);
//     const [str, setStr] = useState('string');

//     const formItemProps: FormItemProps[] = [];
//     formItemProps.push({
//       label: 'number',
//       inputProps: {
//         setValue: setNum,
//       },
//     });
//     formItemProps.push({
//       label: 'string',
//       inputProps: {
//         value: str,
//         setValue: setStr,
//       },
//     });

//     return <Form formItemsProps={formItemProps} {...args}></Form>;
//   },
// };

// export const Row: Story = {
//   args: { direction: 'row' },
//   render: function Render({ ...args }) {
//     const [v1, set1] = useState(1);
//     const [v2, set2] = useState(2);
//     const [v3, set3] = useState(3);
//     const [v4, set4] = useState(4);
//     const [v5, set5] = useState(5);

//     const formItemProps: FormItemProps[] = [];
//     // formItemProps.push({ label: 'label1', value: v1, setValue: set1 });
//     // formItemProps.push({ label: 'label2', value: v2, setValue: set2 });
//     // formItemProps.push({ label: 'label3', value: v3, setValue: set3 });
//     // formItemProps.push({ label: 'label4', value: v4, setValue: set4 });
//     // formItemProps.push({ label: 'label5', value: v5, setValue: set5 });

//     return <Form formItemsProps={formItemProps} {...args}></Form>;
//   },
// };
