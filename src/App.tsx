import FeatureRequest from "./components/FeatureRequest";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="grid lg:grid-cols-[20%_80%] md:grid-cols-[30%_70%] sm:grid-cols-1">
      <Sidebar />
      <main className="max-w-5xl mx-auto">
        <FeatureRequest />
      </main>
    </div>
  );
}

export default App;
