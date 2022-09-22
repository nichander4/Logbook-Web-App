import { Calendar, Circle, Home, Info, Mail, User, Users } from "react-feather";

export const navigationData = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home size={20} />,
    badge: 'primary',
    children: [
      {
        id: 'reviewBPM',
        title: 'Review BPM',
        icon: <Circle size={12} />,
        href: '/dashboard/analytics'
      },
      {
        id: 'eCommerce',
        title: 'eCommerce',
        icon: <Circle size={12} />,
        href: '/dashboard/ecommerce'
      }
    ]
  },
  {
    header: 'Menu'
  },
  {
    id: 'employee',
    title: 'Employee',
    icon: <Users size={20} />,
    badge: 'primary',
    children: [
      {
        id: 'reviewEmployee',
        title: 'Review Employee',
        icon: <Circle size={12} />,
        href: '/dashboard/analyticsEmployee'
      },
      {
        id: 'eCommerceEmployee',
        title: 'eCommerce',
        icon: <Circle size={12} />,
        href: '/dashboard/ecommerceEmployee'
      }
    ]
  },
  {
    id: 'about',
    title: 'About',
    icon: <Info size={20} />,
    href: '/about'
  },
  {
    id: 'mail',
    title: 'Mail',
    icon: <Mail size={20} />,
    href: '/mail'
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    href: '/calendar'
  },
  {
    id: 'user',
    title: 'User',
    icon: <User size={20} />,
    href: '/user'
  },
]