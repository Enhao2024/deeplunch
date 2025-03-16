import Link from 'next/link';
import { InteractiveHoverButton } from '../ui/magicui/interactive-hover-button';
import { PulsatingButton } from '../ui/magicui/pulsating-button';

interface Props {
  href: string,
  context: string,
  customizeMobile?: string,
  customizePc?: string,
}

function HomeResponsiveButton({
  href,
  context,
  customizeMobile = '',
  customizePc = '',
}: Props) {
  return (
    <Link href={href}>
      <PulsatingButton className={['lg:hidden', customizeMobile].join(' ')}>{context}</PulsatingButton>
      <InteractiveHoverButton className={['hidden lg:block', customizePc].join(' ')}>{context}</InteractiveHoverButton>
    </Link>
  );
}

export default HomeResponsiveButton;
