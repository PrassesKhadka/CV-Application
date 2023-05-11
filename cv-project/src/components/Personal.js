import React,{Component} from 'react';
import formAppear from './Form';

class Personal extends Component{
    constructor()
    {
        super();
        this.state={
            personal:{
                name:['Full Name',false],
                email:['example@gmail.com',false],
                phone:['9863490421',false],
            }
        };
        this.edit=this.edit.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)

    }

    edit=(key)=>{
        this.setState(prevState=>({
            personal:{
                ...prevState.personal,
                [key]:[prevState.personal[key][0],true],
            }
        }))
    }
    onSubmit=(e,key)=>{
        e.preventDefault()
        this.setState(prevState=>({
            personal:{
                ...prevState.personal,
                [key]:[prevState.personal[key][0],false],
            }
        }))
    }
    handleChange=(e,key)=>{
        this.setState(prevState=>({
            personal:{
                ...prevState.personal,
                [key]:[e.target.value,prevState.personal[key][1]],
            }
        }))
    }

    render()
    {
        //Destructuring state
        const {personal}=this.state;
        return(
            <div>
                {/* For Name */}
                <span onClick={()=>this.edit('name')}>{personal.name[1] ?
                <form onSubmit={(e)=>this.onSubmit(e,'name')}>
                    <input onChange={(e)=>this.handleChange(e,'name')} type='text'></input>
                    <button type="submit">Ok</button>
                </form>
                :personal.name[0]}
                </span>
                <br></br>
                {/* For email */}
                <span onClick={()=>this.edit('email')}>{personal.email[1] ?
                <form onSubmit={(e)=>this.onSubmit(e,'email')}>
                    <input onChange={(e)=>this.handleChange(e,'email')} type='text'></input>
                    <button type="submit">Ok</button>
                </form>
                :personal.email[0]}
                </span>
                <br></br>
                {/* For phone */}
                <span onClick={()=>this.edit('phone')}>{personal.phone[1] ?
                <form onSubmit={(e)=>this.onSubmit(e,'phone')}>
                    <input onChange={(e)=>this.handleChange(e,'phone')} type='text'></input>
                    <button type="submit">Ok</button>
                </form>
                :personal.phone[0]}
                </span>
            </div>
        )
    }
}
export default Personal;