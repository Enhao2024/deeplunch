import Hamburger from './Hamburger';
import Logo from './Logo';
import IconMenu from './IconMenu';

function TopBar() {
  return (
    <div className="w-full flex justify-between items-center nav-logo-text fixed py-4
    bg-opacity-20 z-40 backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
    >
      <Logo />
      <IconMenu topbar />
      <Hamburger />
    </div>
  );
}

export default TopBar;
