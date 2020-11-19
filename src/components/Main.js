import React,{Component} from 'react';
import Header from './Header'
import Footer from './Footer';
import MainCarousel from './CarouselComponent';
import MyFancyComponent from './Map';

class Main extends Component{
    render(){
        return(
            <div>
            <Header/>
            <MainCarousel/>
            <MyFancyComponent/>
            <Footer/>
            </div>
        );
    }
}
export default Main;