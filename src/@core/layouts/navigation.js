import { Calendar, Circle, Home, Info, Mail, User, Book } from 'react-feather';

export const navigationData = [
  // {
  //   id: 'dashboards',
  //   title: 'Dashboards',
  //   icon: <Home size={20} />,
  //   badge: 'primary',
  //   children: [
  //     {
  //       id: 'reviewBPM',
  //       title: 'Review BPM',
  //       icon: <Circle size={12} />,
  //       href: '/dashboard/analytics'
  //     },
  //     {
  //       id: 'eCommerce',
  //       title: 'eCommerce',
  //       icon: <Circle size={12} />,
  //       href: '/dashboard/ecommerce'
  //     }
  //   ]
  // },
  {
    header: 'Menu'
  },
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    badge: 'primary',
    href: '/home'
    // children: [
    //   {
    //     id: 'reviewEmployee',
    //     title: 'Review Employee',
    //     icon: <Circle size={12} />,
    //     href: '/dashboard/analyticsEmployee'
    //   },
    //   {
    //     id: 'eCommerceEmployee',
    //     title: 'eCommerce',
    //     icon: <Circle size={12} />,
    //     href: '/dashboard/ecommerceEmployee'
    //   }
    // ]
  },
  {
    id: 'Logbook',
    title: 'Logbook',
    icon: <Book size={20} />,
    badge: 'primary',
    href: '/logbook'
    
  },
  // {
  //   id: 'mail',
  //   title: 'Mail',
  //   icon: <Mail size={20} />,
  //   href: '/mail'
  // },
  // {
  //   id: 'calendar',
  //   title: 'Calendar',
  //   icon: <Calendar size={20} />,
  //   href: '/calendar'
  // },
  // {
  //   id: 'user',
  //   title: 'User',
  //   icon: <User size={20} />,
  //   href: '/user'
  // }
];
