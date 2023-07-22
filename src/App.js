import {Route, Switch, Redirect} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import Home from './components/home'
import ProtectedRoute from './components/ProtectedRoute'
import Popular from './components/popular'
import Account from './components/Account'
import SearchFilter from './components/searchresult'
import NotFound from './components/NotFound'
import MovieDetailView from './components/movieDetailsView'
import ProfilePage from './components/profile'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <ProtectedRoute exact path="/search" component={SearchFilter} />
    <ProtectedRoute exact path="/account" component={Account} />
    <ProtectedRoute exact path="/profilepage" component={ProfilePage} />
    <ProtectedRoute exact path="/movies/:id" component={MovieDetailView} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
