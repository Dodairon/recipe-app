import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './searchBar';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #227422;
  color: #fff;
  height: 50px;
  width: 100%;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  align-self: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff9bff;
  border-radius: 50%;
  border: none;
  filter: invert(100%);
  && > img {
    width: 17px;
  }
  width: 35px;
  height: 35px;
`;

function Header(props) {
  const [showSearch, setShowSearch] = useState(false);
  const { title, display, drinkScreen } = props;
  const history = useHistory();
  return (
    <>
      <Container>
        <Button
          type="button"
          data-testid="profile-top-btn"
          src={ profileIcon }
          onClick={ () => history.push('/profile') }
        >
          <img src={ profileIcon } alt="profile" />
        </Button>
        <Title data-testid="page-title">{title}</Title>

        {display && (
          <Button type="button" onClick={ () => setShowSearch(!showSearch) }>
            <img data-testid="search-top-btn" src={ searchIcon } alt="profile" />
          </Button>
        )}
      </Container>
      {showSearch && <SearchBar drinkScreen={ drinkScreen } />}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  display: PropTypes.bool,
  drinkScreen: PropTypes.bool,
};

Header.defaultProps = {
  display: false,
  drinkScreen: false,
};

export default Header;
