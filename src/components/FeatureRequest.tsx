import { useEffect, useState } from 'react';
import FeatureList from './FeatureList';
import Offcanvas from './OffCanvas';

const FeatureRequests = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className='flex py-5 md:py-8 mx-auto flex-col min-w-0'>
        <div className='flex flex-col w-full px-5'>
          <div className='flex gap-5 items-center justify-between mb-5 sticky top-0 mt-15 md:mt-0  bg-white py-4'>
            <h1 className='text-xl md:text-4xl font-bold'>Feature Ideas</h1>
            <button
              onClick={() => setIsOpen(true)}
              className='bg-red-700 p-2 rounded-md px-4 text-white hover:bg-red-800 cursor-pointer font-semibold'
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

export default FeatureRequests;
