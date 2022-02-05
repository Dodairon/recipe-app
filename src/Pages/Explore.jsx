import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/header';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #227422;
  color: #fff;
  width: 140px;
  height: 200px;
  margin: 10px;
`;

function Explore() {
  const { setResult } = React.useContext(context);
  useEffect(() => {
    setResult([]);
  }, [setResult]);

  return (
    <div>
      <Header title="Explore" />
      <Container>
        <Link to="/explore/foods" data-testid="explore-foods">
          <PageContainer>Explore Foods</PageContainer>
        </Link>
        <Link to="/explore/drinks" data-testid="explore-drinks">
          <PageContainer>Explore Drinks</PageContainer>
        </Link>
        <Footer />
      </Container>
    </div>
  );
}

export default Explore;
