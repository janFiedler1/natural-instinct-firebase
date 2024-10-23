import {Fragment, useState} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import '../component-css/MainComponent.css'


function Main (){
    const [content, setContent] = useState(<Home/>);

    const handleContentChange = (value) => {
        setContent(value);
      };
    
    return (
        <Fragment>
            <Header stateChangeFunction = {handleContentChange}/>
            <div className='content-container'>
                {content}
            </div>
            <Footer/>
        </Fragment>
    )
}
export default Main