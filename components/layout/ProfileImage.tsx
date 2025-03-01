import React from 'react';

interface Props {
  email: string,
}

function ProfileImage({ email }: Props) {
  const avatarLink = () => `https://api.dicebear.com/9.x/micah/svg?seed=${email}`
    + '&scale=90&radius=50'
    + '&backgroundType=gradientLinear&eyebrows=up'
    + '&eyes=eyes,eyesShadow,smiling,smilingShadow,round'
    + '&mouth=laughing,nervous,pucker,smile,surprised'
    + '&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf';

  return (
    <div className="w-11 h-11 rounded-full border-gray-500 border-2 ">
      <img
        className="rounded-full"
        src={avatarLink()}
        alt="avatar"
      />
    </div>
  );
}

export default ProfileImage;
