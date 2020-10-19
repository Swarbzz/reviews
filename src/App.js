import React from 'react';

function App() {
  function getGreetingMessage () {
    return 'Game Reviews from function';
  }


  return (
    <div>
      <h1>{getGreetingMessage()}</h1>
    </div>
  );
}

export default App;
