import { Link } from '@/components/base';

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Link href='/testSetting'>テスト設定</Link>
          <Link href='/eyesightTest'>視力テスト</Link>
        </div>
      </main>
    </div>
  );
}
