import React from "react";
import { NavLink } from "react-router-dom";
// import '../CSS/Home.css'
import styled from "styled-components";
// import accessories from "../../Images/accessories.png";
// import collection from "../../Images/collection.png";



const LandingPage = () => {
  const imgFirst = [
    {
      url: `https://images.ctfassets.net/5de70he6op10/2UC2jkd3poP95pUuyOl1cx/aa23b4b9afcd023c55cb384fbe2abcff/495283960-ls_m0_banner_h.jpg?w=630&q=80&fm=webp`,
    },
    {
      url: `https://images.ctfassets.net/5de70he6op10/2o8R6MMVpzv466nDMhZ14f/5d7389d120918bcbade700028f81b7ea/495283955-ls_m0_banner_f.jpg?w=630&q=80&fm=webp`,
    },
    {
      url: `https://images.ctfassets.net/5de70he6op10/4D0NW5DTHFi1cR0APGc41P/8fbc412b98b6e342c8da7682543de0ef/495283959-ls_m0_banner_g.jpg?w=630&q=80&fm=webp`,
    },
    {
      url: `https://images.ctfassets.net/5de70he6op10/6hRc8ufeVdYL8wsaXj8EbZ/ffbb3d4fe1621e9570bbc403257d804f/495283952-ls_m0_banner_d.jpg?w=630&q=80&fm=webp`,
    },
  ];

  return (
    // 1 part goes here
    <Wrapper>
      <Content>
        <Header>
          {imgFirst.map((e, index) => (
            <TopGridImages key={index}>
              <NavLink key={index} to="">
                <img style={{ width: "100%" }} src={e.url} alt="img first" />
              </NavLink>
            </TopGridImages>
          ))}
        </Header>


        {/* 2nd part goes here */}
        <FirstContainer>
          <FirstDiv>
            <FirstImage>
              <NavLink to="">
                <img
                  style={{ width: "97.5%", height: "100%" }}
                  src="https://images.ctfassets.net/5de70he6op10/4wVzbSpI6ID8KcGVGU4YEg/0983e72b6e8fa8aec4bd1b76b018c683/495283964-ls_m1a.jpg?w=1760&q=80&fm=webp"
                  alt=""
                />
              </NavLink>
            </FirstImage>
            <SecondImage>
              <NavLink to="">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://images.ctfassets.net/5de70he6op10/535xsTiyC4DHGuvowscdeA/b0f5c8f7d2b6ec317ad2739a489f8601/495283970-ls_m1b.jpg?w=856&q=80&fm=webp"
                  alt=""
                />
              </NavLink>
            </SecondImage>
          </FirstDiv>
        </FirstContainer>


        {/* 3 part goes here */}
        <SecondDiv>
          <ThirdImage>
            <NavLink to="">
              <img
                style={{ width: "95%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/4YhzXIXeypS6qhwJwE1UmJ/aa8c79f62ee1de6392c60aee753a3fc9/495283974-ls_m2a.jpg?w=856&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </ThirdImage>
          <FourthImage>
            <NavLink to="">
              <img
                style={{ width: "95%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/7iqzbl2SU2BRRAKUn7bP3U/dacb672e6989fd6ef8c80ec49b4d9e8b/495283977-ls_m2b.jpg?w=856&q=80&fm=webp"
                alt=""
              />
              
            </NavLink>
          </FourthImage>

          <FifthImage>
            <NavLink to="">
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/5zq7dWhFEtMLPLDB57Ux9d/69811448499d79bc2d1a5b84f684a8f5/495283980-ls_m2c.jpg?w=856&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </FifthImage>
        </SecondDiv>

        {/* 4 part goes here */}
        <ThirdDiv>
          <SixImage>
            <NavLink to="">
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/5YVazy6p6NRSq5r0UJZyik/40ab870dc9b33c82e81a0dee81fee6e1/495283984-ls_m3.jpg?w=2641&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </SixImage>
        </ThirdDiv>

        {/* 5 part goes here */}
        <FourthDiv>
          <SevenImage>
            <NavLink to="">
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/7cPyxsIrQV6WIHCZ4qGrnR/093e4bc8c4ce99b42bc3f5674fca49ec/495283988-ls_m4.jpg?w=2641&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </SevenImage>
        </FourthDiv>

        {/* 6 part goes here */}
        <FifthDiv>
          <EightImage>
            <NavLink to="">
              <img
                style={{ width: "95%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/43C1TCeeAEUnsDDRLgIS7q/94e4d27159c9ad5c72dbc4f03859f707/495283997-ls_m5c.jpg?w=856&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </EightImage>
          <NineImage>
            <NavLink to="">
              <img
                style={{ width: "95%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/560llcm37aGBh39gIIRVie/5d1b36661eaa3f8116c3cddd4735e517/495283995-ls_m5b.jpg?w=856&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </NineImage>

          <TenImage>
            <NavLink to="">
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/5va7aIOLGeKyXaodGikTGr/487c74d412ca055b47ea834edfa7b937/495283991-ls_m5a.jpg?w=856&q=80&fm=webp"
                alt=""
              />

            </NavLink>
          </TenImage>
        </FifthDiv>

        <h3>Top-Rated Picks</h3>
        <br />
         <hr />
         <br />
        {/* 7 part goes here */}
        <SixDiv>
          <AkImage>
            <NavLink to="">
              <img
                style={{ width: "93%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/3aS4xJSPsRLSRYqOWOCy9M/1e43125c0d59f05646fb3b13ec391bf7/495283921-ls_customerfave_a.jpg?w=630&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </AkImage>
          <DoImage>
            <NavLink to="">
              <img
                style={{ width: "93%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/186VttmY6C7Y7xyqF5B83p/9abc3222cd23ed4ff9a386059b3950e7/495283935-ls_customerfave_b.jpg?w=630&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </DoImage>

          <TeenImage>
            <NavLink to="">
              <img
                style={{ width: "93%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/2KTwqZTJznCmy6a5zgoMrm/f9811948fec830ec99ba34625d82fa57/495283939-ls_customerfave_c.jpg?w=630&q=80&fm=webp"
                alt=""
              />
              
            </NavLink>
          </TeenImage>

          <CharImage>
            <NavLink to="">
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/5O2RvlPi3tOD2XmedRJ4RG/c9860ab711af82af5e9838db6a5e6131/495283942-ls_customerfave_d.jpg?w=630&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </CharImage>
        </SixDiv>

        <h3>More to Explore</h3>
        <br />
        <hr />
        <br />
        {/* 8 part goes here */}
        <SevenDiv>
          <PanchImage>
            <NavLink to="">
              <img
                style={{ width: "95%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/795jY9vsHgllpp6tBIpNlt/54269e8671d86ca24da2b49a10257fba/495284000-mte_1.jpg?w=856&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </PanchImage>
          <CheImage>
            <NavLink to="">
              <img
                style={{ width: "95%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/5I2jvcqlqyMhysLWGwcdzS/b92825853281f2fe530f106c720de29d/495284004-mte_2.jpg?w=856&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </CheImage>

          <SaatImage>
            <NavLink to="">
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/52jeOJDFZ1YX46tsXmaCAi/6f28bdddc510789e7bdf3406f54ad4cf/495284007-mte_3.jpg?w=856&q=80&fm=webp"
                alt=""
              />
            </NavLink>
          </SaatImage>
        </SevenDiv>
      </Content>
      {/* main end */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
  height: auto;

  @media (max-width:719px) {
    max-width: 100%;
    height: auto;
  }
  @media (max-width:720px) and (min-width: 1200px) {
    max-width: 100%;
  height: auto;
  }
`;

const Content = styled.div`
  max-width: 92%;
  margin: auto;
  height: auto;

  @media (max-width:719px) {
    max-width: 92%;
  margin: auto;
  height: auto;
  }
  @media (max-width:720px) and (min-width: 1200px) {
    max-width: 92%;
  margin: auto;
  height: auto;
  }
  
`;
// Top Div Part
const Header = styled.div`
  display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 0px 20px;

  @media (max-width:719px) {
    display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 0px 20px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 0px 20px;
  }
  
`;

const TopGridImages = styled.div`
  width: 100%;

  @media (max-width:719px) {
    width: 100%;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    width: 100%;
  }
`;

// First Div Part
const FirstContainer = styled.div`
  height: auto;

  @media (max-width:719px) {
    height: auto;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    height: auto;
  }
`;

const FirstDiv = styled.div`
  display: flex;
  max-width: 100%;
  height: auto;
  margin: 40px 0px;

  @media (max-width:719px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  max-width: 100%;
  height: auto;
  margin: 40px 0px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    display: flex;
  max-width: 100%;
  height: auto;
  margin: 40px 0px;
  }
  
`;

const FirstImage = styled.div`
  flex: 2;

  @media (max-width:719px) {
    flex: 2;
    margin-bottom:50px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    flex: 2;
  }
`;

// second
const SecondImage = styled.div`
  flex: 1;

  @media (max-width:719px) {
    flex: 1;
  }
  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }
  
`;
// third
const SecondDiv = styled.div`
  display: flex;
  max-width: 100%;
  height: auto;
  justify-content: space-between;
  /* border: 1px solid red; */
  margin: 40px 0px;

  @media (max-width:719px) {
    display: grid;
  max-width: 100%;
  height: auto;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  /* border: 1px solid red; */
  margin: 40px 0px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    display: flex;
  max-width: 100%;
  height: auto;
  justify-content: space-between;
  /* border: 1px solid red; */
  margin: 40px 0px;
  }
`;

const ThirdImage = styled.div`
  flex: 1;

  @media (max-width:719px) {
    flex: 1;
    margin-bottom:40px;
  }

  
  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }

`;

const FourthImage = styled.div`
  flex: 1;

  @media (max-width:719px) {
    flex: 1;
    margin-bottom:40px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }
  
`;

const FifthImage = styled.div`
  flex: 1;

  @media (max-width:719px) {
    flex: 1;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }
`;

// fourth
const ThirdDiv = styled.div`
  max-width: 100%;
  height: auto;
  margin: 40px 0px;

  @media (max-width:719px) {
    max-width: 100%;
  height: auto;
  margin: 40px 0px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    max-width: 100%;
  height: auto;
  margin: 40px 0px;
  }
`;

const SixImage = styled.div`
  flex: 1;

  
  @media (max-width:719px) {
    flex: 1;
  }
  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }
`;

const FourthDiv = styled.div`
  max-width: 100%;
  height: auto;
  margin: 40px 0px;

  @media (max-width:719px) {
    max-width: 100%;
  height: auto;
  margin: 40px 0px;
  }
  @media (max-width:720px) and (min-width: 1200px) {
    max-width: 100%;
  height: auto;
  margin: 40px 0px;
  }
`;

const SevenImage = styled.div`
  flex: 1;

  
`;

// third
const FifthDiv = styled.div`
  display: flex;
  max-width: 100%;
  height: auto;
  justify-content: space-between;
  margin: 40px 0px;

  @media (max-width:719px) {
    display: grid;
  max-width: 100%;
  height: auto;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  margin: 40px 0px;
  }
  @media (max-width:720px) and (min-width: 1200px) {
    display: flex;
  max-width: 100%;
  height: auto;
  justify-content: space-between;
  margin: 40px 0px;
  }
`;

const EightImage = styled.div`
  flex: 1;

  
  @media (max-width:719px) {
    flex: 1;
    margin-bottom:40px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }
`;

const NineImage = styled.div`
  flex: 1;

  
  @media (max-width:719px) {
    flex: 1;
    margin-bottom:40px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }
`;

const TenImage = styled.div`
  flex: 1;
`;

// forth
const SixDiv = styled.div`
  display: flex;
  max-width: 100%;
  height: auto;
  justify-content: space-between;
  margin: 40px 0px;

  @media (max-width:719px) {
    display: grid;
  max-width: 100%;
  height: auto;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  margin: 40px 0px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    display: flex;
  max-width: 100%;
  height: auto;
  justify-content: space-between;
  margin: 40px 0px;
  }
`;

const AkImage = styled.div`
  flex: 1;
  
  @media (max-width:719px) {
    flex: 1;
    margin-bottom:40px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }
  
`;

const DoImage = styled.div`
  flex: 1;
  
  @media (max-width:719px) {
    flex: 1;
    margin-bottom:40px;
  }
  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }
  
`;

const TeenImage = styled.div`
  flex: 1;
  
  @media (max-width:719px) {
    flex: 1;
    margin-bottom:40px;
  }
  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }
`;

const CharImage = styled.div`
  flex: 1;
  
`;

const SevenDiv = styled.div`
  display: flex;
  max-width: 100%;
  height: auto;
  justify-content: space-between;
  margin: 40px 0px;

  
  @media (max-width:719px) {
    display: grid;
  max-width: 100%;
  height: auto;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  margin: 40px 0px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    display: grid;
  max-width: 100%;
  height: auto;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  margin: 40px 0px;
  }
`;

const PanchImage = styled.div`
  flex: 1;
  
  @media (max-width:719px) {
    flex: 1;
    margin-bottom:40px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }
`;

const CheImage = styled.div`
  flex: 1;
  
  @media (max-width:719px) {
    flex: 1;
    margin-bottom:40px;
  }

  @media (max-width:720px) and (min-width: 1200px) {
    flex: 1;
  }
  
`;

const SaatImage = styled.div`
  flex: 1;
`;


export default LandingPage;
