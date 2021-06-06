import { useEffect, useContext } from 'react';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import Container from '../../components/Container/Container';
import useProjects from '../../hook/useProjects';
import { StateContext } from '../../store/index';

function Home() {
  const [state] = useContext(StateContext);

  const { fetchProjects } = useProjects();

  useEffect(() => {
    if (!state.projects || state.projects.length <= 0) { fetchProjects(); }
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="home">
      <Container>
        <HomeBanner
          text="WELCOME TO THE PORTFOLIO OF ELROY TSAI, WHO HAS PASSION FOR DIGITAL PRODUCTS."
          textPadding="20px 50px 200px 30px"
        ></HomeBanner>
      </Container>
    </div>
  );
}

export default Home;
