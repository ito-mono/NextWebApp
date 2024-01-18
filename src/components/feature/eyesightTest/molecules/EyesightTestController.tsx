'use client';

import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  ArrowButtonsContainer,
  Eyesights,
  LandoltRingImage,
  LandoltRingImageProps,
  getRandomDirection,
} from '../';

import { Monitor } from '@/components/Utility/Monitor';
import { Container } from '@/components/base';

export type EyesightTestControllerProps = {
  monitor: Monitor;
  acceptableMistakesCount?: number;
};

export function EyesightTestController({
  monitor,
  acceptableMistakesCount = 2,
  ...props
}: EyesightTestControllerProps) {
  // ユーザーの入力を管理するための状態
  const [landoltRingDirection, setDirection] = useState<LandoltRingImageProps['direction']>('up');
  const [distance, setDistance] = useState<LandoltRingImageProps['distance']>(3);
  const [eyesight, setEyesight] = useState<LandoltRingImageProps['eyesight']>(0.1);

  const [currentMistakesCount, setCurrentMistakesCount] = useState(0);
  const router = useRouter();

  // ミス回数が一定回数を超えたらResultページに遷移するuseEffect
  useEffect(() => {
    if (currentMistakesCount >= acceptableMistakesCount) goResultPage();
  });

  // Resultページに遷移するコールバック関数
  // MEMO: useEffect内で呼び出される関数のため、useCallbackを使用
  const goResultPage = useCallback(
    function () {
      const href = '/eyesightTest/result' + `?score=${eyesight}`;
      router.push(href);
    },
    [router, eyesight],
  );

  const imageProps: LandoltRingImageProps = {
    monitor,
    direction: landoltRingDirection,
    distance,
    eyesight,
    ...props,
  };

  return (
    <>
      <p>
        Misstakes Count: {acceptableMistakesCount} / {currentMistakesCount}
      </p>
      <Container isFlex justify='around' alignItems='center'>
        <ArrowButtonsContainer
          onClickArrowButton={ocClickArrowButton}
          showDiagonal={true}
          size='md'
        ></ArrowButtonsContainer>
        <LandoltRingImage {...imageProps}></LandoltRingImage>
        <Container width='96'></Container>
      </Container>
    </>
  );

  // 方向をリセットする
  function resetDirection() {
    setDirection(getRandomDirection());
  }

  // 正解時
  function incrementEyesight() {
    const index = Eyesights.findIndex((value) => value === eyesight);
    if (index === Eyesights.length - 1) goResultPage();
    else setEyesight(Eyesights[index + 1]);
  }

  // 不正解時
  function decrementEyesight() {
    const index = Eyesights.findIndex((value) => value === eyesight);
    if (index === 0) goResultPage();
    else setEyesight(Eyesights[index - 1]);

    setCurrentMistakesCount(currentMistakesCount + 1);
  }

  // 矢印ボタンが押された時に呼び出されるコールバック関数
  function ocClickArrowButton(inputDirection: LandoltRingImageProps['direction']) {
    const iscorrect = landoltRingDirection == inputDirection;
    console.log(
      `${iscorrect ? '◯' : '✕'} Your answer: ${inputDirection}, Answer: ${landoltRingDirection}`,
    );

    // 視力の操作
    if (iscorrect) incrementEyesight();
    else decrementEyesight();

    // 方向のリセット
    resetDirection();
  }
}
