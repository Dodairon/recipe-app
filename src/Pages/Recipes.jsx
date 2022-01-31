import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';

function Recipes() {
  const display = true;
  return (
    <div>
      <Header display={ display } title="Delivery App" />
      <h1>Recipes</h1>
      <Footer />
    </div>
  );
}

export default Recipes;
