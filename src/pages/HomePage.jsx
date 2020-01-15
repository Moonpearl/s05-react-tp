import React from 'react';
import { Layout, BookPreview, BookSummary } from '../components';
import { booksData, latestBookIndex } from '../data';

export default () =>
  <Layout>
    <h1 className="MainTitle">Prochainement en librairie!</h1>
    <section class="BooksContainer-books">
      <BookPreview
        index={latestBookIndex}
        {...booksData[latestBookIndex]}
      />
    </section>
    <BookSummary summary={booksData[latestBookIndex].summary} />
  </Layout>
;
