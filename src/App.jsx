import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage, AboutPage, BooksPage, NotFoundPage } from './pages';
import './styles/_main.scss';

export default () =>
  <BrowserRouter>
    <Switch>      
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/books' component={BooksPage} />
      <Route default component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
;
