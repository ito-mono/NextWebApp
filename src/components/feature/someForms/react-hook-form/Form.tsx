/**
 * react-hook-form でフォームを作成するサンプル
 */

import { SubmitHandler, useForm } from 'react-hook-form';

import { Monitor } from '@/components/Utility/Monitor';

export function Form() {
  const { handleSubmit, register } = useForm<Monitor>();
  const inputClassNames = 'p-1 m-1 border-2 border-gray-500 rounded-md';
  const onSubmit: SubmitHandler<Monitor> = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className={inputClassNames} {...register('width')}></input>
      <input className={inputClassNames} {...register('height')}></input>

      <button type='submit'>Submit</button>
    </form>
  );
}
