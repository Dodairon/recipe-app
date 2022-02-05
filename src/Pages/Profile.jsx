import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileTitle = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-weight: bold;
  color: #227422;
`;

const Button = styled.button`
  background-color: #227422;
  color: #fff;
  border-radius: 3px;
  margin: 10px;
  padding: 10px;
  width: 300px;
  border: none;
`;

function Profile() {
  const store = localStorage.getItem('user');
  const storeObj = JSON.parse(store);

  function clearStorage() {
    return localStorage.clear();
  }

  return (
    <div>
      <Header title="Profile" />
      <Container>
        {storeObj ? (
          <ProfileTitle data-testid="profile-email">{storeObj.email}</ProfileTitle>
        ) : null}
        <Link to="/done-recipes">
          <Button type="button" data-testid="profile-done-btn">
            Done Recipes
          </Button>
        </Link>
        <Link to="/favorite-recipes">
          <Button type="button" data-testid="profile-favorite-btn">
            Favorite Recipes
          </Button>
        </Link>
        <Link to="/">
          <Button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => clearStorage() }
          >
            Logout
          </Button>
        </Link>
      </Container>
      <Footer />
    </div>
  );
}

export default Profile;
