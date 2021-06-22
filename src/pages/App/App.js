import './App.css';
import { Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import projects from '../Projects/Projects';
import { StateContext, InitContextState } from '../../store/index';

function App() {
  const state = InitContextState();

  return (
    <StateContext.Provider value={state}>
      <ThemeProvider theme={{ colors: state[0].colors }}>
        <AppDom>
          <Header />
          <Route path="/home" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/projects" component={projects}></Route>
          <Footer />
        </AppDom>
      </ThemeProvider>
    </StateContext.Provider>
  );
}

const AppDom = styled.div`
  background-color: ${(props) => props.theme.colors.main};
`;

export default withRouter(App);
