import { useState } from 'react';
import featureData from '../data/featureRequests.json';
import type { FeatureRequest } from '../models/FeatureRequest';
import FeatureStatus from './FeatureStatus';
import VoteBox from './VoteBox';

const getDaysAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  return `${days} days ago`;
};

const ITEMS_PER_PAGE = 5;

export const FeatureList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(featureData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedFeatures = featureData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className='flex flex-col gap-0.5'>
      {paginatedFeatures.map((feature: FeatureRequest, index: number) => (
        <div
          key={index}
          className='border-gray-200 border-t p-6 hover:bg-gray-100/50 cursor-pointer'
        >
          <div className='flex gap-5 pb-3'>
            <VoteBox voteCount={feature.count} />

            <div className='basis-[90%] flex flex-col justify-start gap-1'>
              <div className='flex gap-3'>
                <h2 className='font-semibold text-xl'>{feature.title}</h2>
                <FeatureStatus status={feature.status} />
              </div>
              <p className='text-gray-500 text-sm tracking-wide line-clamp-2'>
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

      {/* Pagination Controls */}
      <div className='flex justify-center items-center gap-4 mt-4'>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className='px-4 py-2 border rounded disabled:opacity-50 cursor-pointer'
        >
          Prev
        </button>
        <span className='text-sm text-gray-700'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className='px-4 py-2 border rounded disabled:opacity-50 cursor-pointer'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FeatureList;
