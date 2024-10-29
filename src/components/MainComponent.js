import {Fragment, useState} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import About from './AboutComponent';
import Home from './HomeComponent';
import Contact from './Web3ContactComponent';
import '../component-css/MainComponent.css'
import ShopPage from './ShopPageComponent';

import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';


function Main (){

    const pieces = [{id: 1, title: 'Rockets Shorts', measurements: ['Medium', '19.5 Inches'], description: 'Made from a pair of used vintage pants and a vintage James Harden Houston Rockets Jersey. Back welt pockets included.', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced.png', type: "bottoms", payment_link:"https://buy.stripe.com/cN2bKtcR415b4jSbII", price: 60.00, status: "available", images: [process.env.PUBLIC_URL+'/tops-icon.jpg']},
        {id: 2, title: 'Earth First Longsleeve', measurements: ['Medium'], description: '', path: process.env.PUBLIC_URL+'/earth-first-longsleeve.png', type: "tops", payment_link:"", price: 200.00, status: "sold", images: [process.env.PUBLIC_URL+'/top-icon.jpg']},
        {id: 3, title: 'Give Me Space Jacket', measurements: ['Medium', '23.5 Inches'], description: 'Made from an old pair of pajamas and adidas track pants. Front Pockets included.', path: process.env.PUBLIC_URL+'/give-me-space-longsleeve.png', type: "tops", payment_link:"https://buy.stripe.com/00g5m58AO8xD9EcbIJ", price: 60.00, status: "available", images: [process.env.PUBLIC_URL+'/top-icon.jpg']},
        {id: 4, title: 'Yin Yang Longsleeve', measurements: ['Medium', '24 Inches','22 Inches'], description: 'Made from two Adidas Long sleeves.', path: process.env.PUBLIC_URL+'/no-light-longsleeve.png', type: "tops", payment_link:"https://buy.stripe.com/4gw5m54ky4hneYw6or", price: 70.00, status: "available", images: [process.env.PUBLIC_URL+'/top-icon.jpg']},
        {id: 5, title: 'White Sox Jersey', measurements: ['Medium', '27 Inches'], description: 'Made from vintage Chicago White Sox Jersey and parts of a flannel.', path: process.env.PUBLIC_URL+'/white-sox-front.jpg', type: "tops", payment_link:"https://buy.stripe.com/6oE5m54kyaFL4jSaEI", price: 35.00, status: "available", images: [process.env.PUBLIC_URL+'/top-icon.jpg']},
        {id: 6, title: 'Calvin & Hobbes Hoodie', measurements: ['Medium', '24.5 Inches','24 Inches'], description: 'Made from two vintage Ontario Basketball Hoodies. Front pockets included', path: process.env.PUBLIC_URL+'/calvin-hobbs-front.jpg', type: "tops", payment_link:"https://buy.stripe.com/9AQbKtg3gaFL03CdQS", price: 85.00, status: "available", images: [process.env.PUBLIC_URL+'/top-icon.jpg']},
        {id: 7, title: 'D Wade Shorts', measurements: ['Small', '16.5 Inches'], description: 'Made from Vintage Miami Heat Dwayne Wade Jersey. Side Seam Pockets and back pocket. Basketball Mesh added on.', path: process.env.PUBLIC_URL+'/dwade-shorts-front.jpg', type: "bottoms", payment_link:"https://buy.stripe.com/fZe8yh18m7tzaIg3ch", price: 60.00, status: "available", images: [process.env.PUBLIC_URL+'/top-icon.jpg']},
     ]

    const headers = [
        {title: '+ Shop', id:"shop", component:<br/>, url: '/shop'},
        {title: 'Home', id:"home", component:<Home pieces={pieces}/>, url: '/home'},
        {title: 'About', id:"about", component:<About/>, url: '/about'},
        {title: 'Contact', id:"contact", component:<Contact/>, url: '/contact'}
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

    const router = createBrowserRouter([
        { 
            path: '/*',
            errorElement: <span>404 Not Found</span>
          },
        { 
          path: '/',
          element: <Home pieces={pieces}/>,
          errorElement: <span>404 Not Found</span>
        },
        { 
            path: '/home',
            element: <Home pieces={pieces}/>,
            errorElement: <span>404 Not Found</span>
        },
        { 
          path: '/about',
          element: <About/>
        },
        { 
          path: '/contact',
          element: <Contact/>
        },
        { 
          path: '/shop',
          element: <ShopPage pieces={pieces}/>
        },
        { 
            path: '/shop/:category',
            element: <ShopPage pieces={pieces}/>,
            errorElement: <span>404 Not Found</span>
        },
      ]);
    
    const shopSections = [
        {title: 'Tops', id:'tops', url: '/shop/tops', component:<ShopPage pieces={filteredPieces("top")} title="Tops"/>, img: process.env.PUBLIC_URL+'/top-icon.jpg'},
        {title: 'Bottoms', id:'bottoms', url: '/shop/bottoms', component:<ShopPage pieces={filteredPieces("bottom")} title="Bottoms"/>, img: process.env.PUBLIC_URL+'/bottom-icon.jpg'},
        {title: 'Accessories', id:'accessories', url: '/shop/bottoms', component:<ShopPage pieces={filteredPieces("accessory")} title="Accessories"/>, img: process.env.PUBLIC_URL+'/accessory-icon.jpg'}
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
                {/* {content} */}
                <RouterProvider router={router}/>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default Main