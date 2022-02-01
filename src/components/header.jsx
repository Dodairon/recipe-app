import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './searchBar';

function Header(props) {
  const [showSearch, setShowSearch] = useState(false);
  const { title, display, drinkScreen } = props;
  const history = useHistory();
  return (
    <div>
      <button
        type="button"
        data-testid="profile-top-btn"
        src={ profileIcon }
        onClick={ () => history.push('/profile') }
      >
        <img src={ profileIcon } alt="profile" />
      </button>
      <h1
        data-testid="page-title"
      >
        { title }
      </h1>

      { display
        && (
          <button
            type="button"
            onClick={ () => setShowSearch(!showSearch) }
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="profile"
            />
          </button>
        ) }
      { showSearch && <SearchBar drinkScreen={ drinkScreen } /> }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  display: PropTypes.bool,
  drinkScreen: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Header.defaultProps = {
  display: false,
  drinkScreen: false,
};

export default Header;
