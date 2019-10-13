import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { LiquorListProvider } from '../../contexts/LiquorListContext'
import { LiquorProvider } from '../../contexts/LiquorContext'
import LiquorStarRating from './LiquorStarRating';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <LiquorListProvider>
      <LiquorProvider></LiquorProvider>
    </LiquorListProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});