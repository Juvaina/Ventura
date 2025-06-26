import { useEffect, useState } from 'react';
import featureData from '../data/featureRequests.json';
import type { FeatureRequest } from '../models/FeatureRequest';
import GetDaysAgo from '../util/heper';
import FeatureStatus from './FeatureStatus';
import FeatureView from './FeatureView';
import VoteBox from './VoteBox';

export const FeatureList = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureRequest | null>(
    null
  );

  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedFeature]);

  return (
    <>
      <div className='flex flex-col gap-0.5'>
        {featureData.map((feature: FeatureRequest, index: number) => (
          <div
            onClick={() => setSelectedFeature(feature)}
            key={index}
            className='border-gray-200 border-t p-0 py-6 md:p-6 hover:bg-gray-100/50 cursor-pointer'
          >
            <div className='flex gap-5 pb-3'>
              <VoteBox voteCount={feature.count} />

              <div className='basis-[70%] md:basis-[90%] flex flex-col justify-start gap-1'>
                <div className='flex gap-3'>
                  <h2 className='font-semibold text-md md:text-xl'>
                    {feature.title} &nbsp;{' '}
                    <FeatureStatus status={feature.status} />
                  </h2>
                </div>
                <p
                  className='text-gray-500 text-sm tracking-wide line-clamp-3'
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
              </div>
            </div>

            <div className='flex'>
              <div className='basis-[30%] md:basis-[10%]'></div>
              <span className='text-xs md:text-sm text-gray-600 basis-[30%] md:basis-[40%] md:ml-5'>
                #{feature.topic}
              </span>
              <div className='flex justify-end basis-[40%] md:basis-[50%]'>
                <span className='text-gray-600 font-semibold text-xs md:text-sm'>
                  {feature.name}
                </span>
                <span className='text-gray-600 mx-2'>•</span>
                <span className='text-gray-500 text-xs md:text-sm'>
                  {GetDaysAgo(feature.date)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FeatureView
        isOpen={!!selectedFeature}
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </>
  );
};

export default FeatureList;
