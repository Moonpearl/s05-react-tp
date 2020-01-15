import React from 'react';
import { BookCover } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default props => {
    const { index, title, cover, onMouseEnter, onMouseLeave } = props;

    return (
      <article className="BookPreview">
        <Link to={`/books/${index}`}>
          <figure className="BookPreview-picture" {...{ onMouseEnter, onMouseLeave }} >
            <BookCover {...{title, cover}} />
            <FontAwesomeIcon icon={faSearch} className="BookPreview-picture-icon" />
          </figure>
        </Link>
        <div className="BookPreview-title">
          {title}
        </div>
      </article>
    );
  }
;
