import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getRandomFood } from '../services/api';
import Footer from '../components/Footer';
import Header from '../components/header';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const PageButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  background-color: #227422;
  color: #fff;
  width: 140px;
  height: 200px;
  margin: 10px;
`;

function ExploreFoods({ history }) {
  return (
    <div>
      <Header title="Explore Foods" />
      <Container>
        <Link
          to="/explore/foods/ingredients"
          data-testid="explore-by-ingredient"
        >
          <PageContainer>By Ingredient</PageContainer>
        </Link>
        <Link
          to="/explore/foods/nationalities"
          data-testid="explore-by-nationality"
        >
          <PageContainer>By Nationality</PageContainer>
        </Link>
        <PageButton
          type="button"
          data-testid="explore-surprise"
          onClick={ () => {
            getRandomFood().then((id) => {
              history.push(`/foods/${id}`);
            });
          } }
        >
          Surprise me!
        </PageButton>
      </Container>
      <Footer />
    </div>
  );
}

export default ExploreFoods;

ExploreFoods.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
