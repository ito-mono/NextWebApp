'use client';

import { useSearchParams } from 'next/navigation';

import { Container, Link } from '@/components/base';

export default function Result() {
  const params = useSearchParams();
  const score = params.get('score');

  return (
    <Container
      width='full'
      height='screen'
      isFlex
      flexDirection='col'
      justify='center'
      alignItems='center'
    >
      <p className='text-xl text'>あなたの視力は {score} です。</p>
      <Link href='/eyesightTest'>再テスト</Link>
    </Container>
  );
}
