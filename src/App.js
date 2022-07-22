import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addData } from "./Components/ReduxState/GlobalState";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Home from "./Components/Home/Home";

function App() {
  const dispatch = useDispatch();
  const getData = async () => {
    const url = "https://covidnigeria.herokuapp.com/api";

    await axios
      .get(url)
      .then((res) => {
        console.log(res);
        dispatch(addData(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
`;
