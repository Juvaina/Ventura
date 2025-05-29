import FeatureCard from './components/FeatureCard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='grid grid-cols-[20%_80%]'>
      <Sidebar />
      <main className='max-w-7xl mx-auto'>
        <FeatureCard />
      </main>
    </div>
  );
}

export default App;
