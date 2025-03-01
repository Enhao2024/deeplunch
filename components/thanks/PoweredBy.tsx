import React from 'react';

const stacks: Record<string, string> = {
  Vercel: 'https://vercel.com/',
  'Next.js': 'https://nextjs.org/',

  'AWS Cloud': 'https://aws.amazon.com/',
  'Google Maps API': 'https://developers.google.com/maps',
  Tailwind: 'https://tailwindcss.com/',
  'Magic UI': 'https://magicui.design/',
  DaisyUI: 'https://daisyui.com/',
  Geist: 'https://geist-ui.dev/',
  Github: 'https://github.com/',
  'GitHub Actions': 'https://github.com/features/actions',
  Husky: 'https://typicode.github.io/husky/',
  'reCAPTCHA v3': 'https://developers.google.com/recaptcha',
  Radash: 'https://radash-docs.vercel.app/',
  NodeMailer: 'https://nodemailer.com/',
  TypeScript: 'https://www.typescriptlang.org/',
  ESLint: 'https://eslint.org/',
  Commitlint: 'https://commitlint.js.org/',
  'React Timer Hook': 'https://github.com/amrlabib/react-timer-hook',
  'Framer Motion': 'https://www.framer.com/motion/',
  'Radix UI': 'https://www.radix-ui.com/',
  'Simple Icons': 'https://simpleicons.org/',
  Jira: 'https://www.atlassian.com/software/jira',
  Slack: 'https://slack.com/',
  WeCom: 'https://work.weixin.qq.com/',
};

function PoweredBy() {
  function renderStack() {
    return Object.keys(stacks).map((name: string, index: number) => (
      <span>
        <a href={stacks[name]} target="_blank" className="hover:text-neutral-900" rel="noreferrer">{name}</a>
        {index === Object.keys(stacks).length - 1 ? null : ' • '}
      </span>
    ));
  }
  return (
    <div className="text-center text-neutral-500 font-semibold text-base max-w-3xl">
      <p className="my-4 text-xl text-neutral-700 font-bold">Powered By</p>
      {renderStack()}
    </div>
  );
}

export default PoweredBy;
