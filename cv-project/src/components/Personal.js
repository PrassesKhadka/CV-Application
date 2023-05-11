import React,{Component} from 'react';
import Education from './Education';
import Experience from './Experience';

class Personal extends Component{
    constructor()
    {
        super();
        this.state={
            personal:{
                name:['Full Name',false],
                email:['example@gmail.com',false],
                phone:['9863490421',false],
            },
            education:{
                university:['Cool University',false],
                city:['Kathmandu,Nepal',false],
                degree:['Bachelors',false],
                subject:['BSc Computer Science',false],
                from:['2020',false],
                to:['2025',false],
            },
            experience:{
                company:['Adventure tech',false],
                position:['Sr.Web Developer',false],
                location:['Thamel,Kathmandu',false],
                from:['2018',false],
                to:['',false],
                responsibility:['',false],
            },
        };
        this.edit=this.edit.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)

    }

    //Changes edit to true such that input form appeared for the user to enter the data
    edit=(state,key)=>{
        this.setState(prevState=>({
            [state]:{
                ...prevState[state],
                [key]:[prevState[state][key][0],true],
            }
        }))
    }
    //when submitted edit toggled to false such that personal info shown instead of the input form
    onSubmit=(e,state,key)=>{
        e.preventDefault()
        this.setState(prevState=>({
            [state]:{
                ...prevState[state],
                [key]:[prevState[state][key][0],false],
            }
        }))
    }
    //Updates input based on input by the user on input tag
    handleChange=(e,state,key)=>{
        this.setState(prevState=>({
            [state]:{
                ...prevState[state],
                [key]:[e.target.value,prevState[state][key][1]],
            }
        }))
    }

    render()
    {
        //Destructuring state
        const {personal,education,experience}=this.state;
        return(
            <div>
                {/* For Name */}
                <span onClick={()=>this.edit('personal','name')}>{personal.name[1] ?
                <form onSubmit={(e)=>this.onSubmit(e,'personal','name')}>
                    <input onChange={(e)=>this.handleChange(e,'personal','name')} type='text'></input>
                    <button type="submit">Ok</button>
                </form>
                :personal.name[0]}
                </span>
                <br></br>
                {/*  */}
                <h2>Personal Info</h2>
                <br></br>
                {/* For email */}
                <span onClick={()=>this.edit('personal','email')}>{personal.email[1] ?
                <form onSubmit={(e)=>this.onSubmit(e,'personal','email')}>
                    <input onChange={(e)=>this.handleChange(e,'personal','email')} type='text'></input>
                    <button type="submit">Ok</button>
                </form>
                :personal.email[0]}
                </span>
                <br></br>
                {/* For phone */}
                <span onClick={()=>this.edit('personal','phone')}>{personal.phone[1] ?
                <form onSubmit={(e)=>this.onSubmit(e,'personal','phone')}>
                    <input onChange={(e)=>this.handleChange(e,'personal','phone')} type='text'></input>
                    <button type="submit">Ok</button>
                </form>
                :personal.phone[0]}
                </span>
                <Education education={education} edit={this.edit} handleChange={this.handleChange} onSubmit={this.onSubmit}></Education>
                <Experience experience={experience} edit={this.edit} handleChange={this.handleChange} onSubmit={this.onSubmit}></Experience>
            </div>
        )
    }
}
export default Personal;