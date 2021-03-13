import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import RegisterPage from './RegisterPage';
import AboutUsPage from './AboutUsPage';
import Footer from './Footer';


const Main = ()=>{
        return(
            <div>
            <BrowserRouter>
            <Header/>
            <Route path="/home" component={Home} exact/>
            <Route path='/register' component={RegisterPage} exact />
            <Route path='/aboutus' component={AboutUsPage} exact/>
            </BrowserRouter>
            <Footer/>
            </div>
        );
}
export default Main;