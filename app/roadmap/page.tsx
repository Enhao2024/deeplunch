'use client';

import HomeResponsiveButton from '@/components/home/HomeResponsiveButton';
import NonFunctionalEntrance from '@/components/layout/NonFunctionalEntrance';
import ChatRoomDemo from '@/components/roadmap/ChatRoomDemo';
import FuturePlanRow from '@/components/roadmap/FuturePlanRow';
import MeditationDemo from '@/components/roadmap/MeditationDemo';
import TerminalDemo from '@/components/roadmap/TerminalDemo';
import { TextAnimate } from '@/components/ui/magicui/text-animate';

export default function page() {
  return (
    <NonFunctionalEntrance custom="my-40">
      <div className="flex flex-col my-4">
        <TextAnimate animation="slideLeft" by="character" className="py-4 text-4xl lg:text-6xl font-bold text-neutral-700 text-center">
          What&apos;s next?
        </TextAnimate>
        <TextAnimate animation="fadeIn" by="line" as="p" className="py-4 text-lg font-semibold text-neutral-700 text-center">
          {'Explore our features in planning\n\nHaving more fancy thoughts?\n\nWe are open to a brainstorm!'}
        </TextAnimate>
      </div>

      <div className="flex flex-col justify-between items-center space-y-16 max-w-3xl">
        <FuturePlanRow
          title="01 CLI Package"
          explore={<HomeResponsiveButton href="/contact" context="Contact Us" customizePc="text-sm" />}
          description="A CLI tool for command line users to quickly decide their lunch options,
          set plans & shopping list and alert through messages."
        >
          <TerminalDemo />
        </FuturePlanRow>
        <FuturePlanRow
          title="02 AI Meditation"
          explore={<HomeResponsiveButton href="/contact" context="Contact Us" customizePc="text-sm" />}
          description="Unlock brand new meditation experiences with our AI engine:
          genearte new meditation music, mix various genres or even sample real-world sounds"
          reverse
        >
          <MeditationDemo />
        </FuturePlanRow>
        <FuturePlanRow
          title="03 Chat Room"
          explore={<HomeResponsiveButton href="/contact" context="Contact Us" customizePc="text-sm" />}
          description="A place where you can share plans, ideas, or today&apos;s receipe with others.
          You may get random bubbles and follow with your favorite topic"
        >
          <ChatRoomDemo />
        </FuturePlanRow>
      </div>

    </NonFunctionalEntrance>
  );
}
