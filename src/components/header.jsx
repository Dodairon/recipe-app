import PropTypes from 'prop-types';
import React, { useState } from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './searchBar';

function Header(props) {
  const [showSearch, setshowSearch] = useState(false);
  const { title, history, display } = props;

  function Search(value) {
    return setshowSearch(!value);
  }

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
            onClick={ () => Search(showSearch) }
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="profile"
            />
          </button>
        ) }
      { showSearch && <SearchBar /> }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  display: PropTypes.bool.isRequired,
};

export default Header;
