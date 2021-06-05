import ProjectsBanner from '../../components/ProjectsBanner/ProjectsBanner';
import Container from '../../components/Container/Container';

function Projects() {
  return (
    <div className="Projects">
      <Container>
        <ProjectsBanner
          text="Projects"
        ></ProjectsBanner>
      </Container>
    </div>
  );
}

export default Projects;
