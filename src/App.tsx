import FeatureCard from './components/FeatureCard';

function App() {
  return (
    <div className='grid grid-cols-[20%_80%]'>
      <div className='bg-gray-400 h-screen'>Sidebar</div>
      <main className='max-w-7xl mx-auto'>
        <FeatureCard />
      </main>
    </div>
  );
}

export default App;
