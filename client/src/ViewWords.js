import React from 'react';
import axios from 'axios';

export default class ViewWords extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            words: []
        };
    }
    render(){
        const wordsMap = this.state.words.map((words)=> <div>{words.name}</div>)
        return (
            <div>
        <h3>View Words</h3>
        {wordsMap}

            </div>
        
        
        );
    }
    componentWillMount(){
        console.log('this is before the render');
        axios('/api/students/all').then(response => {
            this.setState({
                students: response.data
            });
        });
    }
}


//list of students from server
//api route for list of students