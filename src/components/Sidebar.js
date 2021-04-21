import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Start',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Entdecken',
    path: '/entdecken',
    icon: <AiIcons.AiOutlineCompass />,
    cName: 'nav-text'
  },
  {
    title: 'Mein Konto',
    path: '/mein-konto',
    icon: <RiIcons.RiAccountCircleLine />,
    cName: 'nav-text'
  },
  {
    title: 'Einstellungen',
    path: '/einstellungen',
    icon: <AiIcons.AiOutlineSetting />,
    cName: 'nav-text'
  },
  {
    title: 'Info',
    path: '/info',
    icon: <AiIcons.AiOutlineInfoCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Kundenservice',
    path: '/support',
    icon: <RiIcons.RiCustomerServiceLine />,
    cName: 'nav-text'
  }
];