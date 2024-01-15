describe('Hello World', () => {
  test('Hello', () => {
    expect('Hello' + ' World' + ' !').toBe('Hello World !');
  });

  test('PASS Case', () => {
    expect(1).toBe(1);
  });
});
