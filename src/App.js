
import './App.css';
// import Benifit from './components/Benifit/Benifit';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-6xl'>Welcome to my pricing club</h1>
      <Pricing></Pricing>
      {/* <Benifit></Benifit> */}
    </div>
  );
}

export default App;
