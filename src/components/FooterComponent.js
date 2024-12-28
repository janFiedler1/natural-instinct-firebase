import styles from '../component-css/FooterComponent.css';
import React from 'react';

function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <div className='social-links'>
                    <a href='https://www.tiktok.com/@natural_instinct5?_t=8qmyP0xGPsU&_r=1'>
                        <img className="social-link-img" src={process.env.PUBLIC_URL+'/tiktok-icon.png'}/>
                    </a>
                    <a href='https://www.instagram.com/natural_instinct/'>
                        <img className="social-link-img" src={process.env.PUBLIC_URL+'/instagram-icon.png'}/>
                    </a>
                </div>
                <span>
                    &#169; Natural Instinct 2024, Created by <a target="_blank" href='https://janfiedler.ca'>Jan Fiedler</a>
                </span>
            </div>
        </React.Fragment>
    )
}

export default Footer;