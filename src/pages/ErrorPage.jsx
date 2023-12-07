import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const errorStyle = {
    backgroundColor: 'white',
    color: 'black',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
  };
  const error = useRouteError();
  console.log(error);
  return (
    <div style={errorStyle}>
      <h2>{error.status} !</h2>
      <h2>{error.statusText}</h2>
    </div>
  );
}

export default ErrorPage;
