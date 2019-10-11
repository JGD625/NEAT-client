import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { LiquorListProvider } from '../../contexts/LiquorListContext'
import { LiquorProvider } from '../../contexts/LiquorContext'
import LearnHero from './LearnHero';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <LiquorListProvider>
      <LiquorProvider><LearnHero /></LiquorProvider>
    </LiquorListProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});