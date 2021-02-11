import React,{Component} from 'react';
import Header from './Header'
import Footer from './Footer';
import MainCarousel from './CarouselComponent';
import MyFancyComponent from './Map';
import BelowMap from './BelowMap';

class Main extends Component{
    render(){
        return(
            <div>
            <Header/>
            <MainCarousel/>
            <MyFancyComponent/>
            <BelowMap />
            <Footer/>
            </div>
        );
    }
}
export default Main;