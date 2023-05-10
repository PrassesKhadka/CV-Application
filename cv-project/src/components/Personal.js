import React,{Component} from 'react';
import formAppear from './Form';

class Personal extends Component{
    constructor()
    {
        super()
        this.state={
            edit:false,
            personal:{
                name:'Full Name',
                email:'example@gmail.com',
                phone:'9863490421',
            }
        }
    }

    edit=()=>{
        this.setState(prevState=>({
            edit:!prevState.edit,
        }))
        
    }
    onChange=(e)=>{
        e.preventDefault()
        this.setState(prevState=>({
            edit:!prevState.edit
        }))
    }
    handleChange=(e)=>{
        this.setState({
            personal:{
                name:e.target.value,
            }
        })
    }

    render()
    {
        //Destructuring state
        const {edit,personal}=this.state;
        return(
            <div>
                <h1>{edit ?
                <form onSubmit={this.onChange}>
                    <input onChange={this.handleChange} type='text'></input>
                </form>
                :personal.name}
                </h1>
                <button onClick={this.edit}>Edit</button>
            </div>
        )
    }
}
export default Personal;