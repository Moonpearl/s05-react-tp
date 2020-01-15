import React, { Component } from 'react';
import { BookPreview, BookSummary } from '.';

class BooksContainer extends Component {
  state = {
    selectedBookIndex: null,
  };

  setSelectedBookIndex = (index) => () => {
    console.log(index);
    this.setState({
      selectedBookIndex: index,
    });
  }

  render = () => {
    const { data } = this.props;
    const { selectedBookIndex } = this.state;

    let bookSummary = null;
    if (selectedBookIndex !== null) {
      bookSummary = <BookSummary summary={data[selectedBookIndex].summary} />;
    }

    return (
      <section className="BooksContainer">
        <div className="BooksContainer-books">
          {data.map( (bookData, index) =>
            <BookPreview
              key={`book${index}`}
              index={index}
              onMouseEnter={this.setSelectedBookIndex(index)}
              onMouseLeave={this.setSelectedBookIndex(null)}
              {...bookData}
            />
          )}
        </div>
        {bookSummary}
      </section>
    );
  }
}

export default BooksContainer;
