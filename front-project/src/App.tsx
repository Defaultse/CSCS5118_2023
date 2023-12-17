import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundaryApi from './Recipes/ErrorBoundaryRecepies'

const Recipes = lazy(()=>import("./Recipes/Recipes"));
const LotsList = lazy(()=>import("./LotsList/LotsList"));
const Profile = lazy(()=>import("./Profile/Profile"));
const LotDetail = lazy(()=>import("./LotDetail/LotDetail"));
const AddProduct = lazy(()=>import("./AddProduct/AddProduct"));
const Favorites = lazy(()=>import("./Favorites/Favorites"));
const SignIn = lazy(()=>import('./Auth/SignIn'));
const SignUp = lazy(()=>import('./Auth/SignUp'));

function App() {
  return (
   <Router>
     <Navbar/>
     <Suspense fallback={<Spinner animation="border" variant="primary" style={{marginLeft: '45em', marginTop: '20em'}}/>}>
      <Switch>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/sign-in' exact component={SignIn}/>
        <Route path='/logout' exact component={SignIn}/>
        <Route path='/' exact component={LotsList}/>
        <Route path='/lots/:id' render={(props)=><LotDetail {...props}/>} />
        <Route path='/add-product' exact component={AddProduct}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/favorites' exact component={Favorites}/>
        <ErrorBoundaryApi>
          <Route path='/recipes' exact component={Recipes}/>
        </ErrorBoundaryApi>
      </Switch>
      </Suspense>
    </Router>   
  ); 
}

export default App;
