import HomeBanner from '../../components/HomeBanner/HomeBanner';
import Container from '../../components/Container/Container';

function Home() {
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
