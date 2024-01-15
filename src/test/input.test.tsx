import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

const user = userEvent.setup();

describe('NumberInput', () => {
  test('入力テスト', () => {
    expect(1).toBe(1);
  });
});

afterEach(() => {
  jest.resetAllMocks();
});
