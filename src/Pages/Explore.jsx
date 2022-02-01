import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/header';

function Explore() {
  return (
    <div>
      <Header title="Explore" />
      <Link to="/explore/foods" data-testid="explore-foods">
        Explore Foods
      </Link>
      <Link to="/explore/drinks" data-testid="explore-drinks">
        Explore Drinks
      </Link>
      <Footer />
    </div>
  );
}

export default Explore;
