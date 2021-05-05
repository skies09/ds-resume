import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';


class Social extends Component {
    render() {
        return (
            <div className="social">

                <ul class='list-inline social-links'>
                    <SocialIcon url='https://www.facebook.com/profile.php?id=100002920786337' />
                    <SocialIcon url='https://www.instagram.com/skies009/' bgColor=' #990099'/>
                    <SocialIcon url='https://www.linkedin.com/in/donna-smith-091285' />
                    <SocialIcon url='https://github.com/skies09' />
                </ul>
            </div>
        )
    }
}

export default Social