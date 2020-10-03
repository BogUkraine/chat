import React from 'react';
import Home from './components/Home';
import ApolloProvider from './ApolloProvider'

const App = () => {
  return (
    <ApolloProvider>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
