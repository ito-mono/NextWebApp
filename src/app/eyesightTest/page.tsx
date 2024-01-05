import { Link } from '@/components/base';
import { EyesightTestController, Header } from '@/components/feature/eyesightTest';

export default function EyesightTest() {
  return (
    <div>
      <Header></Header>
      <main>
        <EyesightTestController></EyesightTestController>
      </main>
    </div>
  );
}
