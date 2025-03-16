/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { LEFT_BAR_MENU, NON_FUNCTIONAL_PAGE } from '@/utils/MenuConfig';
import { usePathname } from 'next/navigation';
import MenuLink from './MenuLink';

function LeftMenu() {
  const pathName = usePathname();
  const isNonFunctionalPage = NON_FUNCTIONAL_PAGE.reduce((acc, menu) => acc || menu?.href === pathName, false);

  if (isNonFunctionalPage) {
    return null;
  }

  const renderMenu = () => LEFT_BAR_MENU.map((menu) => (
    <MenuLink key={menu.href} menuName={menu.title}>
      <div className="p-3 2xl:p-4 flex items-center space-x-4 text-xs 2xl:text-base font-semibold rounded-2xl hover:bg-gray-50">
        <menu.icon />
        <span>{menu.title}</span>
      </div>
    </MenuLink>
  ));

  return (
    <div className="px-4 flex flex-col w-full min-w-48 bg-opacity-20 h-full border-r border-r-gray-300">
      <div className="py-4 w-full min-w-40">
        {renderMenu()}
      </div>
    </div>
  );
}

export default LeftMenu;
