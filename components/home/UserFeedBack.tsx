/* eslint-disable react/jsx-props-no-spreading */
import cn from '@/lib/utils';
import { Marquee } from '../ui/magicui/marquee';

const reviews = [
  {
    name: 'EatWithRay',
    username: '@ray_chowdown',
    body: "Found a little ramen shop nearby that I would've never noticed—absolutely delicious! Thanks for the rec!",
    img: 'https://avatar.vercel.sh/ray_chowdown',
  },
  {
    name: 'RoamingRohan',
    username: '@rohan_schedules',
    body: 'Super helpful for trip planning! No more last-minute scrambling.',
    img: 'https://avatar.vercel.sh/rohan_schedules',
  },
  {
    name: 'Sammy_Tastings',
    username: '@sam_tastebuds',
    body: 'I was craving something spicy and this app led me to the best Sichuan spot in town. Perfect!',
    img: 'https://avatar.vercel.sh/sam_tastebuds',
  },
  {
    name: 'Midori_Notes',
    username: '@midori_tasks',
    body: 'Minimal, clean, and actually useful. Just what I needed for my chaotic schedule.',
    img: 'https://avatar.vercel.sh/midori_tasks',
  },
  {
    name: 'Aarav_K9',
    username: '@aarav_listed',
    body: 'Love the simple design. Adding and checking off items is so smooth.',
    img: 'https://avatar.vercel.sh/aarav_listed',
  },
  {
    name: 'NeatlyPacked',
    username: '@z_wishlist',
    body: 'No more random sticky notes or forgetting what I needed. Life saver!',
    img: 'https://avatar.vercel.sh/z_wishlist',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function ReviewCard({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
}

function UserFeedBack() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
}

export default UserFeedBack;
