import React from 'react';
import axios from 'axios';
import Sequences from './Sequences';
import CustomForm from './Form';

class RecentList extends React.Component{
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
            <div>
            <Sequences data={this.state.sequencs}/>
            <br />
            <h2>Submit a DNA sequence</h2>
            <CustomForm/>
            </div>
        )
    }
}

export default RecentList;