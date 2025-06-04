import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';
import Logo from '../assets/HDB Logo.jpg';

const statuses = [
  { label: 'Under consideration' },
  { label: 'Planned' },
  { label: 'In Progress' },
  { label: 'Under Review' },
  { label: 'Completed' }
];

const topics = [
  { label: 'Welcome', count: 5 },
  { label: 'Improvement', count: 3 },
  { label: 'Integrations', count: 1 },
  { label: 'Styling', count: 2 }
];

const Sidebar = () => {
  const [showStatuses, setShowStatuses] = useState(true);
  const [showTopics, setShowTopics] = useState(true);

  return (
    <aside className='bg-gray-50 p-6 h-full overflow-y-auto shadow-inner border-r border-gray-200 flex flex-col'>
      <div className='mb-8 flex items-center justify-center'>
        <img src={Logo} alt='Logo' />
      </div>

      <div className='space-y-6'>
        <div>
          <button
            onClick={() => setShowStatuses(!showStatuses)}
            className='w-full flex items-center justify-between py-2 px-4 rounded-md text-gray-700 font-medium text-lg hover:bg-gray-100 focus-visible:outline-none'
          >
            <span>Statuses</span>
            {showStatuses ? (
              <IconChevronDown size={20} />
            ) : (
              <IconChevronUp size={20} />
            )}
          </button>

          {showStatuses && (
            <ul className='mt-2 space-y-1'>
              {statuses.map((status, idx) => (
                <li key={idx}>
                  <button className='w-full text-sm text-left py-2 px-4 rounded-md hover:bg-gray-200 text-gray-800 font-medium focus-visible:outline-none'>
                    {status.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <button
            onClick={() => setShowTopics(!showTopics)}
            className='w-full flex items-center justify-between py-2 px-4 rounded-md text-gray-700 font-medium text-lg hover:bg-gray-100 focus-visible:outline-none'
          >
            <span>Topics</span>
            {showTopics ? (
              <IconChevronDown size={20} />
            ) : (
              <IconChevronUp size={20} />
            )}
          </button>

          {showTopics && (
            <ul className='mt-2 space-y-1'>
              {topics.map((topic, idx) => (
                <li key={idx}>
                  <button className='w-full text-sm flex justify-between items-center py-2 px-4 rounded-md hover:bg-gray-200 text-gray-800 font-medium focus-visible:outline-none'>
                    <span>{topic.label}</span>
                    <span className='bg-gray-300 text-sm text-gray-800 rounded-full px-2 py-0.5'>
                      {topic.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
