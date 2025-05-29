import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';

const Sidebar = () => {
  const [showStatuses, setShowStatuses] = useState(true);
  const [showTopics, setShowTopics] = useState(true);

  return (
    <div className='bg-gray-100/70 p-10 h-screen overflow-y-auto'>
      <div className='flex flex-col shrink-0'>
        <div className='flex flex-col gap-1'>
          <button
            className='flex items-center justify-between h-10 px-3 cursor-pointer'
            onClick={() => setShowStatuses(!showStatuses)}
          >
            <span className='text-gray-500 text-xl font-semibold'>
              Statuses
            </span>
            <span>
              {showStatuses ? (
                <IconChevronDown size={18} />
              ) : (
                <IconChevronUp size={18} />
              )}
            </span>
          </button>
          <ul className='flex flex-col gap-1 list-none'>
            <li>
              <button className='w-full py-2 px-4 rounded hover:bg-gray-200 text-black/70 self-start font-semibold text-xl'>
                Items
              </button>
            </li>
            <li>
              <button className='w-full py-2 px-4 rounded hover:bg-gray-200 text-black/70 self-start font-semibold text-xl'>
                Items
              </button>
            </li>
            <li>
              <button className='w-full py-2 px-4 rounded hover:bg-gray-200 text-black/70 self-start font-semibold text-xl'>
                Items
              </button>
            </li>
            <li>
              <button className='w-full py-2 px-4 rounded hover:bg-gray-200 text-black/70 self-start font-semibold text-xl'>
                Items
              </button>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-1'>
          <button
            className='flex items-center justify-between h-10 px-3 cursor-pointer'
            onClick={() => setShowTopics(!showTopics)}
          >
            <span className='text-gray-500 text-xl font-semibold'>Topics</span>
            <span>
              {showTopics ? (
                <IconChevronDown size={18} />
              ) : (
                <IconChevronUp size={18} />
              )}
            </span>
          </button>
          <ul className='flex flex-col gap-1 list-none'>
            <li>
              <button className='w-full py-2 px-4 rounded hover:bg-gray-200 text-black/70 self-start font-semibold text-xl'>
                Items
              </button>
            </li>
            <li>
              <button className='w-full py-2 px-4 rounded hover:bg-gray-200 text-black/70 self-start font-semibold text-xl'>
                Items
              </button>
            </li>
            <li>
              <button className='w-full py-2 px-4 rounded hover:bg-gray-200 text-black/70 self-start font-semibold text-xl'>
                Items
              </button>
            </li>
            <li>
              <button className='w-full py-2 px-4 rounded hover:bg-gray-200 text-black/70 self-start font-semibold text-xl'>
                Items
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
