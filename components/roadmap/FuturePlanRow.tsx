import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  children: ReactNode;
  reverse?: boolean;
  explore?: ReactNode;
}

function FuturePlanRow({
  title,
  description,
  reverse = false,
  explore = undefined,
  children,
}: Props) {
  const renderExplore = () => {
    if (!explore) {
      return null;
    }
    return (
      <div className="mt-10 lg:mt-6 justify-self-center lg:justify-self-start">
        {explore}
      </div>
    );
  };

  return (
    <div className={`${reverse ? 'flex-row-reverse' : ''} mt-20 flex flex-wrap items-center justify-evenly`}>

      <div className="w-4/5 lg:w-2/5 flex justify-center p-6">
        <div className="avatar">
          <div className="w-full">
            {children}
          </div>
        </div>
      </div>

      <div className="w-4/5 lg:w-3/5 sm:px-6">
        <h3 className="text-xl font-semibold text-neutral-700 lg:text-3xl text-center lg:text-left">{title}</h3>
        <div className="mt-6 text-base  text-neutral-700 leading-6 lg:text-lg text-center lg:text-left">
          {description}
        </div>
        {renderExplore()}
      </div>

    </div>
  );
}

export default FuturePlanRow;
