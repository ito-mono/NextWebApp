import { NavigationBar } from './NavigationBar';

export type HeaderProps = {};

export function Header() {
  return (
    <header className='w-full bg-blue-100'>
      <h1>視力検査</h1>
      <NavigationBar></NavigationBar>
    </header>
  );
}
