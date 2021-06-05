import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProjectsBanner from '../../components/ProjectsBanner/ProjectsBanner';
import Container from '../../components/Container/Container';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    axios.get('/json/projects.json')
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Projects">
      <Container>
        <ProjectsBanner
          text="Projects"
        ></ProjectsBanner>
        {
          projects && projects.length > 0
            ? (
              <ProjectsWrapper>
                {
                  projects.map((data) => <ProjectCard img={data.img.thumb} title={data.name} key={`prjoect-${data.name}`} />)
                }
              </ProjectsWrapper>
            )
            : null
        }
      </Container>
    </div>
  );
}

const ProjectsWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  margin-bottom: 98px;
`;

export default Projects;
