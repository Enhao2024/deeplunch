import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import GoogleCaptchaWrapper from '../captcha/GoogleCaptchaWrapper';
import LeftMenu from './LeftMenu';

const TopBar = dynamic(() => import('@/components/layout/TopBar'), { ssr: false });

interface Props {
  children: ReactNode;
  custom?: string;
}

function Entrance({ children, custom = '' }: Props) {
  const renderMain = () => (
    <>
      {/* <FingerPrint /> */}
      <TopBar />
      <div className="flex flex-col w-full border-b-black">
        <div className={[custom || 'mt-20', 'w-full grid grid-cols-7'].join(' ')}>
          <div className="col-span-1 hidden lg:block">
            <LeftMenu />
          </div>
          <div className="col-span-7 lg:col-span-6 ">
            {children}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>

    </>
  );
  return (
    <GoogleCaptchaWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between bg-global">
        {renderMain()}
      </main>
    </GoogleCaptchaWrapper>
  );
}

export default Entrance;
