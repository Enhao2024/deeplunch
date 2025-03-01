import NonFunctionalEntrance from '@/components/layout/NonFunctionalEntrance';
import IconCloudGraph from '@/components/thanks/IconCloudGraph';
import PoweredBy from '@/components/thanks/PoweredBy';
import { TextAnimate } from '@/components/ui/magicui/text-animate';

export default function page() {
  return (
    <NonFunctionalEntrance custom="my-40 flex flex-col items-center">
      <div className="flex flex-col items-center my-4">
        <TextAnimate animation="slideLeft" by="character" className="pt-8 pb-16 text-4xl lg:text-6xl font-bold text-neutral-700 text-center">
          Special Thanks
        </TextAnimate>
        <TextAnimate animation="fadeIn" by="line" as="p" className="py-4 text-lg font-semibold text-neutral-700 text-center w-3/5 lg:w-full">
          {'This project is made possible by the incredible technologies and open-source community.\n\n'
            + 'A heartfelt thank you to all the developers and contributors\n\n'
            + 'who make these magics available.'}
        </TextAnimate>
      </div>
      <div className="flex flex-col justify-between items-center space-y-16 max-w-3xl">
        <IconCloudGraph />
      </div>
      <div className="mt-16 w-3/4">
        <PoweredBy />
      </div>
    </NonFunctionalEntrance>
  );
}
