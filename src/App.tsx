import './App.css';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="flex w-full h-screen bg-gray-100 p-5 box-border relative">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
