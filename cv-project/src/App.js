import React,{Component} from 'react';
import Personal from './components/Personal.js';
import Footer from './components/Footer.js';
import styles from './styles/App.css';
class App extends Component
{
    render()
    {
        return(
            <div class='container background-blue'>
                <div class='center background-black '>My CV</div>
                <Personal/>
                <Footer/>
            </div>
        )
    }
}
export default App;