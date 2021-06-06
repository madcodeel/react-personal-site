import { useEffect, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// hooks
import useProjects from '../../hook/useProjects';
import { StateContext } from '../../store/index';

// components
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import Container from '../../components/Container/Container';
import FeatureCard from '../../components/FeatureCard/FeatureCard';

function Home() {
  const [state] = useContext(StateContext);
  const pageProjectPath = state.routes.Projects.url;

  const { fetchProjects } = useProjects();

  useEffect(() => {
    if (!state.projects || state.projects.length <= 0) { fetchProjects(); }
    return (() => {
      window.scrollTo(0, 0);
    });
  }, [fetchProjects, state]);

  const featureProjects = useMemo(() => {
    if (state.projects) {
      return state.projects.filter((project) => project.feature).sort((a, b) => (b.order - a.order));
    }
    return null;
  }, [state]);

  return (
    <div className="home">
      <Container>
        <HomeBanner
          text="WELCOME TO THE PORTFOLIO OF ELROY TSAI, WHO HAS PASSION FOR DIGITAL PRODUCTS."
          textPadding="20px 50px 200px 30px"
        ></HomeBanner>
        {
          featureProjects
            && (featureProjects.map((item, i) => (
              <FeatureItem key={`feature-card-${item.name}`}
                as={Link}
                to={pageProjectPath}
              >
                <FeatureCard
                  img={item.img.thumb}
                  name={item.name}
                  reverse={i % 2 !== 0}
                />
              </FeatureItem>
            )))
        }
      </Container>
    </div>
  );
}

const FeatureItem = styled.div`
  display: block;
  margin-bottom: 145px;
`;

export default Home;
