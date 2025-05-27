const FeatureCard = () => {
  return (
    <div className='flex py-5 md:py-8 mx-auto flex-col min-w-0 w-5xl'>
      <div className='flex flex-col w-full px-5'>
        <div className='flex gap-5 items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Feature Ideas</h1>
          <button className='bg-red-300'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
