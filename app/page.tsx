import CircularProgress from '@/components/home/CircularProgress';
import HomeResponsiveButton from '@/components/home/HomeResponsiveButton';
import UserFeedBack from '@/components/home/UserFeedBack';
import NonFunctionalEntrance from '@/components/layout/NonFunctionalEntrance';
import SignInButton from '@/components/layout/SignInButton';
import VerticalFeatureRow from '@/components/layout/VerticalFeatureRow';

import { AuroraText } from '@/components/ui/magicui/aurora-text';
import { OrbitingCircles } from '@/components/ui/magicui/orbiting-circles';

const page = () => (
  <NonFunctionalEntrance custom="mt-24">
    <h1 className="my-16 font-bold text-center tracking-tighter text-3xl lg:text-7xl lg:my-24">
      Welcome to
      {' '}
      <AuroraText>DeepLunch</AuroraText>
    </h1>

    <div className="my-4 flex flex-col space-y-16 items-center justify-center">
      <div className="flex flex-col space-y-4 font-semibold leading-relaxed text-center max-w-md text-base lg:text-2xl">
        <p>Your lunch break is more than just time off.</p>
        <p>Its the key to unlocking a better afternoon.</p>
      </div>

      <SignInButton>
        Count Me In
      </SignInButton>

      <div className="flex flex-col space-y-4 font-semibold leading-relaxed text-center max-w-md text-base lg:text-2xl">
        <p>Have you ever felt sleepy after lunch? </p>
      </div>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles className="text-2xl">
          <span>🫨</span>
          <span>🥱</span>
          <span>😵‍💫</span>
          <span>😴</span>
        </OrbitingCircles>
        <OrbitingCircles className="text-2xl" radius={100} reverse speed={2}>
          <span>😴</span>
          <span>😵</span>
          <span>😫</span>
          <span>😪</span>
        </OrbitingCircles>
        <OrbitingCircles className="text-2xl" radius={200} reverse speed={1}>
          <span>😴</span>
          <span>😵</span>
          <span>🥱</span>
          <span>😪</span>
        </OrbitingCircles>
        <span className="relative left-0 top-0 text-5xl">🧠</span>
      </div>

      <SignInButton>
        Time To Break
      </SignInButton>

      <div className="flex flex-col space-y-4 font-semibold leading-relaxed text-center max-w-md text-base lg:text-2xl">
        <p>Or it seems to you the lunch break can never be enough... </p>
      </div>
      <CircularProgress />

      <SignInButton>
        Recharge Me
      </SignInButton>

      <div className="flex flex-col space-y-4 font-semibold leading-relaxed text-center max-w-md text-base lg:text-2xl">
        <p>Then Lucky You! We are here to help. </p>
        <p>DeepLunch offers a bunch of tools for you and help recharge through your break.</p>
      </div>
      <div className="flex flex-col justify-between items-center space-y-16 max-w-3xl">
        <VerticalFeatureRow
          title="Smart Planners"
          description="Plan the rest day in 5 mins. Prioritise works, make a shop list, and imagine after work events!"
          image="dev-productivity_5wps.svg"
          imageAttrs="max-h-48 mt-4"
          imageAlt="Planner"
          explore={<HomeResponsiveButton href="/dashboard" context="Explore" customizePc="text-sm" />}
          reverse
        />
        <VerticalFeatureRow
          title="Random Map"
          description={'Not sure what\'s for lunch? No problem, our random map may inspire you. Explore your favorites around 5 kms'}
          image="my-current-location_tudq.svg"
          imageAttrs="max-h-48 mt-8"
          imageAlt="Map"
          explore={<HomeResponsiveButton href="/dashboard" context="Explore" customizePc="text-sm" />}
        />
        <VerticalFeatureRow
          title="Relax Or Learn"
          description="Recharge yourself by either enjoying a short meditation or browse through training resources."
          image="programmer_raqr.svg"
          imageAttrs="max-h-48 mt-4"
          imageAlt="Relax Or Learn"
          explore={<HomeResponsiveButton href="/dashboard" context="Explore" customizePc="text-sm" />}
          reverse
        />
      </div>

      <div className="flex flex-col space-y-4 font-semibold leading-relaxed text-center max-w-md text-base lg:text-2xl">
        <p>Can&apos;t wait to see more?</p>
        <p>View our road map and feel free to contact!</p>
      </div>
      <div className="flex space-x-8">
        <HomeResponsiveButton href="/roadmap" context="Future Works" customizePc="text-xl" />
        <HomeResponsiveButton href="/contact" context="Contact Us" customizePc="text-xl" />
      </div>

      <div className="pb-8 max-w-[80vw]">
        <UserFeedBack />
      </div>

    </div>
  </NonFunctionalEntrance>
);

export default page;
