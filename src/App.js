import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CataloguePage from './pages/CataloguePage';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Aside from './components/Aside';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {


    return (
        <Router>
            <ScrollToTop></ScrollToTop>
            <NavBar/>
            <Aside/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/catalogue">
                    <CataloguePage/>
                </Route>
                <Route path="/product">
                    <ProductPage/>
                </Route>
            </Switch>
            
        </Router>
    )
}

export default App
