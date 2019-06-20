import React from 'react';
import './homepage.scss';
import Form from '../../components/form/form';
import arrowDown from '../homepage/down-arrow.png';
import Slider4 from '../../components/slider4/slider4';

const Homepage = () => {
    return ( 
        <>
            <div className="slider">
                <div className="greetings">
                    <h2>Find Excitement Wherever You May Roam</h2>
                    <h1>A Time to Travel and Relax</h1>
                   
                </div>
                <div class="scroll">
                        <h4>Scroll down</h4>
                        <a href="#rest">
                            <img src={arrowDown} alt="arrow down" />
                        </a>
                    </div>
            </div>
            <div className="rest" id="rest"> 
                <Form />
                <Slider4 />
            </div>
        </>
     );
}
 
export default Homepage;