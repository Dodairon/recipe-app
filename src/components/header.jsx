import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const [showSearch, setshowSearch] = useState(false);
  const { display, title } = props;

  function Search(value) {
    return setshowSearch(!value);
  }

  return (
    <div>
      <Link
        to="/profile"
        data-testid="profile-top-btn"
      >
        <img
          src={ profileIcon }
          alt="profile"
        />
      </Link>
      <h1
        data-testid="page-title"
      >
        { title }
      </h1>

      { display
        && (
          <button
            type="button"
            data-testid="search-top-btn"
            onClick={ () => Search(showSearch) }
          >
            <img
              src={ searchIcon }
              alt="profile"
            />
          </button>
        ) }
      { showSearch && 'teste' }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  display: PropTypes.bool,
};

Header.defaultProps = {
  display: false,
};

export default Header;
