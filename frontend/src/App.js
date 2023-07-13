import './App.scss';
import Header from './components/Header/Header';
import MainPage from './components/Main/Main';
import background from './img/spiderman-bg.jpg';
import logo from './img/header/Logo.svg';
import loop from './img/header/loop.svg'


function App() {
  return (
   <>
    <Header logo={logo} loop={loop}/>
    <MainPage backgroundImage={background} />
   </>
  );
}

export default App;
