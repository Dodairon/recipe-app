import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/header';

function Profile() {
  const store = localStorage.getItem('user');
  const storeObj = JSON.parse(store);

  function clearStorage() {
    return localStorage.clear();
  }

  return (
    <div>
      <Header title="Profile" />
      {storeObj ? (
        <h1 data-testid="profile-email">{ storeObj.email }</h1>
      ) : null}
      <Link to="/done-recipes">
        <button type="button" data-testid="profile-done-btn">Done Recipes</button>
      </Link>
      <Link to="/favorite-recipes">
        <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => clearStorage() }
        >
          Logout
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Profile;
