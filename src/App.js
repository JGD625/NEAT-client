import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import dummyStore from './dummy-store'
import { findLiquor } from './helpers'
import Header from './components/header/Header'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import Home from './routes/Home/Home'
import ClientLiquorList from './routes/ClientLiquorList/ClientLiquorList'
import Liquor from './routes/LiquorPage/LiquorPage'
import LiquorListItem from './components/liquorlistitem/LiquorListItem'
import LiquorListPage from './routes/LiquorListPage/LiquorListPage'




class App extends Component {
  state = { 
    hasError: false,
    liquors: [
      { id: 1, name: "Nice Bourbon", proof: "80", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas."  },
      { id: 2, name: "Great Bourbon", proof: "90", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas." },
      { id: 3, name: "Nice Rye", proof: "80", type: "Rye", content: "Corporis accusamus placeat quas non voluptas."},
      { id: 4, name: "OK Scotch", proof: "110", type: "Scotch", content: "Corporis accusamus placeat quas non voluptas." },
      { id: 4, name: "Good Scotch", proof: "90", type: "Scotch", content: "Corporis accusamus placeat quas non voluptas." },
      { id: 4, name: "Great Rye", proof: "80", type: "Rye", content: "Corporis accusamus placeat quas non voluptas." },
      { id: 4, name: "Nasty Drink", proof: "90", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas." },
      { id: 4, name: "Ole Rot Gut", proof: "110", type: "Rye", content: "Corporis accusamus placeat quas non voluptas." }
    ],
    };

    

  render() {
  return (
    
    <section>
    <Header />
    <main className='App'>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/liquorlist' component={ClientLiquorList} />
    <Route
          path='/liquorlist/:liquorId'
          component={Liquor} />
    <Route component={NotFoundPage} />
    </Switch>
    </main>
    </section>
  )
}
}

export default App;