import React from 'react';
import Header from '../components/header';

function Recipes() {
  const display = true;
  return (
    <div>
      <Header display={ display } title="Delivery App" />
    </div>
  );
}

export default Recipes;
