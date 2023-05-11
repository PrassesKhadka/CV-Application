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
                {/* Uniiversity secion */}
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
                <br></br>
                {/* City secion */}
                <span onClick={()=>edit('education','city')}>
                    {education.city[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'education','city')}>
                        <input onChange={(e)=>handleChange(e,'education','city')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :education.city[0]
                    }
                </span>
                <br></br>
                {/* Degree secion */}
                <span onClick={()=>edit('education','degree')}>
                    {education.degree[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'education','degree')}>
                        <input onChange={(e)=>handleChange(e,'education','degree')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :education.degree[0]
                    }
                </span>
                <br></br>
                {/* Subject secion */}
                <span onClick={()=>edit('education','subject')}>
                    {education.subject[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'education','subject')}>
                        <input onChange={(e)=>handleChange(e,'education','subject')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :education.subject[0]
                    }
                </span>
                <br></br>
                {/* From secion */}
                <span onClick={()=>edit('education','from')}>
                    {education.from[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'education','from')}>
                        <input onChange={(e)=>handleChange(e,'education','from')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :education.from[0]
                    }
                </span>
                <br></br>
                {/* To secion */}
                <span onClick={()=>edit('education','to')}>
                    {education.to[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'education','to')}>
                        <input onChange={(e)=>handleChange(e,'education','to')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :education.to[0]
                    }
                </span>
            </div>
        )
    }


}
export default Education;