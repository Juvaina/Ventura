import React, { useState } from 'react';

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const Offcanvas: React.FC<OffcanvasProps> = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleOutsideClick = () => {
    onClose();
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic === selectedTopic ? null : topic); // toggle
  };

  const topics = ['Improvement', 'New Feature', 'Styling', 'Bug Report'];

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-1/2 h-full bg-black/50 transition ease-in-out duration-300 ${
          isOpen ? '-translate-x-0' : '-translate-x-full'
        }`}
        onClick={handleOutsideClick}
      ></div>
      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-white shadow-lg z-50 transition ease-in-out duration-300 p-4 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={onClose}
          className='text-gray-500 hover:text-red-500 text-2xl float-right me-8 p-1 cursor-pointer'
        >
          x
        </button>
        <div className='flex flex-col gap-10 w-full p-8'>
          <h2 className='text-2xl font-semibold'>Tell us your Idea!</h2>
          <input
            type='text'
            placeholder='Title'
            className='border border-gray-300 p-3 rounded-xl w-full mb-4'
          />
          <textarea
            placeholder='Description'
            className='border border-gray-300 p-3 rounded-xl w-full h-40 resize-none mb-4'
          />
          <div className='mb-4'>
            <p className='font-medium'>
              Choose <strong>one</strong> Topic
            </p>
            <div className='flex gap-2 flex-wrap mt-2'>
              {topics.map((tag) => (
                <span
                  key={tag}
                  onClick={() => handleTopicClick(tag)}
                  className={`border px-3 py-1 rounded-full text-sm cursor-pointer ${
                    selectedTopic === tag
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className='bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 self-start font-medium'>
            Submit Idea
          </button>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
