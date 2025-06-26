import { IconX } from '@tabler/icons-react';
import type { FeatureRequest } from '../models/FeatureRequest';
import GetDaysAgo from '../util/heper';
import FeatureStatus from './FeatureStatus';
import VoteBox from './VoteBox';

interface FeatureViewProps {
  isOpen: boolean;
  feature: FeatureRequest | null;
  onClose: () => void;
}

const FeatureView = ({ isOpen, feature, onClose }: FeatureViewProps) => {
  const handleOutsideClick = () => {
    onClose();
  };

  if (!isOpen || !feature) return null;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/50 transition-opacity duration-300 z-40`}
        onClick={handleOutsideClick}
      />

      <div
        className={`fixed top-0 right-0 w-full md:w-1/2 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='h-full overflow-y-auto p-4'>
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-gray-400 hover:text-black/70 transition'
            aria-label='Close'
          >
            <IconX size={28} />
          </button>

          <div className='border-gray-200 p-0 py-6 md:p-6 cursor-pointer mt-5'>
            <div className='md:flex gap-5 pb-3'>
              <VoteBox voteCount={feature.count} />
              <div className='basis-[70%] md:basis-[90%] flex flex-col justify-start gap-1'>
                <div className='flex gap-3'>
                  <h2 className='font-semibold text-md md:text-2xl'>
                    {feature.title}
                  </h2>
                </div>

                <div
                  className='text-gray-500 text-md tracking-wide mt-2 text-justify'
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
            </div>

            <div className='flex mt-2'>
              <div className='basis-[30%] md:basis-[10%]'></div>
              <span className='text-gray-600 font-semibold text-md md:ml-5'>
                {feature.name}
              </span>
              <span className='text-gray-600 mx-2'>•</span>
              <span className='text-gray-500 text-md'>
                {GetDaysAgo(feature.date)}
              </span>
            </div>

            <div className='flex mt-5'>
              <div className='basis-[30%] md:basis-[10%]'></div>
              <div className='text-md text-gray-600 basis-[30%] md:basis-[40%] md:ml-5'>
                <span className='mr-5'>#{feature.topic}</span>
                <FeatureStatus status={feature.status} />
              </div>
            </div>

            <div className='relative mt-10'>
              <textarea
                placeholder='Write a comment...'
                className='w-full p-4 pr-14 inset-shadow-sm shadow-md hover:shadow-xl rounded-md resize-none focus:outline-none'
                rows={4}
              />
              <button className='absolute bottom-2 right-2 p-2 bg-red-700 mb-2 rounded-md px-4 text-white hover:bg-red-800 cursor-pointer font-semibold transition'>
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureView;
