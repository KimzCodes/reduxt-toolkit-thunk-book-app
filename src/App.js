import React, { Fragment } from 'react';

import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import Posts from './components/Post/Posts';
const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <AddForm />
        <Posts />
      </Container>
    </Fragment>
  );
};

export default App;
