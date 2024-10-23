import React from "react";
import '../component-css/AboutComponent.css'
import Modal from "./PieceModalComponent"

function About () {
    return (
        <React.Fragment>
            <div className="page">
                <div className="about-section">
                    <img src={process.env.PUBLIC_URL+'/natural-instinct.jpg'}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mollis lectus, id pharetra nisi. In ultricies ut diam eu facilisis. Quisque sollicitudin dui ac odio hendrerit, semper euismod felis dapibus. Donec mattis nec elit sit amet imperdiet. Duis blandit id eros non vehicula. Quisque at felis non sapien elementum accumsan. Morbi massa sapien, euismod quis turpis a, ultricies tincidunt quam.
 
 Nunc imperdiet vestibulum nisi, ac condimentum augue aliquet a. In a diam nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eget odio mollis, scelerisque diam vel, pellentesque augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras luctus dolor eleifend molestie tempor. Duis gravida feugiat libero sit amet feugiat. Cras commodo ligula libero, lobortis porta risus consequat convallis. Donec suscipit nulla in imperdiet posuere.</p>
                </div>
                <div className="about-section">
                    <p>Etiam faucibus tempor quam, id auctor risus mattis in. Suspendisse bibendum tellus diam, at laoreet nisl scelerisque eget. Praesent vehicula dui metus, ac accumsan odio blandit ac. Integer pretium nisl at lorem viverra ullamcorper. Donec ultricies risus neque, vitae consectetur lacus dictum vel. Aenean bibendum sem eget leo congue ultricies. In ornare a velit ut imperdiet. Sed rutrum pulvinar ultricies.

Quisque rhoncus velit quis erat mattis viverra vitae eget dolor. Cras id porta ante, in feugiat dui. Nam eu eleifend ex. Donec eget suscipit dolor. Ut vel odio sed nibh consectetur blandit. Nulla dignissim tincidunt erat, nec placerat arcu pulvinar et. Vivamus elementum velit rhoncus ante luctus posuere. Sed cursus lacus risus, ultrices hendrerit risus sodales non.</p>
                    <img src={process.env.PUBLIC_URL+'/natural-instinct.jpg'}/>
                </div>
                <div className="about-section">
                    <img src={process.env.PUBLIC_URL+'/natural-instinct.jpg'}/>
                    <p>Aliquam et posuere est, id placerat tellus. Nam consequat sapien id libero suscipit, a elementum nunc imperdiet. Nullam vitae neque sed erat lacinia euismod. Aenean at sem eu nulla rutrum scelerisque. Phasellus aliquet, nunc et efficitur imperdiet, enim nisl blandit nibh, a vehicula purus libero a risus. In tempor vulputate magna ac commodo. Ut ac ante ac magna mollis dictum sed eget nunc. Sed interdum tortor mi, quis porttitor nulla cursus quis. Quisque bibendum tellus quis orci tincidunt suscipit eu ac lacus. Nulla ullamcorper at purus a faucibus.</p>
                </div>
            </div>
            <Modal/>
        </React.Fragment>
    )
}

export default About;