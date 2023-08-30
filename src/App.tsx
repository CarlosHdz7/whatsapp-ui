import './App.css';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
