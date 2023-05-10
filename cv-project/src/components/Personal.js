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
        this.setState({
            edit:true,
        })
        
    }
    onSubmit=(e)=>{
        e.preventDefault()
        this.setState({
            edit:false,
        })
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
                <span onClick={this.edit}>{edit ?
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.handleChange} type='text'></input>
                    <button type="submit">Ok</button>
                </form>
                :personal.name}
                </span>
            </div>
        )
    }
}
export default Personal;