import { useState } from 'react';
import FeatureList from './FeatureList';
import Offcanvas from './OffCanvas';

const FeatureCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className='flex py-5 md:py-8 mx-auto flex-col min-w-0 w-4xl'>
        <div className='flex flex-col w-full px-5'>
          <div className='flex gap-5 items-center justify-between mb-10'>
            <h1 className='text-4xl font-bold'>Feature Ideas</h1>
            <button
              onClick={() => setIsOpen(true)}
              className='bg-pink-600 p-2 rounded-md px-2 text-white font-semibold hover:bg-pink-500 cursor-pointer'
            >
              Submit Idea
            </button>
          </div>

          <FeatureList />
        </div>
      </div>
      <Offcanvas isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default FeatureCard;
