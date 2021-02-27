import React from 'react';
import axios from 'axios';
import Sequences from './Sequences';

class SequenceList extends React.Component{
    state = {
        sequencs:[]
    }
    componentDidMount(){
        axios.get("/align/history/").then(res=>{
            this.setState(
                {
                    
                    sequencs : res.data
                }
            );
            console.log(res.data);
        })
    }
    render(){
        return(
            <Sequences data={this.state.sequencs}/>
           
        )
    }
}

export default SequenceList;