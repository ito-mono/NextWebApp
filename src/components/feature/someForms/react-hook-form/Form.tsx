/**
 * react-hook-form でフォームを作成するサンプル
 */

import { SubmitHandler, useForm } from 'react-hook-form';

import { baseInputClassNames } from '../Style';

import { Monitor } from '@/components/Utility/Monitor';

export function Form() {
  const { handleSubmit, register } = useForm<Monitor>();
  const onSubmit: SubmitHandler<Monitor> = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className={baseInputClassNames} {...register('width')}></input>
      <input className={baseInputClassNames} {...register('height')}></input>

      <button type='submit'>Submit</button>
    </form>
  );
}
