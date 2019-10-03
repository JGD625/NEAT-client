import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as serviceWorker from './serviceWorker'
import { LiquorListProvider } from './contexts/LiquorListContext'
import { LiquorProvider } from './contexts/LiquorContext'
import App from './components/App/App'
import './index.css'

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

import {
  faBookOpen,
  faComment,
  faGift,
  faGlobeAmericas,
  faListOl,
  faListUl,
  faPenAlt,
  faQuoteLeft,
  faDollarSign,
  faStar as fasStar,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGift, // logo
  faListUl, // style: listicle
  faListOl, // style: howto
  faGlobeAmericas, // style: news
  faPenAlt, // style: interview
  faBookOpen, // style: story
  faComment,
  faQuoteLeft,
  farStar,
  fasStar,
  faDollarSign,
)

ReactDOM.render(
  <BrowserRouter>
    <LiquorListProvider>
      <LiquorProvider>
        <App />
      </LiquorProvider>
    </LiquorListProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
