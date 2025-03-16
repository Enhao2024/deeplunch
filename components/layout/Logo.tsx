import Link from 'next/link';
import { Home } from '@geist-ui/icons';
import LogoIcon from '../svg/LogoIcon';
import GradualSpacing from '../ui/magicui/gradual-spacing';
import Timer from './Timer';

function Logo() {
  return (
    <>
      <div className="hidden lg:block">
        <Link href="/">
          <div className="flex flex-row mx-8 justify-between items-center space-x-4">
            <LogoIcon customize="w-10 w-10 2xl:w-12 2xl:h-12" />
            <GradualSpacing
              className="font-display text-center text-xl 2xl:text-2xl font-bold -tracking-widest  text-neutral-700 dark:text-white"
              text="DeepLunch"
            />
            <Timer fontSize="text-[20px] 2xl:text-[22px]" title="Will Be Redirected After No Action" customize="tooltip-right" />
          </div>
        </Link>
      </div>
      <div className="lg:hidden">
        <Link href="/">
          <div className="flex flex-row mx-8 justify-between items-center space-x-4">
            <Home />
            <Timer fontSize="text-[20px]" title="Will Be Redirected After No Action" customize="tooltip-bottom" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Logo;
