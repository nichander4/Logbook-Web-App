import { Home, Book } from 'react-feather';

export const navigationData = [
  {
    header: 'Menu'
  },
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    badge: 'primary',
    href: '/home'
  },
  {
    id: 'Logbook',
    title: 'Logbook',
    icon: <Book size={20} />,
    badge: 'primary',
    href: '/Logbook'
  }
];
