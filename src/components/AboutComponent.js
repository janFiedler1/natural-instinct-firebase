import React from "react";
import '../component-css/AboutComponent.css'
import Modal from "./PieceModalComponent"

function About () {
    return (
        <React.Fragment>
            <div className="page">
                <div className="about-section">
                    <img src={process.env.PUBLIC_URL+'/ethan-about-1.jpg'}/>
                    <p>
I started the brand Natural Instinct because I believe if something deep down in your heart feels right, you should pursue it. In other words, Follow your instincts. I have always loved fashion and creativity since I was young. The feeling of being free to create whatever you desire and wear whatever feels right. Natural Instincts Focus is to be simply unique, no duplicates, no carbon copies of other clothing, just truly a 1 of 1. The goal of this brand is to express creativity through sustainable wearable art. There are too many critics and not enough creatives in the world, and by pushing sustainable fashion by reusing fabrics instead of producing new ones we can make a positive impact on the climate and the fashion industry while also giving clothes a whole new life. I want this brand to inspire and motivate others to express themselves freely and wear what they want instead of mold to the norm. Each piece is reworked, sewn, and hand crafted to have a new theme, inspiration and life of its own.
                    </p>
                </div>
                <div className="about-section">
                    <p>
Fashion has a huge impact on people and the planet, and fast fashion owns a large and growing share of the problem. The most successful fast fashion brands use influencers and other ploys to push trend-driven items at ridiculously low prices, all while producing new clothing collections as often as every two weeks. That all comes at a huge cost to the lives of the workers who make the clothes and the environment.
 
 ·  	Each year millions of tonnes of clothes are produced, worn, and thrown away. Every Second, the equivalent of a rubbish truck load of clothes is burnt or buried in landfill.
  
 ·  	Plastic particles washed off from products such as synthetic clothes contribute up to 35% of the primary plastic that is polluting our oceans. Every time we do our laundry an average of 9 million microfibers are released into wastewater treatment plants that cannot filter them.
  
 Here are some resources that talk more about the ongoing Fast Fashion Industry problem:
 <br/><a href="https://www.prettygreenlily.com/fast-fashion-facts/">prettygreenlily.com</a>
 &emsp;<a href="https://goodonyou.eco/fast-fashion-facts/">goodonyou.eco</a>
 &emsp;<a href="https://www.youtube.com/watch?v=38sgighOWKg">10 Fast Fashion Facts You Might Not Know</a>
                    </p>
                    
                    <img src={process.env.PUBLIC_URL+'/about-2.jpg'}/>
                </div>
            </div>
            {/* <Modal/> */}
        </React.Fragment>
    )
}

export default About;