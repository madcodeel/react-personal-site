import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ProjectsBanner from '../../components/ProjectsBanner/ProjectsBanner';
import Container from '../../components/Container/Container';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import useProjects from '../../hook/useProjects';
import { StateContext } from '../../store/index';

function Projects() {
  const [showProjectDetail, setShowProjectDetail] = useState(false);
  const [projectDetail, setProjectDetail] = useState(null);
  const [state] = useContext(StateContext);
  const { fetchProjects } = useProjects();

  useEffect(() => {
    if (!state.projects || state.projects.length <= 0) { fetchProjects(); }
  }, []);

  const clickProject = (data) => {
    setShowProjectDetail(true);
    setProjectDetail(data);
  };

  const closeModal = () => {
    setShowProjectDetail(false);
    setProjectDetail(null);
  };

  return (
    <div className="Projects">
      <Container>
        <ProjectsBanner
          text="Projects"
        ></ProjectsBanner>
        {
          state.projects && state.projects.length > 0
            ? (
              <ProjectsWrapper>
                {
                  state.projects.map((data) => (
                    <ProjectCard
                      key={`prjoect-${data.name}`}
                      data={data}
                      onClick={clickProject}
                    />))
                }
              </ProjectsWrapper>
            )
            : null
        }
        {
          (showProjectDetail && projectDetail)
          && (<ProjectModal
            data={projectDetail}
            clickClose={closeModal}
          />)
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
