import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Route, Link, Redirect } from 'react-router-dom';

// hooks
import useProjects from '../../hook/useProjects';
import { StateContext } from '../../store/index';

// components
import ProjectsBanner from '../../components/ProjectsBanner/ProjectsBanner';
import Container from '../../components/Container/Container';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';

function Projects(props) {
  const [showProjectDetail, setShowProjectDetail] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [projectDetail, setProjectDetail] = useState(null);
  const [state] = useContext(StateContext);
  const { fetchProjects } = useProjects();
  const pageProjectPath = state.routes.Projects.url;

  const clickProject = (data) => {
    setShowProjectDetail(true);
    setProjectDetail(data);
  };

  const closeModal = () => {
    setShowProjectDetail(false);
    setProjectDetail(null);
    props.history.push(pageProjectPath);
  };

  useEffect(() => {
    if (!state.projects || state.projects.length <= 0) { fetchProjects(); }
  }, [fetchProjects, state]);

  useEffect(() => {
    const pathArr = props.location.pathname.split('/');
    let currentProjectIndex = -1;
    if (pathArr[2] && state.projects) {
      currentProjectIndex = state.projects.map((item) => item.name).indexOf(pathArr[2]);
      if (currentProjectIndex !== -1) {
        clickProject(state.projects[currentProjectIndex]);
      } else {
        setIsRedirect(true);
      }
    }
  }, [state.projects, props, pageProjectPath]);

  if (isRedirect) {
    return <Redirect to={pageProjectPath} />;
  }

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
                    <Link
                      to={`${pageProjectPath}/${data.name}`}
                      key={`prjoect-${data.name}`}
                      onClick={() => { clickProject(data); }}
                    >
                      <ProjectCard data={data} />
                    </Link>
                  ))
                }
              </ProjectsWrapper>
            )
            : null
        }
        {
          (showProjectDetail && projectDetail)
          && (
            <Route exact path={`${pageProjectPath}/:name`}
              render={ () => (
                <ProjectModal
                  data={projectDetail}
                  clickClose={closeModal}
                />
              )}
            />
          )
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
