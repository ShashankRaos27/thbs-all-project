import HeaderLayout from './layout/HeaderLayout';
import FooterLayout from './layout/FooterLayout';
import MainLayout from './layout/MainLayout';
import './App.css';

function App() {
  return (
    <div className="App">
     <HeaderLayout></HeaderLayout>
      <br></br>

      <MainLayout></MainLayout>
      <FooterLayout></FooterLayout>
    </div>
  );
}

export default App;
