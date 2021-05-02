import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="BSc(Hons) Computing and It" where="The Open University" from="February 2020" to="Present"/>
            <Widecard title="Full Stack Web Development Diploma" where="Code Institute" from="2019" to="2020"/>
            </div>
            )
        }
    }
    
export default Education