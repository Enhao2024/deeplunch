import { MOBILE_LEFT_BAR_MENU, MenuConfig, MenuTitle } from '@/utils/MenuConfig';
import HamburgerProfile from './HamburgerProfile';
import MenuLink from './MenuLink';
import HamburgerFooterButton from './HamburgerFooterButton';

function Hamburger() {
  const renderMenu = () => [...MOBILE_LEFT_BAR_MENU].map((menu) => (
    <li key={menu.href}>
      <MenuLink
        menuName={menu.title}
        newPage={menu.href === MenuConfig[MenuTitle.GIT_REPO].href}
      >
        <button
          type="button"
          className="flex gap-4 w-full items-center rounded-lg py-1.5 px-3 hover:bg-base-200 font-bold"
        >
          <menu.icon />
          <span>{menu.title}</span>
        </button>
      </MenuLink>
    </li>
  ));

  return (
    <div className="lg:hidden">
      <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* button here */}
          <label htmlFor="my-drawer" className=" drawer-button">
            <div className="btn btn-ghost mx-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" />
          <div className="min-h-full bg-zinc-100 flex flex-col justify-between bg-opacity-95 backdrop-blur-md">
            <HamburgerProfile />
            <ul className="menu text-base-content min-h-full w-72 px-6 py-12">
              {renderMenu()}
            </ul>
            <div className="text-center p-4">
              <HamburgerFooterButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
