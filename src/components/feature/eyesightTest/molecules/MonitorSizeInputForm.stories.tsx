import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { MonitorSizeInputForm, MonitorSizeInputFormProps } from './MonitorSizeInputForm';

import { useMonitor, MonitorProps } from '@/components/Utility/Monitor';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'EyesightTest/MonitorSizeInputForm',
  component: MonitorSizeInputForm,
};
export default meta;

// Storyの定義
type Story = StoryObj<MonitorSizeInputFormProps>;

export const Basic: Story = {
  args: {},
  render: function Render({ ...args }) {
    const props: MonitorSizeInputFormProps = {
      monitor: useMonitor({}),
    };

    return <MonitorSizeInputForm {...props} {...args}></MonitorSizeInputForm>;
  },
};

export const InitValue: Story = {
  args: {},
  render: function Render({ ...args }) {
    const monitorProps: MonitorProps = {
      width: 1920,
      height: 1080,
      inch: 24,
    };

    const props: MonitorSizeInputFormProps = {
      monitor: useMonitor(monitorProps),
    };

    return <MonitorSizeInputForm {...props} {...args}></MonitorSizeInputForm>;
  },
};
