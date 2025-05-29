import featureData from '../data/featureRequests.json';
import type { FeatureRequest } from '../models/FeatureRequest';
import FeatureStatus from './FeatureStatus';

const getDaysAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  return `${days} days ago`;
};

export const FeatureList = () => {
  return (
    <div className='flex flex-col gap-0.5'>
      {featureData.map((feature: FeatureRequest, index: number) => (
        <div className='border-gray-200 border-t p-6 hover:bg-gray-100/50 cursor-pointer'>
          <div className='flex gap-5 pb-3' key={index}>
            <div className='flex flex-col items-center justify-centerbox-border place-content-center border-2 p-2 rounded-xl border-gray-200 basis-[10%] hover:border-gray-400 '>
              <span className='font-semibold text-2xl'>{feature.count}</span>
              <span className='text-sm border-t border-gray-200'>Vote</span>
            </div>

            <div className='basis-[90%] flex flex-col justify-start gap-1'>
              <div className='flex gap-3'>
                <h2 className='font-semibold text-xl'>{feature.title}</h2>
                <FeatureStatus status={feature.status} />
              </div>
              <p className='text-gray-500 text-[15px] tracking-wide text-base/5.5 line-clamp-2'>
                {feature.description}
              </p>
            </div>
          </div>
          <div className='pl-26 flex justify-between'>
            <span className='text-sm text-gray-600'>#{feature.topic}</span>
            <div className='flex justify-end'>
              <span className='text-gray-600 font-semibold text-sm'>
                {feature.name}
              </span>
              <span className='text-gray-600 mx-2'>•</span>
              <span className='text-gray-500 text-sm'>
                {getDaysAgo(feature.date)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
