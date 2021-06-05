import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Container from '../../components/Container/Container';
import Memorabilia from '../../components/Memorabilia/Memorabilia';
import Title from '../../components/Text/Title';
import Paragraph from '../../components/Text/Paragraph';
import HeadSticker from '../../components/HeadSticker/HeadSticker';

function About() {
  const [experience, setExperience] = useState(null);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const getExperience = axios.get('/json/experience.json');
    const getPageData = axios.get('/json/page-about.json');

    axios.all([getExperience, getPageData])
      .then((res) => {
        const resExperience = res[0].data;
        const resPageData = res[1].data;
        setExperience(resExperience);
        setPageData(resPageData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
