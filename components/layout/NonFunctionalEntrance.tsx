import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import GoogleCaptchaWrapper from '../captcha/GoogleCaptchaWrapper';
import FingerPrint from './FingerPrint';

const TopBar = dynamic(() => import('@/components/layout/TopBar'), { ssr: false });

interface Props {
  children: ReactNode;
  custom?: string;
}

function NonFunctionalEntrance({ children, custom = '' }: Props) {
  const renderMain = () => (
    <>
      <FingerPrint />
      <TopBar />
      <div className={[custom || 'mt-12 lg:mt-20', ''].join(' ')}>
        {children}
      </div>
      <Footer />
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

export default NonFunctionalEntrance;
