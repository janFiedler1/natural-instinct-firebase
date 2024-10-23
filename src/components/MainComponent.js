import {Fragment, useState} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import About from './AboutComponent';
import Home from './HomeComponent';
import Contact from './Web3ContactComponent';
import '../component-css/MainComponent.css'


function Main (){
    const pieces = [{id: 1, title: 'Rockets Shorts', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced.png', type: "shorts", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ", price: 60.00, status: "available"},
        {id: 2, title: 'Earth First Longsleeve', path: process.env.PUBLIC_URL+'/earth-first-longsleeve.png', type: "longsleeve", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ", price: 200.00, status: "sold"},
        {id: 3, title: 'Give Me Space Longsleeve', path: process.env.PUBLIC_URL+'/give-me-space-longsleeve.png', type: "longsleeve", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ", price: 60.00, status: "available"},
        {id: 4, title: 'Yin Yang Longsleeve', path: process.env.PUBLIC_URL+'/no-light-longsleeve.png', type: "longsleeve", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ", price: 70.00, status: "available"},
        {id: 5, title: 'White Sox Jersey', path: process.env.PUBLIC_URL+'/white-sox-front.jpg', type: "jersey", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ", price: 35.00, status: "available"},
        {id: 6, title: 'Calvin & Hobbes Hoodie', path: process.env.PUBLIC_URL+'/calvin-hobbs-front.jpg', type: "hoodie", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ", price: 85.00, status: "available"},
        // {id: 7, title: 'D Wade Shorts', path: process.env.PUBLIC_URL+'/dwade-shorts-front.jpg', type: "shorts", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ", price: 60.00, status: "available"},
     ]

    const headers = [{title: 'Home', id:"home", component:<Home pieces={pieces}/>},
        {title: 'About', id:"about", component:<About/>},
        {title: 'Contact', id:"contact", component:<Contact/>}
    ]

    const [content, setContent] = useState(<Home pieces={pieces}/>);

    const handleContentChange = (value) => {
        setContent(value);
      };
    
    return (
        <Fragment>
            <Header stateChangeFunction = {handleContentChange} links={headers}/>
            <div className='content-container'>
                {content}
            </div>
            <Footer/>
        </Fragment>
    )
}
export default Main