'use client';

import { Profile } from '@/types/common';
import { getProfile } from '@/utils/GeneralUtils';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

function HamburgerFooterButton() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const token = Cookies.get('id_token');
    const userProfile = getProfile(token);
    setProfile(userProfile);
  }, []);

  if (profile) {
    return <SignOutButton />;
  }
  return (
    <div className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium">
      <SignInButton custom="w-48">Login</SignInButton>
    </div>
  );
}

export default HamburgerFooterButton;
