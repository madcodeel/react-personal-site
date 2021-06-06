import { useContext, useEffect, useMemo } from 'react';
import styled from 'styled-components';

// hooks
import useAbout from '../../hook/useAbout';
import { StateContext } from '../../store/index';

// components
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Container from '../../components/Container/Container';
import Memorabilia from '../../components/Memorabilia/Memorabilia';
import Title from '../../components/Text/Title';
import Paragraph from '../../components/Text/Paragraph';
import HeadSticker from '../../components/HeadSticker/HeadSticker';

function About() {
  const [state] = useContext(StateContext);
  const { fetchAbout } = useAbout();

  useEffect(() => {
    if (!state.about) { fetchAbout(); }
  }, [fetchAbout, state]);

  const experience = useMemo(() => {
    if (state.about) {
      return state.about.experience;
    }
    return null;
  }, [state]);

  const pageData = useMemo(() => {
    if (state.about) {
      return state.about.pageData;
    }
    return null;
  }, [state]);

  return (
    <Container>
      <Section>
        <AboutBanner
          text="RECOGNIZING THE NEED IS THE PRIMARY CONDITION FOR DESIGN."
        ></AboutBanner>
      </Section>
      <Section>
        <Memorabilia
          title="Experience"
          data={experience}
        />
      </Section>
      {
        pageData && pageData.intro
          ? (
            <>
              <IntroSection>
                <Title text={pageData.intro.title} />
                <Paragraph text={pageData.intro.content} />
              </IntroSection>
              <StickSection>
                <HeadSticker
                  title="Hello"
                  img={pageData.intro.image}
                />
              </StickSection>
            </>
          )
          : null
      }
    </Container>
  );
}

const Section = styled.section`
  margin-bottom: 95px;
`;

const IntroSection = styled(Section)`
  max-width: 664px;
  margin-left: auto;
  margin-right: 100px;
`;

const StickSection = styled(Section)`
  max-width: 480px;
`;

export default About;
