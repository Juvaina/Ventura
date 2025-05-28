import featureData from '../data/featureRequests.json';
import type { FeatureRequest } from '../models/FeatureRequest';

export const FeatureList = () => {
  return (
    <div className='flex flex-col gap-0.5'>
      {featureData.map((feature: FeatureRequest, index: number) => (
        <div
          className='flex gap-5 p-8 border-gray-200 border-t hover:bg-gray-100/50 cursor-pointer'
          key={index}
        >
          <div className='flex items-center justify-centerbox-border place-content-center border-2 p-4 rounded border-gray-300 basis-[8%] font-semibold text-xl'>
            {feature.count}
          </div>

          <div className='basis-[92%] flex flex-col justify-start gap-1'>
            <h2 className='font-semibold text-xl'>{feature.title}</h2>
            <p className='text-gray-500 text-[15px] tracking-wide text-base/7 line-clamp-2'>
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
