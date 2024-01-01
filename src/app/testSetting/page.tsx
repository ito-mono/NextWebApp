import LandoltRingImage, {
  LandoltRingImageProps,
} from '@/components/feature/eyesightTest/atom/LandoltRingImage';

export default function Home() {
  let props: LandoltRingImageProps = {
    windowWidth: 100,
    windowHeight: 100,
    inch: 1,
    direction: 'up',
    distance: 1,
    eyesight: 1,
  };

  return <LandoltRingImage {...props}></LandoltRingImage>;
}
