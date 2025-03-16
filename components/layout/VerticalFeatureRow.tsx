import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  imageAttrs?: string;
  fullRounded?: boolean;
  reverse?: boolean;
  explore?: ReactNode;
}

function VerticalFeatureRow({
  title,
  description,
  image,
  imageAlt = '',
  reverse = false,
  explore = undefined,
  fullRounded = false,
  imageAttrs = '',
}: Props) {
  const renderExplore = () => {
    if (!explore) {
      return null;
    }
    return (
      <div className="mt-6 justify-self-center lg:justify-self-start">
        {explore}
      </div>
    );
  };

  return (
    <div className={`${reverse ? 'flex-row-reverse' : ''} mt-20 flex flex-wrap items-center justify-evenly`}>

      <div className="w-4/5 lg:w-2/5 flex justify-center p-6">
        <div className="avatar">
          <div className={`w-full ${fullRounded ? 'rounded-full' : ''}`}>
            <img className={imageAttrs} src={image} alt={imageAlt} />
          </div>
        </div>
      </div>

      <div className="w-4/5 lg:w-3/5 sm:px-6">
        <h3 className="text-xl font-semibold text-neutral-700 lg:text-3xl text-center lg:text-left">{title}</h3>
        <div className="mt-6 text-base leading-6 lg:text-lg text-neutral-700 text-center lg:text-left">
          {description}
        </div>
        {renderExplore()}
      </div>

    </div>
  );
}

export default VerticalFeatureRow;
