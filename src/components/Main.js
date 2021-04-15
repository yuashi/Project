import React,{useEffect,useRef,useState,useCallback} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import RegisterPage from './RegisterPage';
import AboutUsPage from './AboutUsPage';
import Footer from './Footer';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey='650ed08a49340c0bfae4eeec04529f6c2e956eca572e1d8b807a3e2338fdd0dc/stage';

const Main =  ()=>{

    /*Voice Login*/
    const [voiceopenmodal,setVoiceOpenModal]=useState(false);
    const callBackModal =()=>setVoiceOpenModal(!voiceopenmodal);
    
    /*Alan voice configuration*/
    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command})=>{
                if(command === 'showtopguides'){
                    voiceScrollHandler();
                }
                
                else if(command === 'login'){
                    setVoiceOpenModal(true);
                }   
            }
        });
    },[]);
    /*Voice Scroll*/
    const scrollDiv=useRef();
    const voiceScrollHandler = () => {
        scrollDiv.current.scrollIntoView({ behavior: "smooth" });
    };

    
    


        return(
            <div>
            <BrowserRouter>
            <Header voiceopenmodal={voiceopenmodal} callBackModal={callBackModal}/>
            <Route path="/home" component={()=><Home scrollDiv={scrollDiv}/>} exact/>
            <Route path='/register' component={RegisterPage} exact />
            <Route path='/aboutus' component={AboutUsPage} exact/>
            </BrowserRouter>
            <Footer/>
            </div>
        );
};
export default Main;