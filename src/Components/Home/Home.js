import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addData } from "../ReduxState/GlobalState";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const [covidData, setCovidData] = useState([]);
  const data = useSelector((state) => state.data);

  const showData = () => {
    setCovidData(data);
    console.log("Reading redux", covidData);
  };

  useEffect(() => {
    showData();
  }, []);
  return (
    <Container>
      <Wrap>
        {covidData ? (
          <>
            <Header>
              <Hold>
                <span>Death</span>
                <h2>{covidData.death}</h2>
              </Hold>
              <Hold>
                <span>Discharged</span>
                <h2>{covidData.discharged}</h2>
              </Hold>
              <Hold>
                <span>Total Active Cases</span>
                <h2>{covidData.totalActiveCases}</h2>
              </Hold>
              <Hold>
                <span>Total Confirmed Cases</span>
                <h2>{covidData.totalConfirmedCases}</h2>
              </Hold>
              <Hold>
                <span>Total Samples Tested</span>
                <h2>{covidData.totalSamplesTested}</h2>
              </Hold>
            </Header>
            <Cards>
              {covidData.states?.map((props) => (
                <Card key={props._id}>
                  <StateName>{props.state}</StateName>

                  <StatHold>
                    <Stat>
                      <Title>Cases on Admission</Title>
                      <Figure>{props.casesOnAdmission}</Figure>
                    </Stat>
                    <Stat>
                      <Title>Confirmed Cases</Title>
                      <Figure>{props.confirmedCases}</Figure>
                    </Stat>
                    <Stat>
                      <Title>Death</Title>
                      <Figure>{props.death}</Figure>
                    </Stat>
                    <Stat>
                      <Title>Discharged</Title>
                      <Figure>{props.discharged}</Figure>
                    </Stat>
                  </StatHold>
                </Card>
              ))}
            </Cards>
          </>
        ) : null}
      </Wrap>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 50px;
  background-color: purple;
  padding: 0 50px;
  flex-wrap: wrap;
  text-align: center;
`;
const Hold = styled.div`
  margin: 10px 15px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    color: var(--grey);
    font-weight: 600;
    font-size: 18px;
  }

  h2 {
    margin-top: 5px;
    margin-bottom: 0;
    font-family: "Poppins", sans-serif;
    font-size: 35px;
    font-weight: 700;
    color: #fff;
  }
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 300px;
  height: 250px;
  margin: 10px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StateName = styled.div`
  font-weight: 700;
  font-size: 25px;
`;

const StatHold = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: row;

  flex-wrap: wrap;
  width: 100%;
`;
const Stat = styled.div`
  width: 50%;
  flex: 1;
  margin-right: 10px;
  margin-bottom: 10px;
  /* display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center; */
`;

const Title = styled.div`
  font-size: 13px;
  /* text-align: center; */
  color: var(--grey2);
`;

const Figure = styled.div`
  font-weight: 700;
`;

// const Wrap = styled.div``;
// const Wrap = styled.div``;
// const Wrap = styled.div``;
// const Wrap = styled.div``;
