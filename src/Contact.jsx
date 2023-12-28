// Home.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

function Home(){
  const location = useLocation();
  const {name} = location.state || {};
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Home;
