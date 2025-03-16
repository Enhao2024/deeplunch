import { MenuTitle, TOP_BAR_MENU } from '@/utils/MenuConfig';
import MenuLink from './MenuLink';
import ProfileButton from './ProfileButton';

interface Props {
  topbar: boolean
}

function IconMenu({ topbar }: Props) {
  // add more menu items through TOP_BAR_MENU
  const renderMenu = () => TOP_BAR_MENU.map((menu) => {
    let toNewPage = false;
    if (menu.title === MenuTitle.GIT_REPO) {
      toNewPage = true;
    }
    return (
      <MenuLink key={menu.href} menuName={menu.title} newPage={toNewPage}>
        <div
          className="w-10 h-10 rounded-2xl hover:bg-gray-100 flex items-center justify-center"
          title={menu.title}
        >
          <menu.icon />
        </div>
      </MenuLink>
    );
  });

  const renderProfileButton = () => {
    if (topbar) {
      return <ProfileButton />;
    }
    return null;
  };

  return (
    <div className="hidden lg:flex space-x-8 justify-evenly items-center nav-menu-text px-8">
      {renderMenu()}
      {renderProfileButton()}
    </div>
  );
}

export default IconMenu;
