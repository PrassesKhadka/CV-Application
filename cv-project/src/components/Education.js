import React,{Component} from 'react';

class Education extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        const {education,edit,handleChange,onSubmit}=this.props;
        return(
            <div>
                <h2>Education</h2>
                {/* edit function is a prop here from Personal Component */}
                {/* edit function changes the university[1]=true such that Form/Input will be shown for user to input */}
                <span onClick={()=>edit('education','university')}>
                    {education.university[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'education','university')}>
                        <input onChange={(e)=>handleChange(e,'education','university')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :education.university[0]
                    }
                </span>
            </div>
        )
    }


}
export default Education;