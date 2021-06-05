import { Route } from 'react-router-dom'
import './App.css';
import Header from '../../components/header/header';
import About from '../About/About';
import Home from '../Home/Home';
import Products from '../Products/Products';
// import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Route path="/about" exact component={About}></Route>
        <Route path="/products" exact component={Products}></Route>
      </section>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App
