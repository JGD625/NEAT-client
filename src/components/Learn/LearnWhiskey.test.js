import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { LiquorListProvider } from '../../contexts/LiquorListContext'
import { LiquorProvider } from '../../contexts/LiquorContext'
import LearnWhiskey from './LearnWhiskey';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <LiquorListProvider>
      <LiquorProvider><LearnWhiskey /></LiquorProvider>
    </LiquorListProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});