import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
// import profilepic from '../img/Donna_photo.png';




class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            {/* <img src={profilepic} alt="ProfilePic" className="profilepic"></img> */}
            <ReactTypingEffect className="typingeffect" text={['I am Donna Smith','I am a full stack web developer']} speed={100} eraseDelay={700}/>
            </div>
            )
        }
    }
    
    export default Home