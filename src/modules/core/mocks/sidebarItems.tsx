import {
  FiClipboard,
  FiCreditCard,
  FiHelpCircle,
  FiHome,
  FiPackage,
  FiSettings,
  FiShoppingCart,
  FiTruck,
} from 'react-icons/fi'

import { SidebarItem } from '../models/sidebarItems'

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    path: '',
    text: 'Home',
    icon: <FiHome size={20} />,
  },
  {
    alert: true,
    path: 'collections',
    text: 'Collections',
    icon: <FiTruck size={20} />,
  },
  {
    alert: true,
    path: 'marketplace',
    text: 'Marketplace',
    icon: <FiShoppingCart size={20} />,
  },
  {
    path: 'wallet',
    text: 'Wallet',
    icon: <FiCreditCard size={20} />,
  },
  {
    path: 'materials',
    text: 'Materials',
    icon: <FiPackage size={20} />,
  },
  {
    path: 'certificates',
    text: 'Certificates',
    icon: <FiClipboard size={20} />,
  },
  {
    path: 'settings',
    text: 'Settings',
    icon: <FiSettings size={20} />,
  },
  {
    path: 'help',
    text: 'Help',
    icon: <FiHelpCircle size={20} />,
  },
]
