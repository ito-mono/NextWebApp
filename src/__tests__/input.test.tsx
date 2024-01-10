import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { NumberInput } from '@/components/base';

const user = userEvent.setup();

describe('NumberInput', () => {
  test('入力テスト', () => {
    const [value, setValue] = useState(0);
    render(<NumberInput value={value} setValue={setValue} />);
    const elm = screen.getByRole('input');
    user.type(elm, '123');
    screen.debug(elm);
  });
});

afterEach(() => {
  jest.resetAllMocks();
});
