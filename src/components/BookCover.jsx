import React from 'react';

export default ({ cover, title }) =>
  <img
    src={cover}
    className="BookCover"
    alt={`Couverture du livre ${title}`}
  />
;
