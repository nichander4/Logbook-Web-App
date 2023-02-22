import { Home, Book } from 'react-feather';

export const navigationData = [
  {
    header: 'Menu'
  },
  {
    id: 'MenuHomeDashboard',
    title: 'Home',
    icon: <Home size={20} />,
    badge: 'primary',
    href: '/home'
  },
  {
    id: 'MenuLogbook',
    title: 'Logbook',
    icon: <Book size={20} />,
    badge: 'primary',
    href: '/logbook'
  }
];
