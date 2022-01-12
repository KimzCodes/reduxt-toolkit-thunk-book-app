import React, { Fragment } from 'react';

import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </Fragment>
  );
};

export default App;
