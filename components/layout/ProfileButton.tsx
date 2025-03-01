'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Profile } from '@/types/common';
import { getProfile } from '@/utils/GeneralUtils';
import { Popover } from '@geist-ui/core';
import Cookies from 'js-cookie';
import ProfileImage from './ProfileImage';
import SignOutButton from './SignOutButton';

function ProfileButton() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const token = Cookies.get('id_token');
    const userProfile = getProfile(token);
    setProfile(userProfile);
  }, []);

  if (!profile) return null;

  const content = (() => (
    <div className="p-8 w-64 flex flex-col justify-evenly space-y-4">
      <div className="flex justify-center items-center">
        <ProfileImage email={profile.email} />
      </div>
      <div className="flex flex-col justify-center items-center
                    space-y-1 text-neutral-700 font-semibold"
      >
        <div>{profile?.name}</div>
        <div>{profile?.email}</div>
      </div>
      <SignOutButton />
    </div>
  )) as (() => ReactNode) & string;

  return (
    <Popover content={content} placement="bottomEnd" offset={8} hideArrow>
      <div className="cursor-pointer">
        <ProfileImage email={profile.email} />
      </div>
    </Popover>
  );
}

export default ProfileButton;
