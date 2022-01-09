import React, { Fragment } from 'react';

import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import PostContainer from './components/Post/PostContainer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <AddForm />
        <PostContainer />
      </Container>
    </Fragment>
  );
};

export default App;
