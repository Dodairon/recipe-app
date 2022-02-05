import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/header';
import { getRandomDrink } from '../services/api';

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

function ExploreDrinks({ history }) {
  return (
    <div>
      <Header title="Explore Drinks" />
      <Container>
        <Link
          to="/explore/drinks/ingredients"
          data-testid="explore-by-ingredient"
        >
          <PageContainer>By Ingredient</PageContainer>
        </Link>
        <PageButton
          type="button"
          data-testid="explore-surprise"
          onClick={ () => {
            getRandomDrink().then((id) => {
              history.push(`/drinks/${id}`);
            });
          } }
        >
          Surprise me!
        </PageButton>
        <Footer />
      </Container>
    </div>
  );
}

export default ExploreDrinks;

ExploreDrinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
