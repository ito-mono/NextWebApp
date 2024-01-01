import Link from '@/components/base/atoms/Link';
import EyesightTestController from '@/components/feature/eyesightTest/molecules/EyesightTestController';

export default function EyesightTest() {
  return (
    <div>
      <main>
        <div>
          <h1>視力テスト</h1>
          <Link href='/'>戻る</Link>
        </div>
        <EyesightTestController></EyesightTestController>
      </main>
    </div>
  );
}
