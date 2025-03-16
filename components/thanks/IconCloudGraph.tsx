import { IconCloud } from '../ui/magicui/icon-cloud';

const images = [
  'https://simpleicons.org/icons/nextdotjs.svg',
  'https://simpleicons.org/icons/vercel.svg',
  'https://simpleicons.org/icons/tailwindcss.svg',
  'https://simpleicons.org/icons/github.svg',
  'https://simpleicons.org/icons/githubactions.svg',
  'https://simpleicons.org/icons/typescript.svg',
  'https://simpleicons.org/icons/slack.svg',
  'https://simpleicons.org/icons/jira.svg',
  'https://simpleicons.org/icons/daisyui.svg',
  'https://simpleicons.org/icons/awslambda.svg',
  'https://simpleicons.org/icons/amazonapigateway.svg',
  'https://simpleicons.org/icons/amazonroute53.svg',
  'https://simpleicons.org/icons/amazondynamodb.svg',
  'https://simpleicons.org/icons/amazonwebservices.svg',
  'https://simpleicons.org/icons/googlemaps.svg',
  'https://simpleicons.org/icons/amazons3.svg',
  'https://simpleicons.org/icons/amazoncloudwatch.svg',
  'https://simpleicons.org/icons/googlecloud.svg',
  'https://simpleicons.org/icons/python.svg',
  'https://simpleicons.org/icons/kfc.svg',
];

function IconCloudGraph() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden ">
      <IconCloud images={images} />
    </div>
  );
}

export default IconCloudGraph;
