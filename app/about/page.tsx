import NonFunctionalEntrance from '@/components/layout/NonFunctionalEntrance';
import MenuLink from '@/components/layout/MenuLink';
import VerticalFeatureRow from '@/components/layout/VerticalFeatureRow';
import { MenuTitle } from '@/utils/MenuConfig';
import React from 'react';
import ShimmerButton from '@/components/ui/magicui/shimmer-button';

const page = () => (
  <NonFunctionalEntrance custom="pt-40 my-10 px-8 lg:my-20 lg:px-32">
    <div className="flex flex-col justify-between items-center max-w-3xl text-neutral-700">
      <div className="flex flex-col justify-between items-center space-y-16 text-justify">
        <h1 className="text-3xl font-bold">Our Vision</h1>
        <div className="flex flex-col space-y-4">
          <p className="font-semibold leading-relaxed max-w-md lg:max-w-lg">
            Modern work culture is fast-paced and demanding, yet many of us have forgotten how to truly rest.
            You grab lunch, scroll through TikTok, maybe reply to a few messages… and before you know it, your &quot;break&quot; is over.
            But did your brain actually rest? Probably not.
          </p>
          <p className="font-semibold leading-relaxed max-w-md lg:max-w-lg">
            This project started as a personal experiment.
            We struggled with the same problem: midday fatigue that no amount of mindless scrolling could fix.
            After we finally found our ways and realized this was something worth sharing,
            we built this project—not just as a tool,
            but as a movement to help people take back their lunch breaks and make them count.
          </p>
          <p className="font-semibold leading-relaxed max-w-md lg:max-w-lg">
            Right now, DeepLunch is purely driven by passion, and we’re not focused on monetization.
            But we’re always open to new ideas and collaborations.
            If you believe in this vision or have something in mind, let’s talk!
          </p>
        </div>
        <MenuLink menuName={MenuTitle.CONTACT}>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none
            tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg"
            >
              Contact Us
            </span>
          </ShimmerButton>
        </MenuLink>

      </div>
      <div className="divider m-16" />
      <h1 className="text-3xl font-bold">Our Team</h1>
      <VerticalFeatureRow
        title="MrPilot: Full Stack Developer"
        description={`Code is Art. Never confined to any boundaries, 
                    always pursuing fancy thoughts. 
                    Enjoying weekends with coffee, 
                    coding, and occasionally a fishing trip.`}
        image="me.jpg"
        imageAlt="First feature alt text"
        reverse
        fullRounded
      />
      <VerticalFeatureRow
        title="Ooooouch: UI/UX Designer"
        description={`Cuteness is the ultimate productivity booster. 
                    Obsessed with all things fluffy and four-legged, 
                    and believes nothing beats a session of Genshin Impact after a day of creative brainstorming.`}
        image="ouch.jpeg"
        imageAlt="First feature alt text"
        fullRounded
      />
    </div>
  </NonFunctionalEntrance>
);

export default page;
