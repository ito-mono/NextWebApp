import { useState } from 'react';

export type SelectProps = {
  options: string[];
};

export function Select({ options, ...props }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState('');

  const optionNodes = options.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

  return (
    <>
      <select onChange={onChange}>{optionNodes}</select>
      <p>{selectedValue}</p>
    </>
  );

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedValue(e.target.value);
  }
}
