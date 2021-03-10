import React,{Component} from 'react';
import Title from './Title';
import MainCarousel from './CarouselComponent';
import MyFancyComponent from './Map';
import BelowMap from './BelowMap';

class Home extends Component{
    render(){
        return(
            <div>
            <Title/>
            <MainCarousel/>
            <MyFancyComponent/>
            <BelowMap />
            </div>
        );
    }
}
export default Home;