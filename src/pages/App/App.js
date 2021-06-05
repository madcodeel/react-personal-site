import './App.css';
import { useContext } from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import About from '../About/About';
import Home from '../Home/Home';
import projects from '../Projects/Projects';
import Context from '../../store/index';

function App() {
  const context = useContext(Context);
  return (
    <ThemeProvider theme={context.colors}>
      <AppDom>
        <Header />
        <Route path="/home" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/projects" exact component={projects}></Route>
        <Footer />
      </AppDom>
    </ThemeProvider>
  );
}

const AppDom = styled.div`
  background-color: ${(props) => props.theme.main};
`;

export default withRouter(App);
