import React from 'react';
import Title from './Title';
import MainCarousel from './CarouselComponent';
import MyFancyComponent from './Map';
import BelowMap from './BelowMap';



const Home =({scrollDiv})=>{
        return(
            <div>
            <Title/>
            <MainCarousel/>
            <MyFancyComponent/>
            <BelowMap scrollDiv={scrollDiv} />
            </div>
        );
    }
export default Home;