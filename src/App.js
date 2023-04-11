
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Shop from './views/Shop';

function App() {

  return (

    <div className="App">
      <Nav />
      <Routes>
        {/*  any 'page' of our app can be defined as a route here */}
        <Route children path='/' element={<Home />} />
        <Route children path='/shop' element={<Shop />} />

      </Routes>

    </div>
  );
}

export default App;
