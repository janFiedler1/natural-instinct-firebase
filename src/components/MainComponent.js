import {Fragment, useState} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import About from './AboutComponent';
import Home from './HomeComponent';
import Contact from './Web3ContactComponent';
import '../component-css/MainComponent.css'
import ShopPage from './ShopPageComponent';


function Main (){
    const pieces = [{id: 1, title: 'Rockets Shorts', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced.png', type: "bottom", payment_link:"https://buy.stripe.com/cN2bKtcR415b4jSbII", price: 60.00, status: "available"},
        {id: 2, title: 'Earth First Longsleeve',  path: process.env.PUBLIC_URL+'/earth-first-longsleeve.png', type: "top", payment_link:"", price: 200.00, status: "sold"},
        {id: 3, title: 'Give Me Space Jacket', path: process.env.PUBLIC_URL+'/give-me-space-longsleeve.png', type: "top", payment_link:"https://buy.stripe.com/00g5m58AO8xD9EcbIJ", price: 60.00, status: "available"},
        {id: 4, title: 'Yin Yang Longsleeve', path: process.env.PUBLIC_URL+'/no-light-longsleeve.png', type: "top", payment_link:"https://buy.stripe.com/4gw5m54ky4hneYw6or", price: 70.00, status: "available"},
        {id: 5, title: 'White Sox Jersey', path: process.env.PUBLIC_URL+'/white-sox-front.jpg', type: "top", payment_link:"https://buy.stripe.com/6oE5m54kyaFL4jSaEI", price: 35.00, status: "available"},
        {id: 6, title: 'Calvin & Hobbes Hoodie', path: process.env.PUBLIC_URL+'/calvin-hobbs-front.jpg', type: "top", payment_link:"https://buy.stripe.com/9AQbKtg3gaFL03CdQS", price: 85.00, status: "available"},
        {id: 7, title: 'D Wade Shorts', path: process.env.PUBLIC_URL+'/dwade-shorts-front.jpg', type: "bottom", payment_link:"https://buy.stripe.com/fZe8yh18m7tzaIg3ch", price: 60.00, status: "available"},
     ]

    const headers = [
        {title: '+ Shop', id:"shop", component:<br/>},
        {title: 'Home', id:"home", component:<Home pieces={pieces}/>},
        {title: 'About', id:"about", component:<About/>},
        {title: 'Contact', id:"contact", component:<Contact/>}
    ]

    const filteredPieces = (id) => {
        let filteredPiecesArray = [];
        for (let i= 0; i<pieces.length; i++) {
            if (pieces[i].type === id) {
                filteredPiecesArray = [...filteredPiecesArray, pieces[i]];
            }
        }
        return filteredPiecesArray;
    }
    
    const shopSections = [
        {title: 'Tops', id:'tops', component:<ShopPage pieces={filteredPieces("top")} title="Tops"/>, img: process.env.PUBLIC_URL+'/top-icon.jpg'},
        {title: 'Bottoms', id:'bottoms', component:<ShopPage pieces={filteredPieces("bottom")} title="Bottoms"/>, img: process.env.PUBLIC_URL+'/bottom-icon.jpg'},
        {title: 'Accessories', id:'accessories', component:<ShopPage pieces={filteredPieces("accessory")} title="Accessories"/>, img: process.env.PUBLIC_URL+'/accessory-icon.jpg'}
    ]

    const [content, setContent] = useState(<Home pieces={pieces}/>);

    const handleContentChange = (value) => {
        setContent(value);
      };
    
    return (
        <Fragment>
            <Header tabChangeFunction = {handleContentChange} links={headers} shopSections={shopSections}/>
            <img src={process.env.PUBLIC_URL+'/background-logo.png'} className='background-icon'/>
            <div className='content-container'>
                {content}
            </div>
            <Footer/>
        </Fragment>
    )
}
export default Main