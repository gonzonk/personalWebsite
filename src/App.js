import background from './assets/orangeBlackFuiterAurora.jpeg'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: '100vw'}}>
      <Header></Header>
      <Nav> </Nav>
      <Main></Main>
      <Footer></Footer>
      <div style={{height: '95vh'}}></div>
    </div>
  );
}

export default App;
