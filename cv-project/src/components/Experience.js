import React,{Component} from 'react';

class Experience extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        const {experience,edit,handleChange,onSubmit}=this.props;
        return(
            <div>
                <h2>Experience</h2>
                {/* edit function is a prop here from Personal Component */}
                {/* edit function changes the company[1]=true such that Form/Input will be shown for user to input */}
                {/* Uniiversity secion */}
                <span onClick={()=>edit('experience','company')}>
                    {experience.company[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'experience','company')}>
                        <input onChange={(e)=>handleChange(e,'experience','company')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :experience.company[0]
                    }
                </span>
                <br></br>
                {/* position secion */}
                <span onClick={()=>edit('experience','position')}>
                    {experience.position[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'experience','position')}>
                        <input onChange={(e)=>handleChange(e,'experience','position')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :experience.position[0]
                    }
                </span>
                <br></br>
                {/* location secion */}
                <span onClick={()=>edit('experience','location')}>
                    {experience.location[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'experience','location')}>
                        <input onChange={(e)=>handleChange(e,'experience','location')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :experience.location[0]
                    }
                </span>
                <br></br>
                {/* From secion */}
                <span onClick={()=>edit('experience','from')}>
                    {experience.from[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'experience','from')}>
                        <input onChange={(e)=>handleChange(e,'experience','from')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :experience.from[0]
                    }
                </span>
                <br></br>
                {/* To secion */}
                <span onClick={()=>edit('experience','to')}>
                    {experience.to[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'experience','to')}>
                        <input onChange={(e)=>handleChange(e,'experience','to')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :experience.to[0]
                    }
                </span>
                {/* responsibilities secion */}
                <span onClick={()=>edit('experience','responsibility')}>
                    {experience.responsibility[1]
                    ?
                    <form onSubmit={(e)=>onSubmit(e,'experience','responsibility')}>
                        <input onChange={(e)=>handleChange(e,'experience','responsibility')} type='text'></input>
                        <button type='submit'>Ok</button>
                    </form>
                    :experience.responsibility[0]
                    }
                </span>
                <br></br>
            </div>
        )
    }
}
export default Experience;