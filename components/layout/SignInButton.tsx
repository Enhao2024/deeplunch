'use client';

import { Profile } from '@/types/common';
import { getProfile } from '@/utils/GeneralUtils';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { InteractiveHoverButton } from '../ui/magicui/interactive-hover-button';
import { PulsatingButton } from '../ui/magicui/pulsating-button';

interface Props {
  children: ReactNode;
  custom?: string;
}

function SignInButton({ children, custom = '' }: Props) {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const token = Cookies.get('id_token');
    const userProfile = getProfile(token);
    setProfile(userProfile);
  }, []);

  const renderButtons = () => (
    <>
      <PulsatingButton className={['lg:hidden', custom].join(' ')}>{children}</PulsatingButton>
      <InteractiveHoverButton className={['hidden lg:block', custom].join(' ')}>{children}</InteractiveHoverButton>
    </>
  );

  if (profile) {
    return (
      <Link href="/dashboard">
        {renderButtons()}
      </Link>
    );
  }

  return (
    <form
      action="/api/auth/cognito-sign-in"
      method="GET"
    >
      {renderButtons()}
    </form>
  );
}

export default SignInButton;
