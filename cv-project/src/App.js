import React,{Component} from 'react';
import Personal from './components/Personal.js'
import Education from './components/Education.js'
import Skills from './components/Skills.js'
import Experience from './components/Experience.js'
import Footer from './components/Footer.js'

class App extends Component
{
    render()
    {
        return(
            <div>
                <span id='my-cv'>My CV</span>
                <Personal/>
                <Education/>
                <Skills/>
                <Experience/>
                <Footer/>
            </div>
        )
    }
}
export default App;