import { useState } from 'react';

const VoteBox = ({ voteCount }: { voteCount: number }) => {
  const [count, setCount] = useState(voteCount);
  const [vote, setVote] = useState(false);

  const handleClick = () => {
    if (vote) {
      setCount((prev) => prev - 1);
    } else {
      setCount((prev) => prev + 1);
    }
    setVote(!vote);
  };
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center select-none justify-center outline-1 rounded-lg basis-[10%] group ${
        vote
          ? 'bg-blue-600/10 outline-blue-500/80'
          : 'outline-gray-200 hover:outline-gray-400'
      } `}
    >
      <span className='font-semibold text-2xl p-2 animation-bounce'>
        {count}
      </span>
      <span
        className={`flex-1 flex items-center justify-center text-xs rounded-b-lg text-white w-full bg-blue-500/80 transition ease-in-out duration-200  group-hover:bg-blue-700/90`}
      >
        {vote ? 'Voted' : 'Vote'}
      </span>
    </div>
  );
};

export default VoteBox;
