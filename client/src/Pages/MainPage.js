import React, { Component } from 'react'
import NavBar from '../Components/NavBar';
import MovingBG from '../Video/tunnelVision.mp4';
import MainPageCss from '../Components/Styles/MainPage.css';

class MainPage extends Component {

    render(){
        return (
            <div>
                <header>
                    <NavBar/>
                </header>
                <div className="videoBorder">
                    <video
                        autoPlay
                        loop
                        muted
                        className="Video"
                    >
                        <source src={MovingBG} type="video/mp4"></source>
                    </video>
                </div>
                <h1 id="word">hello</h1>

            </div>
        )
    }
}

export default MainPage;
