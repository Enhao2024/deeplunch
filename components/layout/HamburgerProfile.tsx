'use client';

import { Profile } from '@/types/common';
import { getProfile } from '@/utils/GeneralUtils';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import ProfileImage from './ProfileImage';

function HamburgerProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const token = Cookies.get('id_token');
    const userProfile = getProfile(token);
    setProfile(userProfile);
  }, []);

  if (!profile) return null;

  return (
    <div className="mx-12 mt-12 flex flex-col justify-center items-start
    space-y-2 text-neutral-700 font-semibold text-sm"
    >
      <ProfileImage email={profile.email} />
      <div>{profile?.name}</div>
      <div>{profile?.email}</div>
    </div>
  );
}

export default HamburgerProfile;
