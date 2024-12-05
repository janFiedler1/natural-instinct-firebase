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

    const pieces = [
        {id: 1, 
            title: 'Rockets Shorts', 
            measurements: ['Size: Medium', 'Length: 19.5 Inches'], 
            description: 'Made from a pair of used vintage pants and a vintage James Harden Houston Rockets Jersey. Back welt pockets included.', 
            path: process.env.PUBLIC_URL+'/rockets-shorts-front.jpg', 
            type: "bottoms", 
            payment_link:"https://buy.stripe.com/cN2bKtcR415b4jSbII", 
            price: 60.00, 
            status: "sold", 
            images: [process.env.PUBLIC_URL+'/rockets-shorts-front.jpg',process.env.PUBLIC_URL+'/rockets-shorts-back.jpg',process.env.PUBLIC_URL+'/harden-shorts-model-front.jpg',process.env.PUBLIC_URL+'/harden-shorts-model-back.jpg']
        },
        {id: 2, 
            title: 'Earth First Longsleeve', 
            measurements: ['Size: Medium'], description: '', 
            path: process.env.PUBLIC_URL+'/earth-first-front.jpg', 
            type: "tops", 
            payment_link:"", 
            price: 100.00, 
            status: "sold", 
            images: []
        },
        {id: 3, 
            title: 'Give Me Space Jacket', 
            measurements: ['Size: Medium', 'Length: 23.5 Inches'], 
            description: 'Made from an old pair of pajamas and adidas track pants. Front Pockets included.', 
            path: process.env.PUBLIC_URL+'/give-me-space-front.jpg', 
            type: "tops", 
            payment_link:"https://buy.stripe.com/00g5m58AO8xD9EcbIJ", 
            price: 60.00, 
            status: "available", 
            images: [process.env.PUBLIC_URL+'/give-me-space-front.jpg',process.env.PUBLIC_URL+'/give-me-space-back.jpg',process.env.PUBLIC_URL+'/give-me-space-model-front.jpg',process.env.PUBLIC_URL+'/give-me-space-model-back.jpg']
        },
        {id: 4, 
            title: 'Yin Yang Longsleeve', 
            measurements: ['Size: Medium', 'Length: 24 Inches','Width: 22 Inches'], 
            description: 'Made from two Adidas Long sleeves.', 
            path: process.env.PUBLIC_URL+'/yin-yang-front.jpg', 
            type: "tops", 
            payment_link:"https://buy.stripe.com/4gw5m54ky4hneYw6or", 
            price: 70.00, status: "available", 
            images: [process.env.PUBLIC_URL+'/yin-yang-front.jpg',process.env.PUBLIC_URL+'/yin-yang-back.jpg',process.env.PUBLIC_URL+'/yin-yang-model-front.jpg',process.env.PUBLIC_URL+'/yin-yang-model-back.jpg']
        },
        {id: 5, 
            title: 'White Sox Jersey', 
            measurements: ['Size: Medium', 'Length: 27 Inches'], 
            description: 'Made from vintage Chicago White Sox Jersey and parts of a flannel.', 
            path: process.env.PUBLIC_URL+'/white-sox-front.jpg',
            type: "tops", 
            payment_link:"https://buy.stripe.com/6oE5m54kyaFL4jSaEI", 
            price: 35.00, 
            status: "available", 
            images: [process.env.PUBLIC_URL+'/white-sox-front.jpg',process.env.PUBLIC_URL+'/white-sox-back.jpg',process.env.PUBLIC_URL+'/white-sox-model-front.jpg',process.env.PUBLIC_URL+'/white-sox-model-back.jpg']
        },
        {id: 6, 
            title: 'Calvin & Hobbes Hoodie', 
            measurements: ['Size: Medium', 'Length: 24.5 Inches','Width: 24 Inches'], 
            description: 'Made from two vintage Ontario Basketball Hoodies. Front pockets included', 
            path: process.env.PUBLIC_URL+'/calvin-hobbs-front.jpg', 
            type: "tops", 
            payment_link:"https://buy.stripe.com/9AQbKtg3gaFL03CdQS", 
            price: 85.00, 
            status: "available", 
            images: [process.env.PUBLIC_URL+'/calvin-hobbs-front.jpg',process.env.PUBLIC_URL+'/clavin-hobbs-back.jpg',process.env.PUBLIC_URL+'/calvin-hobbes-model-front.jpg',process.env.PUBLIC_URL+'/calvin-hobbes-model-back.jpg']
        },
        {id: 7, 
            title: 'D Wade Shorts', 
            measurements: ['Size: Small', 'Length: 16.5 Inches'], 
            description: 'Made from Vintage Miami Heat Dwayne Wade Jersey. Side Seam Pockets and back pocket. Basketball Mesh added on.', 
            path: process.env.PUBLIC_URL+'/dwade-shorts-front.jpg', 
            type: "bottoms", 
            payment_link:"https://buy.stripe.com/fZe8yh18m7tzaIg3ch", 
            price: 60.00, 
            status: "available", 
            images: [process.env.PUBLIC_URL+'/dwade-shorts-front.jpg',process.env.PUBLIC_URL+'/dwade-shorts-back.jpg',process.env.PUBLIC_URL+'/dwade-model-front.jpg',process.env.PUBLIC_URL+'/dwade-model-back.jpg']
        },
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
        // { 
        //   path: '/shop',
        //   element: <ShopPage pieces={pieces}/>,
        // //   children: [
        // //     { 
        // //         path: '/shop/:category',
        // //         element: <ShopPage pieces={pieces}/>,
        // //         errorElement: <span>404 Not Found</span>
        // //     }
        // //   ]
        // },
        { 
            path: '/tops',
            element: <ShopPage pieces={pieces} category="tops"/>
        },
        { 
            path: '/bottoms',
            element: <ShopPage pieces={pieces} category="bottoms"/>
        },
        { 
            path: '/accessories',
            element: <ShopPage pieces={pieces} category="accessories"/>
        }
      ]);
    
    const shopSections = [
        {title: 'Tops', id:'tops', url: '/tops', component:<ShopPage pieces={filteredPieces("tops")} title="Tops"/>, img: process.env.PUBLIC_URL+'/top-icon.jpg'},
        {title: 'Bottoms', id:'bottoms', url: '/bottoms', component:<ShopPage pieces={filteredPieces("bottoms")} title="Bottoms"/>, img: process.env.PUBLIC_URL+'/bottom-icon.jpg'},
        {title: 'Accessories', id:'accessories', url: '/accessories', component:<ShopPage pieces={filteredPieces("accessories")} title="Accessories"/>, img: process.env.PUBLIC_URL+'/accessory-icon.jpg'}
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
                <RouterProvider router={router}/>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default Main