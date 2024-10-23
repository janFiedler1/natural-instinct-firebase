import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import About from './AboutComponent';
import Home from './HomeComponent';
import Contact from './GeneratedContactComponent';
import NoPageFound from './NoPageFound';
// import NavButton from './StaticNavButtonComponent'

function Main (){
    const [content, setContent] = useState('<Home/>');

    const handleClick = (newContent) => {
        setContent(newContent);
    };
    return (
        <React.Fragment>
            <Header/>
            <div className='home'>
            <h1>Dynamic Content Changer</h1>
            <button onClick={() => handleClick('Content for Button 1')}>Button 1</button>
            <button onClick={() => handleClick('Content for Button 2')}>Button 2</button>
            <button onClick={() => handleClick('Content for Button 3')}>Button 3</button>
            <p>{content}</p>
            </div>
            
            <Footer/>
        </React.Fragment>
    )
}
export default Main