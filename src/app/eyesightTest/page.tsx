import { Link } from '@/components/base';
import { EyesightTestController } from '@/components/feature/eyesightTest';

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
