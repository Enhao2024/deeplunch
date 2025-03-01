import React from 'react';
import { MenuTitle } from '@/utils/MenuConfig';
import { MagicCard } from '../ui/magicui/magic-card';
import GradualSpacing from '../ui/magicui/gradual-spacing';
import MenuLink from '../layout/MenuLink';

interface Props {
  name: string,
  toPage: MenuTitle,
  backgroundColor: string
}

function MenuCard({ name, toPage, backgroundColor }: Props) {
  return (
    <MenuLink menuName={toPage}>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap h-60
        text-3xl"
        gradientColor={backgroundColor}
      >
        <GradualSpacing
          className="font-display text-center text-xl font-bold -tracking-widest  text-black dark:text-white md:text-2xl md:leading-[5rem]"
          text={name}
        />
      </MagicCard>
    </MenuLink>
  );
}
export default MenuCard;
