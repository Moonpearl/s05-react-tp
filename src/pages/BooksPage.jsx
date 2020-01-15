import React from 'react';
import { Layout, BooksContainer } from '../components';

import { booksData } from '../data';

export default () =>
  <Layout className="BookPage">
    <h1 className="MainTitle">Ma vie, mon oeuvre</h1>
    <BooksContainer data={booksData} />
  </Layout>
;
