import React, { Fragment } from 'react';

import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import Books from './components/Book/Books';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <AddForm />
        <Books />
      </Container>
    </Fragment>
  );
};

export default App;
